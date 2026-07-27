# 🇹🇷 TÜRKÇE DOKÜMANTASYON (TURKISH)

# 🚗 Auto Lite - Ultimate Android Auto Entertainment & Multimedia Hub (No Root)

**Auto Lite TR**, Android Auto platformunun (Car App Library) katı kısıtlamalarını yıkarak; aracınızın bilgi-eğlence ekranını (Head Unit) tam teşekküllü bir multimedya merkezine dönüştüren, **Root gerektirmeyen (No Root required)**, üst düzey mimariye sahip kapalı kaynak (closed-source) bir uygulamadır.

IPTV Player, Web Browser, YouTube for Android Auto, Screen Mirroring (Ekran Yansıtma) ve Global Internet Radio özelliklerini tek bir çatı altında toplayan Auto Lite; özellikle **Direksiyon Kumandası Entegrasyonu (Steering Wheel Controls Integration)**, **Uzak Cep Telefonu Yönetimi (Remote Phone Configuration)** ve **Kendi Geliştirdiğimiz Araç İçi Ekran Klavyesi (Custom Android Auto OSK)** ile sürücülere rakipsiz, eller serbest (hands-free) bir deneyim sunar.

---

## 🎥 Test Videosu (Demo)

Uygulamanın özelliklerini (Direksiyon kumandası kullanımı, özel ekran klavyesi ve arayüz dinamiklerini) aşağıdaki videodan izleyebilirsiniz:

[![Auto Lite Tanıtım Videosu](https://img.youtube.com/vi/hhLW9V4_sc8/maxresdefault.jpg)](https://youtu.be/hhLW9V4_sc8)

> 📺 **[Videoyu YouTube Üzerinde İzlemek İçin Buraya Tıklayın (Click to Watch on YouTube)](https://youtu.be/hhLW9V4_sc8)**

---

## 🌟 Öne Çıkan Özellikler ve Teknik Mimari (Core Features)

### 🛞 Tam Direksiyon Kumandası Entegrasyonu (Steering Wheel Controls)
Sürüş güvenliğini bozmadan maksimum kontrol! Uygulamamız, aracınızın donanımsal medya tuşlarıyla kusursuz konuşmak için `MediaSessionCompat` ve Android Auto donanım API'lerini doğrudan kullanır.

* **YouTube Entegrasyonu (JS Injection):** Sadece IPTV değil, **YouTube izlerken de direksiyon kumandanız aktif!** Direksiyondan ileri/geri (Next/Prev) tuşlarına basarak YouTube videolarını 10 saniye ileri/geri sarabilir, oynatıp duraklatabilirsiniz. Webview ile araç donanımı arasındaki bu köprü (Bridge), özel JS Event Listener'lar ile sağlanmıştır.
* **IPTV ve Radyo (Zapping):** Direksiyondaki tuşlarla binlerce M3U kanalı veya internet radyosu arasında saniyeler içinde geçiş yapın.

### 📱 Telefondan Anlık ve Detaylı Yönetim (Real-Time Configuration)
Araçtayken ekrana dokunup ayar aramakla uğraşmayın! Auto Lite, son derece gelişmiş bir **Mobil Uygulama Kontrol Paneli** sunar.

* **Anlık Senkronizasyon (Live UI Update):** Cep telefonunuzdaki ayar menüsünden YouTube varsayılan çözünürlüğünü, IPTV ekran modunu (Sığdır, Esnet, Yakınlaştır - Scale/Crop/Fit) veya radyo görselleştiricisinin rengini değiştirdiğiniz an; `OnSharedPreferenceChangeListener` mimarisi sayesinde **milisaniyeler içinde araç ekranındaki görüntü yenilenir**.
* **Kolay Kullanım:** Tamamen uzaktan, hızlı, detaylı ve kullanıcı dostu (User-friendly) konfigürasyon.

### ⌨️ Özel Araç İçi Ekran Klavyesi (Custom On-Screen Keyboard)
Google'ın Android Auto üzerindeki 3. parti uygulamalara uyguladığı "klavye açılamaz" (No Keyboard Support) limitini tamamen hack-free bir yöntemle aştık! Auto Lite, kendi UI katmanında (Canvas) özel olarak render edilen akıllı bir dokunmatik klavyeye (`Custom OSK for Android Auto`) sahiptir.

* **Sürüş Kolaylığı:** YouTube'da video ararken veya Web tarayıcıda URL girerken telefonu elinize almanıza gerek kalmaz. Doğrudan araç ekranından (Head Unit Touchscreen) veri girişi yapabilirsiniz.

### 📺 Gelişmiş Canlı TV Motoru (Advanced IPTV Player & M3U Parser)
ExoPlayer donanım ivmelendirmesi (Hardware Acceleration) ile güçlendirilmiş, takılmasız canlı TV deneyimi.

* **Yüksek Hız:** Binlerce kanallık M3U listelerini saniyeler içinde parse (ayrıştırma) eden motor.
* **Akıllı Yönetim:** Dinamik Alt Kategoriler, Hızlı Favoriler Sistemi ve akıllı önbellekleme (Smart Caching).

### 📻 Akıllı Radyo Modülü (Intelligent Web Radio & Audio Focus)
Arka planda kesintisiz çalışan, dünyanın her yerinden radyolara erişim sağlayan akıllı modül.

* **Ses Odaklanması Çatışma Çözümü (Audio Focus Handling):** Android Auto'nun `CarAudioManager` sistemiyle tam entegre çalışır. IPTV veya başka bir kaynaktan radyoya geçtiğinizde ses kanallarını mükemmel yönetir, ses kesilmesi yaşatmaz.
* **Fail-Safe Server Routing:** Global API (örn. radio-browser) çökse bile (502 Bad Gateway), sistem otomatik olarak en stabil aktif sunucuya bağlanarak yayının kesilmesini engeller.
* **Dinamik Ses Spektrumu (Audio Visualizer):** Müziğin ritmine göre hareket eden, donanım ivmeli görsel animasyonlar.

### 🌐 Reklam Engelleyicili Tarayıcı (AdBlock YouTube & Web Browser)
* **Sıfır Reklam:** Geliştirdiğimiz özel JS Injection (AdBlocker Script) stratejisi sayesinde YouTube veya web sitelerindeki sponsorlu içerikler ve reklamlar siz görmeden anında engellenir.
* **Görünüm Kontrolü:** Özelleştirilebilir User-Agent spoofing ile araç ekranına özel Masaüstü/Mobil/Tablet görünümleri.

### 📲 Ekran Yansıtma ve Tersine Dokunmatik (Screen Mirroring & Reverse Touch)
* **Çift Yönlü Kontrol:** Telefon ekranınızı sadece araca yansıtmakla (Cast) kalmaz, Android 14+ güvenlik protokolleriyle uyumlu Accessibility Service (Erişilebilirlik Servisi) altyapısı sayesinde **araç ekranından dokunarak telefonunuzu kontrol etmenizi (Touch Injection)** sağlar.

---

## 🛠️ Arayüz ve Mimari Detaylar (UI/UX & Architecture Details)

* **Yüzer Sürüklenebilir Menü Butonu (Draggable FAB):** Ekranın köşelerini kapatmaması için parmağınızla istediğiniz yere sürükleyebileceğiniz şeffaf yüzer buton (Z-index layering).
* **Merkezi Kontrol Paneli (Center Modal Control Panel):** Sürüş esnasında dikkati dağıtmamak için tüm geçişleri ve kontrolleri tek bir ekranda toplayan göz yormayan Dark Mode uyumlu (Night-friendly) arayüz.
* **Durum Kurtarma ve Otomatik Devam (State Recovery & Auto-Resume):** Uygulamayı kapatıp açtığınızda, en son izlediğiniz kanal veya radyo kaldığı yerden saniyeler içinde otomatik başlar.

---

## 📱 Geniş İşletim Sistemi Desteği (Android 8.0 - Android 16)
Auto Lite, eski cihazlardan en yeni amiral gemisi modellere kadar kusursuz bir optimizasyonla çalışır. Geriye dönük uyumluluk (Backward Compatibility) yetenekleri sayesinde **Android 8.0 (Oreo)**'dan başlayıp, en güncel sürüm olan **Android 16**'ya kadar (API Level 26 - API Level 36) tüm Android ve Android Auto versiyonlarını %100 yerel (native) olarak destekler.

---

## 🏷️ Size Özel Beyaz Etiket Çözümleri (White-Label Solutions)
Geliştirdiğimiz bu devasa altyapıyı sizin markanıza özel hale getirebiliriz:

* **Sizin Markanız:** Sizin belirleyeceğiniz özel uygulama adı ve logolar.
* **Size Özel Altyapı:** Tamamen size ait benzersiz `com.sirketiniz.uygulamaadi` paket adı (Package Name).
* **Üst Düzey Güvenlik:** Kırılamaz özel şifreleme (Obfuscation / ProGuard) ile kod koruması.
* **Bağımsız Kazanç:** Uygulamayı doğrudan kendi **Google Play Developer** hesabınıza yükleyip tüm gelir modelini (Abonelik, Satış vb.) kendiniz yönetebileceğiniz hazır ve imzalı `.aab` paketleri.

Bu iş fırsatını değerlendirmek ve kendi Android Auto projenizi başlatmak için detayları görüşmek üzere iletişim kurabilirsiniz.

---

*This robust Android Auto application is designed to push the limits of Car App Development, bypassing generic OEM restrictions to deliver a true in-car entertainment system. Includes complex implementations of ExoPlayer, WebView JS Injection, MediaSessionCompat, and SharedPreferences synchronization. (Closed-Source)*



<br><br><br>
---
---
---
<br><br><br>



# 🇺🇸 İNGİLİZCE DOKÜMANTASYON (ENGLISH)

# 🚗 Auto Lite - Ultimate Android Auto Entertainment & Multimedia Hub (No Root)

**Auto Lite TR** is a closed-source application featuring a high-end architecture that breaks down the strict limitations of the Android Auto platform (Car App Library). It transforms your vehicle's infotainment screen (Head Unit) into a fully-fledged multimedia hub **without requiring any Root access (No Root required)**.

Bringing together an IPTV Player, Web Browser, YouTube for Android Auto, Screen Mirroring, and Global Internet Radio under a single roof, Auto Lite offers drivers an unrivaled, hands-free experience—especially through its **Steering Wheel Controls Integration**, **Remote Phone Configuration**, and our proprietary **Custom Android Auto OSK (On-Screen Keyboard)**.

---

## 🎥 Test Video (Demo)

You can watch the application's features (steering wheel control usage, custom on-screen keyboard, and interface dynamics) in the demo video below:

[![Auto Lite Promo Video](https://img.youtube.com/vi/hhLW9V4_sc8/maxresdefault.jpg)](https://youtu.be/hhLW9V4_sc8)

> 📺 **[Click Here to Watch the Video Directly on YouTube](https://youtu.be/hhLW9V4_sc8)**

---

## 🌟 Core Features & Technical Engineering

### 🛞 Advanced Steering Wheel Controls
Maximum control without compromising driving safety! Our application directly utilizes `MediaSessionCompat` and Android Auto hardware APIs to communicate flawlessly with your vehicle's physical media buttons.

* **YouTube Integration (JS Injection):** Your steering wheel controls remain active **not only during IPTV playback but also while watching YouTube!** You can fast-forward/rewind YouTube videos by 10 seconds, play, and pause simply by pressing the Next/Prev buttons on your steering wheel. This bridge between the WebView and vehicle hardware is powered by custom JS Event Listeners.
* **IPTV & Radio Zapping:** Easily switch between thousands of M3U channels or internet radio stations in seconds using your steering wheel buttons.

### 📱 Real-Time Phone Configuration
No more struggling to navigate settings by touching the vehicle screen while on the road! Auto Lite offers a highly advanced **Mobile App Control Panel**.

* **Live UI Synchronization:** The moment you change the default YouTube resolution, IPTV display mode (Scale/Crop/Fit), or the radio visualizer color from the settings menu on your smartphone, the **image on the vehicle screen updates within milliseconds** thanks to our `OnSharedPreferenceChangeListener` architecture.
* **Easy Operation:** Completely remote, fast, detailed, and user-friendly configuration.

### ⌨️ Custom In-Car On-Screen Keyboard
We bypassed Google's "No Keyboard Support" restriction imposed on 3rd-party apps on Android Auto using a completely hack-free method! Auto Lite features an intelligent touch keyboard (`Custom OSK for Android Auto`) specially rendered on its own UI layer (Canvas).

* **Driving Convenience:** You don't need to reach for your phone when searching for a video on YouTube or entering a URL in the web browser. You can input data directly via the Head Unit Touchscreen.

### 📺 Advanced IPTV Player & M3U Parser
A stutter-free live TV experience powered by ExoPlayer Hardware Acceleration.

* **High Speed:** A robust engine that parses M3U playlists with thousands of channels in mere seconds.
* **Smart Management:** Dynamic Sub-Categories, a Quick Favorites System, and Smart Caching.

### 📻 Intelligent Web Radio & Audio Focus Management
An intelligent module running seamlessly in the background, providing access to radio stations from all around the world.

* **Audio Focus Handling:** Fully integrated with Android Auto's `CarAudioManager` system. When switching to the radio from IPTV or another source, it manages audio channels perfectly without causing any sound clipping or interruption.
* **Fail-Safe Server Routing:** Even if the global API (e.g., radio-browser) crashes (502 Bad Gateway), the system automatically connects to the most stable active server to prevent broadcast dropouts.
* **Dynamic Audio Visualizer:** Hardware-accelerated visual animations that move to the rhythm of the music.

### 🌐 AdBlock YouTube & Web Browser
* **Zero Ads:** Thanks to our proprietary JS Injection (AdBlocker Script) strategy, sponsored content and advertisements on YouTube or websites are blocked instantly before you even see them.
* **View Control:** Customizable User-Agent spoofing to display Desktop/Mobile/Tablet views tailored specifically for vehicle screens.

### 📲 Screen Mirroring & Reverse Touch
* **Bi-Directional Control:** It doesn't just cast your phone screen to the vehicle; thanks to an Accessibility Service infrastructure fully compliant with Android 14+ security protocols, it allows you to **control your phone by touching the vehicle screen (Touch Injection)**.

---

## 🛠️ UI/UX & Architecture Details

* **Draggable FAB (Floating Action Button):** A transparent floating button that you can drag anywhere with your finger so it doesn't obstruct screen corners (Z-index layering).
* **Center Modal Control Panel:** An eye-friendly, Dark Mode-compatible (night-friendly) interface that gathers all transitions and controls on a single screen to prevent distraction while driving.
* **State Recovery & Auto-Resume:** When you close and reopen the application, your last watched channel or radio station automatically resumes from where it left off in seconds.

---

## 📱 Wide Operating System Support (Android 8.0 - Android 16)
Auto Lite runs with flawless optimization on everything from older devices to the latest flagship models. With robust backward compatibility capabilities, it natively supports 100% of all Android and Android Auto versions starting from **Android 8.0 (Oreo)** up to the latest release, **Android 16** (API Level 26 - API Level 36).

---

## 🏷️ Tailored White-Label Solutions
We can customize this massive infrastructure specifically for your brand:

* **Your Brand:** Custom application name and logos determined by you.
* **Dedicated Infrastructure:** A unique package name (`com.yourcompany.appname`) belonging entirely to you.
* **High-End Security:** Code protection with unbreakable, advanced encryption (Obfuscation / ProGuard).
* **Independent Revenue:** Ready-to-deploy, signed `.aab` packages that you can directly upload to your own **Google Play Developer** account and manage the entire revenue model (Subscriptions, Sales, etc.) independently.

Feel free to get in touch to discuss details, evaluate this business opportunity, and launch your own Android Auto project.

---

*This robust Android Auto application is designed to push the limits of Car App Development, bypassing generic OEM restrictions to deliver a true in-car entertainment system. Includes complex implementations of ExoPlayer, WebView JS Injection, MediaSessionCompat, and SharedPreferences synchronization. (Closed-Source)*
