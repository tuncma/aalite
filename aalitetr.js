// AALite OTA AdBlock Engine v1.0
// Bu kodu GitHub'daki aalitetr.js dosyanızın içine kopyalayınız.

(function() {
    // 1. AĞ (NETWORK) SEVİYESİNDE REKLAM İMHA ETME (JSON Pruning)
    // uBlock Origin mantığı: YouTube API yanıtlarındaki reklam nesnelerini sızmadan önce boşaltır.
    const pruneAdPlacements = (text) => {
        if (!text) return text;
        try {
            if (text.includes('"adPlacements"') || text.includes('"adSlots"')) {
                // Regex ile adPlacements ve adSlots dizilerini sil (Videolar direkt başlar)
                return text.replace(/"adPlacements"\s*:\s*\[.*?\}\]\s*,/gs, '')
                           .replace(/"adSlots"\s*:\s*\[.*?\}\]\s*,/gs, '');
            }
        } catch (e) {}
        return text;
    };

    // fetch API'sini yakala
    const originalFetch = window.fetch;
    window.fetch = async function() {
        const response = await originalFetch.apply(this, arguments);
        const url = arguments[0];
        if (typeof url === 'string' && (url.includes('/player') || url.includes('/get_watch') || url.includes('/next'))) {
            const clone = response.clone();
            const text = await clone.text();
            const pruned = pruneAdPlacements(text);
            return new Response(pruned, {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers
            });
        }
        return response;
    };

    // XMLHttpRequest API'sini yakala
    const originalXHR = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (typeof url === 'string' && (url.includes('/player') || url.includes('/get_watch') || url.includes('/next'))) {
            this.addEventListener('readystatechange', function() {
                if (this.readyState === 4 && this.responseText) {
                    try {
                        const pruned = pruneAdPlacements(this.responseText);
                        Object.defineProperty(this, 'responseText', { value: pruned, writable: false });
                    } catch (e) {}
                }
            });
        }
        originalXHR.apply(this, arguments);
    };

    // 2. YOUTUBE ANTI-ADBLOCK CEZA BYPASS (Anomali Koruması)
    // YouTube'un "reklam engellendi" cezasını (onAbnormalityDetected) hissetmemesi için Promise.then bypass'ı
    const originalThen = Promise.prototype.then;
    Promise.prototype.then = function(onFulfilled, onRejected) {
        if (typeof onFulfilled === 'function' && onFulfilled.toString().includes('onAbnormalityDetected')) {
            onFulfilled = function() {}; // Boşalt, ceza fonksiyonunu devre dışı bırak
        }
        return originalThen.call(this, onFulfilled, onRejected);
    };

    // 3. DOM SEVİYESİ FALLBACK (Mobil uyumlu, kaba kuvvet atlatma)
    const checkAndSkipAd = () => {
        try {
            const isAd = document.querySelector('.ad-showing, .ad-interrupting, .ytm-ad-badge, ytm-ad-badge, [class*="ad-badge"]');
            if (isAd) {
                const video = document.querySelector('video');
                if (video) {
                    video.muted = true;
                    video.playbackRate = 16.0; // Eski yöntemlerden miras
                    // YouTube duration manipülasyonunu çökertmemek için prototype override
                    try { Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime').set.call(video, 999999); } 
                    catch(e) { video.currentTime = 999999; }
                }
                const skipBtn = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytm-skip-ad-button');
                if (skipBtn) skipBtn.click();
            }
            
            // Reklam Engelleyici Uyarı Pencerelerini (Modal) Kapat
            const warning = document.querySelector('tp-yt-paper-dialog, #error-screen, .yt-error-display-v2');
            if (warning) {
                const text = warning.innerText || '';
                if (text.includes('ad blocker') || text.includes('reklam') || text.includes('ad-blocking')) {
                    warning.remove();
                    const v = document.querySelector('video');
                    if (v) v.play();
                }
            }
        } catch(e) {}
    };

    // 4. SPA (Single Page Application) KORUMA MOTORU
    if (window.aaliteAdTimer) clearInterval(window.aaliteAdTimer);
    window.aaliteAdTimer = setInterval(checkAndSkipAd, 500);

    if (window.aaliteAdObserver) window.aaliteAdObserver.disconnect();
    window.aaliteAdObserver = new MutationObserver(checkAndSkipAd);
    window.aaliteAdObserver.observe(document.documentElement, { childList: true, subtree: true });

    // 5. CSS HIDING (Afiş Reklamları İçin Görünmezlik)
    try {
        if (!document.getElementById('aalite-adblock-css')) {
            const style = document.createElement('style');
            style.id = 'aalite-adblock-css';
            style.innerHTML = 'ytd-ad-slot-renderer, ytm-promoted-video-renderer, ytd-promoted-sparkles-web-renderer, .video-ads { display: none !important; }';
            (document.head || document.documentElement).appendChild(style);
        }
    } catch(e) {}
})();

