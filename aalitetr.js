// AALite OTA AdBlock Engine v2.0 - Stabil Sürüm
// DOM Tabanlı Hızlandırma ve Engelleyici
(function() {
    console.log("AALite AdBlock Engine Başlatıldı!");

    // 1. DÜZEY: Hızlı Reklam Atlama ve İleri Sarma
    setInterval(() => {
        // "Reklamı Atla" butonlarını bul ve anında tıkla
        const skipBtn = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button');
        if (skipBtn) {
            skipBtn.click();
        }
        
        // Reklam oynuyorsa ve atla butonu çıkmadıysa, reklamı anında sonuna sar
        const adVideo = document.querySelector('.ad-showing video') || document.querySelector('.html5-main-video[src*="googlevideo.com/videoplayback"]');
        const adContainer = document.querySelector('.ytp-ad-player-overlay, .ytp-ad-showing');
        
        if (adContainer && adVideo && adVideo.currentTime > 0) {
            adVideo.currentTime = adVideo.duration > 0 ? adVideo.duration - 0.1 : 9999;
            adVideo.playbackRate = 16.0; // Reklamı 16x hızda tüket
        }
        
        // Video içi banner reklamları gizle
        const overlays = document.querySelectorAll(`
            .ytp-ad-overlay-container,
            .ytp-ad-message-container,
            ytd-promoted-sparkles-web-renderer,
            ytd-ad-slot-renderer,
            ytd-in-feed-ad-layout-renderer,
            .ytd-popup-container
        `);
        overlays.forEach(el => {
            if (el && el.style.display !== 'none') {
                el.style.display = 'none';
            }
        });
    }, 300);

    // 2. DÜZEY: Siyah/Gri Ekran Beklemesini Engelleme
    // YouTube videoyu kasten bekletiyorsa zorla oynat
    setInterval(() => {
        const video = document.querySelector('.html5-main-video');
        const isAdShowing = document.querySelector('.ytp-ad-showing');
        
        if (video && video.paused && !isAdShowing) {
            const playBtn = document.querySelector('.ytp-play-button');
            if (playBtn && playBtn.getAttribute('aria-label') && playBtn.getAttribute('aria-label').includes('Oynat')) {
                // Eğer reklam bittiği halde YouTube asıl videoyu durdurduysa zorla oynat
                playBtn.click();
            }
        }
    }, 1500);

})();
