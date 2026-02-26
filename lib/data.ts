import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GiPodium } from "react-icons/gi";
import { FaBullhorn } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiMicrophone } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";


// pengalaman kepanitiaan
import workshopAiImg1 from "@/public/images/kegiatan/AI-1.jpg";
import workshopAiImg2 from "@/public/images/kegiatan/AI-2.jpg";
import workshopAiImg3 from "@/public/images/kegiatan/AI-3.jpg";
import rektorCupImg1 from "@/public/images/kegiatan/RSC-1.jpg";
import rektorCupImg2 from "@/public/images/kegiatan/RSC-2.jpg";
import seminarPasarModalImg from "@/public/images/kegiatan/pspm.jpg";
import seminarPasarModalImg1 from "@/public/images/kegiatan/pspm1.jpg";
import coachingClinicImg1 from "@/public/images/kegiatan/clc1.jpg";
import coachingClinicImg2 from "@/public/images/kegiatan/clc2.jpg";
import coachingClinicImg3 from "@/public/images/kegiatan/clc3.jpg";
import mcSekolahPasarModalImg1 from "@/public/images/kegiatan/spm1.jpg";
import mcSekolahPasarModalImg2 from "@/public/images/kegiatan/spm2.jpg";
import mcSekolahPasarModalImg3 from "@/public/images/kegiatan/spm3.jpg";




import wartafenoImg from "@/public/images/project/wartefeno/1.png";
import siakadImg from "@/public/images/project/siakad/1.png";
import amikomImg from "@/public/images/project/amikom/1.png";
import hrtoolsImg from "@/public/images/project/hr-tools/1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "Divisi Acara - Workshop Nasional AI",
    location: "Workshop 'Artificial Intelligence in The World of Data Science'",
    description: "Bertugas mengatur seluruh susunan acara dan melakukan koordinasi langsung dengan para pemateri ahli di bidangnya.", // 
    date: "2024", // 
    icon: React.createElement(GiPodium),
    // DIUBAH: imageUrl menjadi imageUrls dan berisi array gambar
    imageUrls: [workshopAiImg1, workshopAiImg2, workshopAiImg3],
  },
  {
    title: "Divisi Humas - Rektor Sport Champion",
    location: "Kompetisi Olahraga Tingkat Universitas",
    description:
      "Mengelola komunikasi dan publikasi acara untuk meningkatkan kesadaran serta partisipasi peserta antar prodi.", // 
    date: "2024", // 
    icon: React.createElement(FaBullhorn),
    imageUrls: [rektorCupImg1, rektorCupImg2],
  },
  {
    title: "Divisi Acara - Seminar Nasional Pasar Modal",
    location: "Seminar 'Pengenalan Sekolah Pasar Modal pada Gen Z'",
    description:
      "Bertanggung jawab atas kelancaran teknis acara dan membantu kesiapan narasumber dari awal hingga akhir seminar.", // 
    date: "2025", // 
    icon: React.createElement(GiPodium),
    imageUrls: [seminarPasarModalImg, seminarPasarModalImg1],
  },
  {
    title: "Divisi Acara - Coaching Clinic Investasi",
    location: "Coaching Clinic 'Cerdas Bertransaksi dan Investasi Hadapi Era Digital'",
    description:
      "Menyusun rundown acara secara detail dan memastikan setiap sesi berjalan sesuai dengan rencana yang telah ditetapkan.",
    date: "2025",
    icon: React.createElement(FaChalkboardTeacher),
    imageUrls: [coachingClinicImg1, coachingClinicImg2, coachingClinicImg3],
  },
  {
    title: "Master of Ceremony (MC) - Sekolah Pasar Modal",
    location: "Edukasi Pasar Modal oleh IDX & MNC Sekuritas",
    description:
      "Membawakan dan memandu jalannya acara edukasi pasar modal, bekerja sama langsung dengan narasumber dari Bursa Efek Indonesia dan MNC Sekuritas.",
    date: "2025",
    icon: React.createElement(GiMicrophone),
    imageUrls: [mcSekolahPasarModalImg1, mcSekolahPasarModalImg2, mcSekolahPasarModalImg3],
  },
] as const;

export const workExperienceData = [
  {
    title: "Mobile App Developer Intern",
    company: "PERUMDA Tirta Bhagasasi",
    division: "Divisi Teknologi Informasi",
    date: "Oktober 2025 – Januari 2026",
    description: [
      "Merancang dan mengembangkan aplikasi mobile manajemen aset inventaris perusahaan dari tahap inisialisasi hingga deployment menggunakan framework Ionic Angular.",
      "Mengintegrasikan Google ML Kit via Capacitor untuk fitur pemindaian QR Code & Barcode guna identifikasi aset secara otomatis dan real-time.",
      "Membangun sistem form dinamis yang terintegrasi dengan RESTful API perusahaan, termasuk logika konversi Base64 ke Blob untuk fitur upload foto via FormData.",
      "Melakukan testing, debugging, dan validasi endpoint API secara komprehensif menggunakan Postman sebelum build ke APK Release.",
    ],
    icon: React.createElement(FaMobileAlt),
    imageUrls: [
      "/images/internship/intern1.png",
      "/images/internship/intern2.png",
    ],
    tech: ["Ionic", "Angular", "TypeScript", "REST API", "Google ML Kit"],
  },
] as const;

// lib/data.ts

export const projectsData = [
  {
    title: "Website Donasi Yayasan",
    description:
      "Membangun platform donasi online untuk yayasan yang dilengkapi fitur verifikasi transaksi dan manajemen program, mempermudah proses penggalangan dana secara transparan.",
    screenshots: [
      "images/project/donasi/1.png",
      "images/project/donasi/2.png",
      "images/project/donasi/3.png",
      "images/project/donasi/4.png",
      "images/project/donasi/5.jpg",
      "images/project/donasi/6.jpg",
      "images/project/donasi/7.jpg",
    ],
    image: "images/project/donasi/1.png",
    tech: [
      "/images/icon/php.svg",
      "/images/icon/bootstrap.svg",
      "/images/icon/tailwind.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Donasi Online: Sistem pembayaran untuk memudahkan donatur berpartisipasi.",
      "Verifikasi Transaksi: Admin dapat memverifikasi setiap donasi yang masuk.",
      "Manajemen Program: Mengelola berbagai program penggalangan dana yang sedang berjalan.",
    ],
    languages: ["PHP Native", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Sistem Manajemen Restoran - RestoPOS",
    description:
      "Aplikasi web komprehensif untuk Admin, Pelayan, dan Koki. Sistem ini menangani manajemen menu, pengelolaan pesanan, laporan penjualan, hingga pemantauan aktivitas dapur secara terpusat.", // 
    // TODO: Ganti dengan path screenshot aplikasi admin/pelayan Anda

    screenshots: [
      "images/project/restopos-admin/1.png",
      "images/project/restopos-admin/2.png",
      "images/project/restopos-admin/3.png",
      "images/project/restopos-admin/4.png",
    ],
    image: "images/project/restopos-admin/1.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      "/images/icon/mysql.svg",
      "/images/icon/bootstrap.svg",
      "/images/icon/php.svg",

    ],
    demoUrl: null,
    githubUrl: null, // Isi dengan link ke repo backend Laravel jika ada
    features: [
      "Manajemen Data Master: Admin dapat mengelola data menu, pengguna, dan meja.", // 
      "Dasbor Analitik: Menampilkan laporan penjualan dan item terlaris dalam bentuk grafik.", // 
      "Alur Pesanan Real-time: Pesanan dari kasir/pelayan langsung terkirim ke dasbor koki.", // 
      "Manajemen Hak Akses: Sistem membedakan fitur yang dapat diakses oleh Admin, Kasir, dan Koki.", // 
    ],
    languages: ["Laravel", "PHP", "MySQL", "API"],
  },
  {
    title: "Aplikasi Pelanggan - RestoPOS",
    description:
      "Aplikasi mobile untuk pelanggan yang memudahkan pemesanan makanan, reservasi meja, dan pembayaran digital. Dibangun untuk memberikan pengalaman pengguna yang praktis dan efisien.", //
    // TODO: Ganti dengan path screenshot aplikasi pelanggan Anda
    screenshots: [
      "images/project/restopos-pelanggan/1.png",
      "images/project/restopos-pelanggan/2.png",
      "images/project/restopos-pelanggan/3.png",
      "images/project/restopos-pelanggan/4.png",
    ],
    image: "images/project/restopos-pelanggan/2.png",
    // TODO: Pastikan Anda punya ikon untuk teknologi ini
    tech: [
      "/images/icon/ionic.svg", // atau /images/icon/flutter.svg
      "/images/icon/angular.svg",
      "/images/icon/typescript.svg",
    ],
    demoUrl: null,
    githubUrl: null, // Isi dengan link ke repo frontend pelanggan jika ada
    features: [
      "Pemesanan Online: Memungkinkan pelanggan memesan menu untuk dine-in atau take-away.", // 
      "Reservasi Meja: Fitur untuk memesan meja dengan memilih tanggal, jam, dan jumlah tamu.", // 
      "Pembayaran Digital: Terintegrasi dengan metode pembayaran QRIS dan Tunai.", // 
      "Lacak Status Pesanan: Pelanggan dapat melihat status pesanan mereka secara real-time.", // 
    ],
    languages: ["Ionic", "Angular", "TypeScript"], // Sesuaikan dengan teknologi yang Anda gunakan
  },
  {
    title: "Desain UI/UX - Aplikasi Restoran RestoPOS",
    description:
      "Merancang seluruh antarmuka (UI) dan pengalaman pengguna (UX) untuk sistem restoran 'RestoPOS'. Desain ini mencakup alur untuk empat peran pengguna: Pelanggan, Pelayan/Kasir, Koki, dan Admin, dengan fokus pada kemudahan penggunaan dan efisiensi operasional.",
    // TODO: Gunakan gambar komposit dari Figma sebagai gambar utama
    image: "images/project/UIUX/1.png",
    // TODO: Siapkan beberapa screenshot close-up dari desain terbaik Anda
    screenshots: [
      "images/project/UIUX/1.png", ,
    ],
    // Teknologi yang digunakan adalah tools desain
    tech: [
      "/images/icon/figma.svg",
    ],
    // TODO: Jika prototype Figma Anda bisa diakses publik, taruh link-nya di sini
    demoUrl: null,
    githubUrl: null, // Tidak perlu untuk proyek desain
    features: [
      "Desain User Flow untuk 4 Peran Pengguna",
      "Prototyping Interaktif untuk Simulasi Aplikasi",
      "Perancangan Mockup Detail untuk Aplikasi Mobile dan Web",
      "Desain Berbasis Komponen yang Konsisten",
    ],
    languages: ["Figma", "Draw.io"],
  },
  {
    title: "Desain UI/UX - Website Manajemen UMKM",
    description:
      "Perancangan desain antarmuka (UI) dan pengalaman pengguna (UX) untuk platform web UMKM. Desain mencakup halaman marketing (landing page, layanan) dan dashboard internal untuk manajemen penjualan, stok, dan laporan.",
    // TODO: Siapkan screenshot dari desain Figma Anda
    screenshots: [
      "images/project/umkm-deign/1.png",
    ],
    image: "images/project/umkm-deign/figma-overview.png",
    tech: ["/images/icon/figma.svg"],
    demoUrl: null, // Anda bisa isi dengan link prototype Figma
    githubUrl: null,
    features: [
      "Desain Halaman Marketing (Homepage, Layanan, Tentang Kami).",
      "Dashboard Analitik untuk Visualisasi Data Penjualan dan Stok.",
      "Fitur Manajemen Data (Produk, Pelanggan, Laporan).",
      "Alur Pendaftaran (Sign Up) dan Pembayaran Pengguna.",
    ],
    languages: ["Figma"],
  },
  {
    title: "Deteksi Kendaraan (YOLOv5)",
    description:
      "Proyek Computer Vision yang mengaplikasikan algoritma populer YOLOv5 untuk mendeteksi berbagai jenis objek kendaraan secara real-time dari sebuah gambar atau video.",
    screenshots: [
      "images/project/yolo/1.jpg",
      "images/project/yolo/2.jpg",
    ],
    image: "images/project/yolo/1.jpg",
    tech: [
      "/images/icon/python.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Deteksi Objek Real-time: Menggunakan model terlatih untuk mengidentifikasi kendaraan.",
      "Algoritma YOLOv5: Implementasi salah satu algoritma deteksi objek tercepat.",
      "Aplikasi Computer Vision: Menunjukkan kemampuan dalam penerapan machine learning.",
    ],
    languages: ["Python", "YOLOv5", "Pandas", "Matplotlib"],
  },
  {
    title: "Aplikasi Pendaftaran Pasien Online",
    description:
      "Sistem pendaftaran dan pemeriksaan pasien untuk sebuah klinik berbasis web, mempermudah alur administrasi dan pencatatan data medis.",
    // TODO: Siapkan screenshot untuk proyek ini
    screenshots: [
      "images/project/pasien/1.png",
      "images/project/pasien/2.png",
      "images/project/pasien/3.png",
    ],
    image: "images/project/pasien/1.png",

    tech: [
      "/images/icon/php.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Pendaftaran Pasien Online: Memudahkan pasien baru untuk mendaftar tanpa antre.",
      "Pencatatan Pemeriksaan: Dokter dapat menginput hasil pemeriksaan secara digital.",
    ],
    languages: ["PHP Native", "MySQL"],
  },
  {
    title: "Proyek Data Mining - Online Retail",
    description:
      "Melakukan segmentasi pelanggan dari dataset Online Retail yang berisi 500 ribu data. Proyek ini menggunakan teknik data mining dengan Python, Pandas, dan Matplotlib untuk analisis.",
    // TODO: Siapkan screenshot untuk proyek ini, misalnya grafik atau tabel hasil.
    screenshots: [
      "images/project/datamining/1.png",
      "images/project/datamining/2.png",
      "images/project/datamining/3.png",
    ],
    image: "images/project/datamining/1.png",
    // TODO: Pastikan Anda memiliki ikon untuk teknologi ini.
    tech: [
      "/images/icon/python.svg",
      "/images/icon/pandas.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Analisis Dataset Besar: Mengolah dan menganalisis dataset retail dengan 500.000 baris data.",
      "Segmentasi Pelanggan: Menerapkan teknik data mining untuk mengelompokkan pelanggan berdasarkan perilaku.",
      "Visualisasi Data: Menggunakan Matplotlib untuk membuat visualisasi dari hasil analisis data.",
    ],
    languages: ["Python", "Pandas", "Matplotlib"],
  },
  {
    title: "Deteksi dan Pengenalan Wajah",
    description:
      "Aplikasi desktop yang dibangun dengan Python untuk mendeteksi dan mengenali wajah secara real-time menggunakan webcam. Model dilatih menggunakan algoritma Machine Learning seperti K-NN dan SVM.",
    // TODO: Ganti nama file sesuai dengan screenshot yang Anda simpan
    screenshots: [
      "images/project/face-recognition/1.jpg",
    ],
    image: "images/project/face-recognition/1.jpg", // Gunakan screenshot terbaik Anda di sini
    // TODO: Pastikan Anda memiliki ikon untuk teknologi ini
    tech: [
      "/images/icon/python.svg",
      "/images/icon/opencv.svg", // Anda perlu mencari ikon OpenCV
    ],
    demoUrl: null, // Biarkan null karena ini bukan web
    githubUrl: null, // Ganti dengan link GitHub ke proyek ini jika ada
    features: [
      "Real-time Face Detection: Mendeteksi wajah dari input webcam secara langsung.",
      "Face Recognition: Mengenali wajah yang terdeteksi sebagai identitas tertentu (misal: 'ahmad').",
      "Model Training: Menggunakan Scikit-learn untuk melatih model klasifikasi (K-NN, SVM).",
      "Image Processing: Memanfaatkan library OpenCV untuk pemrosesan gambar seperti resize dan grayscale.",
    ],
    languages: ["Python", "OpenCV", "Scikit-learn"],
  },
  {
    title: "Desain Topologi Jaringan Universitas",
    description:
      "Merancang dan mensimulasikan topologi jaringan untuk sebuah universitas dengan 2 gedung dan 4 fakultas menggunakan Cisco Packet Tracer. Proyek ini mengimplementasikan routing dinamis antar gedung (BGP) dan internal (OSPF).",
    // TODO: Ganti dengan path screenshot Anda
    screenshots: [
      "images/project/jaringan/topologi.png",
    ],
    image: "images/project/jaringan/topologi.png", // Gunakan screenshot topologi utama di sini
    // TODO: Siapkan ikon untuk teknologi ini
    tech: [
      "/images/icon/cisco.svg",
    ],
    demoUrl: null,
    // TODO: Ganti dengan link ke repositori GitHub Anda untuk proyek ini
    githubUrl: "#",
    features: [
      "Routing Dinamis Antar Gedung dengan BGP: Mengkonfigurasi setiap gedung sebagai Autonomous System (AS) yang berbeda.",
      "Routing Internal Gedung dengan OSPF: Memastikan semua perangkat di dalam satu gedung dapat berkomunikasi secara efisien.",
      "Implementasi VLAN: Memisahkan traffic antar departemen untuk meningkatkan keamanan dan performa jaringan.",
      "Konfigurasi DHCP & IP Statis: Menerapkan skema pengalamatan IP yang berbeda sesuai kebutuhan setiap fakultas.",
    ],
    languages: ["Cisco Packet Tracer", "OSPF", "BGP", "VLAN", "DHCP"],
  },
] as const;

// Pastikan kode ini ada di dalam file lib/data.ts Anda

export const skills = [
  {
    id: 1,
    imgUrl: "/images/icon/html.svg",
  },
  {
    id: 2,
    imgUrl: "/images/icon/css.svg",
  },
  {
    id: 3,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    id: 4,
    imgUrl: "/images/icon/python.svg",
  },
  {
    id: 5,
    imgUrl: "/images/icon/mysql.svg",
  },
  {
    id: 6,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    id: 7,
    imgUrl: "/images/icon/ionic.svg",
  },
  {
    id: 8,
    imgUrl: "/images/icon/bootstrap.svg",
  },
  {
    id: 9,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    id: 10,
    imgUrl: "/images/icon/figma.svg",
  },
  {
    id: 11,
    imgUrl: "/images/icon/canva.svg",
  },
  {
    id: 12,
    imgUrl: "/images/icon/git.svg",
  },
] as const;