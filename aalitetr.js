// AALite OTA AdBlock Engine v2.1
(function() {
    // Her sayfa yuklemesinde birden fazla enjeksiyon olsa bile sadece bir kez kurulur
    if (window.__aaliteAdEngine) return;
    window.__aaliteAdEngine = true;

    var saved = null;

    function injectStyle() {
        if (document.getElementById('aalite-ad-style')) return;
        var st = document.createElement('style');
        st.id = 'aalite-ad-style';
        st.textContent =
            '.ytp-ad-overlay-container,' +
            '.ytp-ad-message-container,' +
            '.ytp-ad-image-overlay,' +
            'ytd-promoted-sparkles-web-renderer,' +
            'ytd-ad-slot-renderer,' +
            'ytd-in-feed-ad-layout-renderer,' +
            'ytd-display-ad-renderer,' +
            'ytm-promoted-sparkles-web-renderer,' +
            'ytm-promoted-video-renderer,' +
            'ad-slot-renderer,' +
            'ytm-companion-ad-renderer { display: none !important; }';
        (document.head || document.documentElement).appendChild(st);
    }

    function handleAds() {
        try {
            injectStyle();

            var player = document.querySelector('#movie_player') || document.querySelector('.html5-video-player');
            var video = document.querySelector('video.html5-main-video') || document.querySelector('video');
            if (!player || !video) return;

            var adShowing = player.classList.contains('ad-showing') ||
                            player.classList.contains('ad-interrupting');

            if (adShowing) {
                // Reklam oncesi kullanicinin ses ve hiz ayarini hatirla
                if (!saved) {
                    saved = { muted: video.muted, rate: video.playbackRate };
                }

                // Atla butonu varsa tikla
                var skipBtn = document.querySelector(
                    '.ytp-skip-ad-button, .ytp-ad-skip-button-modern, .ytp-ad-skip-button, ' +
                    '.ytp-ad-skip-button-container button, button.ytp-ad-skip-button-modern'
                );
                if (skipBtn) {
                    skipBtn.click();
                }

                // Reklami sessize al ve hizlandir
                video.muted = true;
                try { video.playbackRate = 16; } catch (e) {}

                // Sadece kisa ve sonlu sureli reklam videosunda sona sar.
                // Sure uzunsa asil icerik olabilir; bu durumda sarma yapilmaz.
                var d = video.duration;
                if (isFinite(d) && d > 0 && d <= 180 && video.currentTime > 0 && video.currentTime < d - 0.2) {
                    video.currentTime = d - 0.1;
                }
            } else if (saved) {
                // Reklam bitti, eski ses ve hiz ayarini geri yukle
                video.muted = saved.muted;
                try { video.playbackRate = saved.rate; } catch (e) {}
                saved = null;
            }
        } catch (e) {}
    }

    // Oynatici sinif degisikliklerini ve DOM degisikliklerini izle
    function startObserver() {
        if (!document.body) {
            setTimeout(startObserver, 200);
            return;
        }
        var obs = new MutationObserver(handleAds);
        obs.observe(document.body, {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ['class']
        });
    }

    startObserver();
    // Yedek: observer kacirirsa
    setInterval(handleAds, 400);
    handleAds();

    console.log('AALite AdBlock Engine v2.1 baslatildi');
})();
