# 🌊 TirtApps - Dashboard Portal Aplikasi Pusimpel

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?style=for-the-badge&logo=github)](https://ramandaputra.github.io/TirtApps/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

**TirtApps** adalah gerbang portal terpadu (*single entry point / app launcher*) untuk mengakses seluruh ekosistem modul aplikasi **Pusimpel - Perumda Air Minum Tirta Kepri**. Dirancang dengan tampilan antarmuka *dark mode* modern, efek *glassmorphism*, pencarian instan, dan kategorisasi warna yang harmonis.

---

## 🌐 Akses Live (GitHub Pages)

Aplikasi ini dapat langsung diakses publik melalui:  
👉 **[https://ramandaputra.github.io/TirtApps/](https://ramandaputra.github.io/TirtApps/)**

---

## ✨ Fitur Utama

- **68 Modul Aplikasi Terpadu**: Akses langsung ke seluruh sistem operasional, keuangan, kepelangganan, teknis, dan kepegawaian.
- **Urutan Alfabetis (A–Z)**: Pada tab **Semua**, seluruh 68 modul disusun secara alfabetis dari modul pertama (*Absensi Honor/Kontrak*) hingga terakhir (*Water Treatment*).
- **Warna Latar Seragam per Kategori**: Setiap kategori memiliki identitas warna gradien yang seragam untuk kemudahan pengenalan visual secara sekilas.
- **Baris Filter Kategori Mendatar (*Single Row*)**: Tombol filter kategori tersusun rapi dalam satu baris dengan dukungan *smooth touch swipe* pada perangkat mobile.
- **Pencarian Real-Time**: Ketik nama modul atau kata kunci untuk menyaring modul aplikasi secara instan.
- **Dukungan Shortcut & PWA**:
  - Favicon resmi pada tab browser.
  - Pembuatan pintasan Desktop (Chrome / Edge / Windows Tile).
  - Penambahan pintasan layar utama ponsel (*Add to Home Screen*) untuk Android & iOS via `manifest.json` dan `apple-touch-icon`.
- **Desain Responsif**: Tampilan grid otomatis menyesuaikan dari layar desktop resolusi tinggi hingga formasi 2 kolom yang presisi di layar *smartphone*.

---

## 🎨 Pembagian Kategori & Identitas Warna

| Kategori | Palet Warna Gradien | Kelas CSS | Jumlah Modul | Contoh Modul Utama |
|---|---|---|:---:|---|
| **Keuangan** | Emerald Green (`#059669` → `#10b981`) | `.cat-keuangan` | 12 | *Informasi Tagihan, Cicilan Tagihan, Laporan DRD, LPP, Piutang, Efisiensi Penagihan, Kalkulator Lembur, Tarif Air* |
| **Pelanggan** | Ocean Blue (`#1d4ed8` → `#3b82f6`) | `.cat-pelanggan` | 12 | *Informasi Pelanggan, Calon Pelanggan, Pendaftaran Baru, Monitoring Blokir, Golongan, Pengaduan, Pusat Bantuan* |
| **Teknik & Meter** | Cyan / Deep Teal (`#0f766e` → `#06b6d4`) | `.cat-teknik` | 12 | *Foto Meter, Foto Rumah, Monitoring Baca Meter, Evaluasi Kondisi Meter, DMA, NRW, Analisa Nol Kubik, GIS, Water Treatment* |
| **Kepegawaian** | Royal Purple (`#581c87` → `#8b5cf6`) | `.cat-kepegawaian` | 9 | *Absensi Kepegawaian, Absensi Honor/Kontrak, Informasi Pegawai, SIM-Kenaikan, Karier, Pensiun, Info Penghasilan* |
| **Manajemen** | Amber Gold (`#b45309` → `#f59e0b`) | `.cat-manajemen` | 7 | *Administrasi, Berkas MONEV, Kinerja Perusahaan, KPI Perusahaan, MONEV SPI, Monitoring Tugas Direktur, Manajemen Stok* |
| **Digital & Khusus** | Rose Crimson (`#be123c` → `#f43f5e`) | `.cat-khusus` | 15 | *Dashboard Utama, Simpatik, e-Arsip Digital, Drive Tirta Kepri, Kepri Meet, TIRA AI Bot, Undian Digital, Qurban, Tirta Mulia* |

---

## 📁 Struktur Direktori

```text
TirtApps/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Otomasi deployment GitHub Pages via GitHub Actions
├── icon/
│   └── iconapp.png           # Aset logo resmi Pusimpel
├── .gitignore                # Berkas filter pengabaian file sistem
├── index.html                # Struktur utama halaman dashboard & katalog 68 modul
├── manifest.json             # Konfigurasi PWA & icon pintasan layar utama
├── README.md                 # Dokumentasi proyek
├── script.js                 # Logika pencarian instan & filter kategori
├── style.css                 # Sistem desain responsif, gradien kategori & glassmorphism
└── Water Utility Support Icon.png # Aset icon cadangan
```

---

## 🚀 Cara Menjalankan Secara Lokal

### Menggunakan Web Server (Laragon / XAMPP):
1. Pastikan folder proyek berada di dalam root web server (contoh: `C:\laragon\www\aplikasi` atau `htdocs/aplikasi`).
2. Jalankan Apache / Nginx.
3. Buka browser dan akses:
   ```text
   http://localhost/aplikasi
   ```

### Membuka File Langsung:
Cukup klik dua kali berkas `index.html` untuk langsung membukanya di browser favorit Anda.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantik modern.
- **CSS3**: CSS Grid, Flexbox, CSS Variables, Glassmorphism Backdrop Blur, dan Mobile Media Queries.
- **JavaScript (ES6+)**: Manipulasi DOM bebas dependensi pihak ketiga (*vanilla JS*).
- **Font Awesome 6**: Ikon antarmuka vektor tajam.
- **Google Fonts**: Tipografi modern dengan font *Poppins* & *Montserrat*.
- **GitHub Actions**: Alur kerja CI/CD otomatis untuk deployment ke GitHub Pages.

---

## 📄 Hak Cipta & Lisensi

Dikelola untuk operasional dan alur kerja harian **Perumda Air Minum Tirta Kepri**.  
&copy; 2026 Perumda Air Minum Tirta Kepri. All rights reserved.
