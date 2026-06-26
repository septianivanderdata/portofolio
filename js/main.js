// ─── i18n ────────────────────────────────────────────────────────
const translations = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.certs': 'Certs',
    'nav.contact': 'Contact',

    'hero.eyebrow': "Hello, I'm",
    'hero.role': 'Data & Automation Specialist',
    'hero.bio': 'I turn messy operational data — bookings, transactions, daily records — into dashboards, automation, and forecasts that are actually usable. Focused on SMEs and small businesses still working manually.',
    'hero.cta1': 'View My Work',
    'hero.cta2': 'Get In Touch',
    'hero.stat1': 'End-to-End Case Study',
    'hero.stat2': 'Phases: Dashboard · Automation · Forecast',
    'hero.stat3': 'Open for Freelance',
    'hero.badge1': 'Automation First',
    'hero.badge2': 'Data Driven',

    'about.tag': 'About',
    'about.title': 'Who I Am',
    'about.p1': "I'm a passionate Data Scientist and Machine Learning Engineer with hands-on experience building end-to-end AI solutions. From exploratory data analysis to deploying production ML models, I work across the full data pipeline.",
    'about.p2': "My work focuses on solving real-world problems using data — whether that's building predictive systems, natural language processing pipelines, or computer vision models. I believe clean data and rigorous experimentation are the foundation of any good ML system.",
    'about.p3': "When I'm not training models, I contribute to open source, write technical articles, and explore new research in deep learning and MLOps.",
    'about.quickfacts': 'Quick Facts',
    'about.fact1.label': 'Education',
    'about.fact1.val': 'PKN STAN · Asia Cyber University',
    'about.fact2.label': 'Location',
    'about.fact2.val': 'Indonesia',
    'about.fact3.label': 'Status',
    'about.fact3.val': 'Open to opportunities',
    'about.fact4.label': 'Languages',
    'about.fact4.val': 'Indonesian, English',
    'about.cv': 'Download CV',

    'skills.tag': 'Skills',
    'skills.title': 'What I Work With',

    'projects.tag': 'Projects',
    'projects.title': 'Featured Work',
    'projects.filter.all': 'All',
    'projects.filter.ml': 'Machine Learning',
    'projects.filter.cv': 'Computer Vision',
    'projects.filter.data': 'Data Analysis',

    'proj.sinok.badge': 'Featured Project',
    'proj.sinok.title': 'Sinok Homestay — Booking & Forecasting',
    'proj.sinok.desc': 'End-to-end data & automation system for a homestay business (simulation project): automated booking via Telegram bot, double-booking prevention across all OTAs, interactive occupancy dashboard, and monthly revenue forecasts. Tested on 784 simulated transactions (Jun 2024–Jun 2026).',
    'proj.sinok.stat1': 'Entry Booking',
    'proj.sinok.stat2': 'Transactions',
    'proj.sinok.stat3': 'Projected Occ.',
    'proj.next.badge': 'Coming Next',
    'proj.next.title': 'Power BI Analytics & Forecasting',
    'proj.next.desc': 'Preparing a second case study using Power BI for deeper analytics & forecasting — from SME financial data to immediately actionable insights.',

    'exp.tag': 'Experience',
    'exp.title': 'Career Journey',
    'exp.current': 'Current',
    'exp.job1.date': 'Jan 2021 — Present',
    'exp.job1.role': 'Internal Compliance',
    'exp.job1.company': 'Ministry of Finance, Republic of Indonesia · Full-time',
    'exp.job1.desc': 'Integrating compliance functions with data analysis to generate meaningful insights. Focus on data processing, dashboard development, and reporting using Microsoft Power BI.',
    'exp.job2.date': 'Dec 2018 — Jan 2021',
    'exp.job2.role': 'Finance Officer',
    'exp.job2.company': 'Ministry of Finance, Republic of Indonesia · Full-time',
    'exp.job2.desc': 'Integrating financial management functions with data analysis to generate meaningful insights. Focus on financial data processing, dashboard development, and reporting.',
    'exp.edu1.role': 'Bachelor of Accounting',
    'exp.edu1.company': 'Asia Cyber University · GPA 3.89/4.0',
    'exp.edu1.desc': 'Bachelor of Accounting with focus on Accounting and Data Analysis.',
    'exp.edu2.role': 'Diploma',
    'exp.edu2.company': 'Politeknik Keuangan Negara STAN',
    'exp.edu2.desc': 'State finance polytechnic specializing in accounting and state financial management.',
    'certs.tag': 'Certifications',
    'certs.title': 'Licenses & Certifications',
    'cert1.name': 'Membangun Proyek Deep Learning Tingkat Mahir',
    'cert1.date': 'Apr 2026 · Expires Apr 2029',
    'cert2.name': 'Belajar Fundamental Deep Learning',
    'cert2.date': 'Mar 2026 · Expires Mar 2029',
    'cert3.name': 'Machine Learning (Fresh Graduate Academy)',
    'cert3.date': 'Nov 2025',
    'cert4.name': 'Belajar Machine Learning untuk Pemula',
    'cert4.date': 'Dec 2025 · Expires Dec 2028',

    'contact.tag': 'Contact',
    'contact.title': "Let's Work Together",
    'contact.subtitle': "Have a project in mind or want to discuss opportunities? I'd love to hear from you.",
    'contact.availability': 'Available for freelance & full-time roles',
    'contact.form.name': 'Name',
    'contact.form.namePh': 'Your name',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPh': 'Project discussion',
    'contact.form.message': 'Message',
    'contact.form.messagePh': 'Tell me about your project...',
    'contact.form.send': 'Send Message',

    'modal.overview': 'Overview',
    'modal.gallery': 'Gallery',
    'modal.highlights': 'Highlights',
    'modal.results': 'Results',
    'modal.tech': 'Tech Stack',

    'footer.copy': '© 2025 Septian Ivander. Built with HTML, CSS & JavaScript.',
  },
  id: {
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Proyek',
    'nav.experience': 'Pengalaman',
    'nav.certs': 'Sertifikasi',
    'nav.contact': 'Kontak',

    'hero.eyebrow': 'Halo, saya',
    'hero.role': 'Data & Automation Specialist',
    'hero.bio': 'Saya ubah data operasional yang berantakan — booking, transaksi, catatan harian — jadi dashboard, otomasi, dan proyeksi yang langsung bisa dipakai. Fokus untuk UMKM dan bisnis kecil yang masih kerja manual.',
    'hero.cta1': 'Lihat Karya Saya',
    'hero.cta2': 'Hubungi Saya',
    'hero.stat1': 'Studi Kasus End-to-End',
    'hero.stat2': '3 Fase: Dashboard · Otomasi · Forecasting',
    'hero.stat3': 'Open for Freelance',
    'hero.badge1': 'Automation First',
    'hero.badge2': 'Data Driven',

    'about.tag': 'Tentang',
    'about.title': 'Tentang Saya',
    'about.p1': 'Saya adalah Data Scientist dan Machine Learning Engineer yang bersemangat dengan pengalaman langsung membangun solusi AI end-to-end. Dari analisis data eksploratif hingga deployment model ML di production, saya bekerja di seluruh pipeline data.',
    'about.p2': 'Pekerjaan saya berfokus pada pemecahan masalah nyata menggunakan data — baik itu membangun sistem prediktif, pipeline NLP, maupun model computer vision. Saya percaya data yang bersih dan eksperimen yang ketat adalah fondasi dari sistem ML yang baik.',
    'about.p3': 'Ketika tidak melatih model, saya berkontribusi ke open source, menulis artikel teknis, dan mengeksplorasi riset terbaru di deep learning dan MLOps.',
    'about.quickfacts': 'Fakta Singkat',
    'about.fact1.label': 'Pendidikan',
    'about.fact1.val': 'PKN STAN · Asia Cyber University',
    'about.fact2.label': 'Lokasi',
    'about.fact2.val': 'Indonesia',
    'about.fact3.label': 'Status',
    'about.fact3.val': 'Terbuka untuk peluang baru',
    'about.fact4.label': 'Bahasa',
    'about.fact4.val': 'Indonesia, Inggris',
    'about.cv': 'Unduh CV',

    'skills.tag': 'Keahlian',
    'skills.title': 'Yang Saya Gunakan',

    'projects.tag': 'Proyek',
    'projects.title': 'Karya Unggulan',
    'projects.filter.all': 'Semua',
    'projects.filter.ml': 'Machine Learning',
    'projects.filter.cv': 'Computer Vision',
    'projects.filter.data': 'Analisis Data',

    'proj.sinok.badge': 'Proyek Unggulan',
    'proj.sinok.title': 'Sinok Homestay — Booking & Forecasting',
    'proj.sinok.desc': 'Sistem data & otomasi end-to-end untuk bisnis homestay (proyek simulasi): pencatatan booking otomatis via Telegram bot, pencegahan double booking di semua OTA, dashboard okupansi interaktif, dan proyeksi revenue bulanan. Diuji pada 784 data transaksi simulasi (Jun 2024–Jun 2026).',
    'proj.sinok.stat1': 'Entry Booking',
    'proj.sinok.stat2': 'Transaksi',
    'proj.sinok.stat3': 'Proyeksi Occ.',
    'proj.next.badge': 'Coming Next',
    'proj.next.title': 'Power BI Analytics & Forecasting',
    'proj.next.desc': 'Sedang menyiapkan studi kasus kedua dengan Power BI untuk analytics & forecasting yang lebih dalam — dari data keuangan UMKM ke insight yang bisa langsung dipakai.',

    'exp.tag': 'Pengalaman',
    'exp.title': 'Perjalanan Karier',
    'exp.current': 'Sekarang',
    'exp.job1.date': 'Jan 2021 — Sekarang',
    'exp.job1.role': 'Internal Compliance',
    'exp.job1.company': 'Kementerian Keuangan Republik Indonesia · Full-time',
    'exp.job1.desc': 'Mengintegrasikan fungsi kepatuhan dengan analisis data untuk menghasilkan wawasan yang bermakna. Fokus pada pemrosesan data, pengembangan dashboard, dan pelaporan menggunakan Microsoft Power BI.',
    'exp.job2.date': 'Des 2018 — Jan 2021',
    'exp.job2.role': 'Finance Officer',
    'exp.job2.company': 'Kementerian Keuangan Republik Indonesia · Full-time',
    'exp.job2.desc': 'Mengintegrasikan fungsi manajemen keuangan dengan analisis data untuk menghasilkan wawasan yang bermakna. Fokus pada pemrosesan data keuangan, pengembangan dashboard, dan pelaporan.',
    'exp.edu1.role': 'Sarjana Akuntansi',
    'exp.edu1.company': 'Asia Cyber University · IPK 3.89/4.0',
    'exp.edu1.desc': 'Sarjana Akuntansi dengan fokus pada Akuntansi dan Analisis Data.',
    'exp.edu2.role': 'Diploma',
    'exp.edu2.company': 'Politeknik Keuangan Negara STAN',
    'exp.edu2.desc': 'Politeknik keuangan negara dengan spesialisasi akuntansi dan pengelolaan keuangan negara.',
    'certs.tag': 'Sertifikasi',
    'certs.title': 'Lisensi & Sertifikasi',
    'cert1.name': 'Membangun Proyek Deep Learning Tingkat Mahir',
    'cert1.date': 'Apr 2026 · Berlaku hingga Apr 2029',
    'cert2.name': 'Belajar Fundamental Deep Learning',
    'cert2.date': 'Mar 2026 · Berlaku hingga Mar 2029',
    'cert3.name': 'Machine Learning (Fresh Graduate Academy)',
    'cert3.date': 'Nov 2025',
    'cert4.name': 'Belajar Machine Learning untuk Pemula',
    'cert4.date': 'Des 2025 · Berlaku hingga Des 2028',

    'contact.tag': 'Kontak',
    'contact.title': 'Mari Bekerja Sama',
    'contact.subtitle': 'Punya proyek atau ingin berdiskusi tentang peluang? Saya senang mendengar dari Anda.',
    'contact.availability': 'Tersedia untuk pekerjaan freelance & full-time',
    'contact.form.name': 'Nama',
    'contact.form.namePh': 'Nama Anda',
    'contact.form.subject': 'Subjek',
    'contact.form.subjectPh': 'Diskusi proyek',
    'contact.form.message': 'Pesan',
    'contact.form.messagePh': 'Ceritakan tentang proyek Anda...',
    'contact.form.send': 'Kirim Pesan',

    'modal.overview': 'Gambaran Umum',
    'modal.gallery': 'Galeri',
    'modal.highlights': 'Highlights',
    'modal.results': 'Hasil',
    'modal.tech': 'Tech Stack',

    'footer.copy': '© 2025 Septian Ivander. Dibuat dengan HTML, CSS & JavaScript.',
  },
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  const t = translations[lang];
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.querySelector('.lang-toggle__active').textContent = lang.toUpperCase();
    toggle.querySelector('.lang-toggle__other').textContent = lang === 'en' ? 'ID' : 'EN';
  }

  localStorage.setItem('lang', lang);
  currentLang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  document.getElementById('langToggle').addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'id' : 'en');
  });
});

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile burger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav__links a[href^="#"]');
function setActiveLink() {
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav__links a[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    }
  });
}
window.addEventListener('scroll', setActiveLink, { passive: true });

// Intersection Observer — fade in + skill bar animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger skill bar animations when section visible
      if (entry.target.classList.contains('skills')) {
        entry.target.querySelectorAll('.skill-bar__fill').forEach(bar => {
          bar.style.animationPlayState = 'running';
        });
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.hero__content, .hero__visual, .about__text, .about__card, .skill-card, .project-card, .timeline__item, .contact__info, .contact__form, .skills'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Pause skill bars until visible
document.querySelectorAll('.skill-bar__fill').forEach(bar => {
  bar.style.animationPlayState = 'paused';
});


// Project filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    projectCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  });
});

// Contact form — mailto fallback
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const subject = encodeURIComponent(data.subject || 'Portfolio Contact');
  const body = encodeURIComponent(`Name: ${data.name}\n\n${data.message}`);
  window.open(`mailto:septianivander.data@gmail.com?subject=${subject}&body=${body}`);
});

// Smooth counter animation for hero stats
function animateCounter(el, target) {
  let start = 0;
  const duration = 1500;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + el.dataset.suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const heroObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat__num').forEach(el => {
        const val = parseInt(el.textContent);
        if (isNaN(val)) return;
        const suffix = el.textContent.replace(/\d+/, '');
        el.dataset.suffix = suffix;
        el.textContent = '0' + suffix;
        animateCounter(el, val);
      });
      heroObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero__stats');
if (heroStats) heroObserver.observe(heroStats);

// ─── Project Modal ───────────────────────────────────────────────
const projectData = {
  sinok: {
    tag: 'Data Analysis',
    title: 'Sinok Homestay — Booking & Forecasting System',
    github: '#',
    demo: '#',
    problem: 'Banyak usaha homestay menyimpan data booking yang sebenarnya kaya insight, tapi tetap dicatat manual di buku atau chat WA. Dengan kamar yang dijual di banyak OTA sekaligus, admin sering salah info ketersediaan dan berisiko double booking. Pemilik pun sulit menebak kapan musim sepi atau ramai, karena keputusan masih mengandalkan ingatan, bukan data.',
    solutions: [
      { label: 'Visibility', desc: 'Dashboard mengubah data mentah jadi tren okupansi & revenue yang terbaca dalam hitungan detik.' },
      { label: 'Otomasi', desc: 'Booking masuk lewat satu baris command chat, langsung memicu reminder ke semua OTA lain.' },
      { label: 'Foresight', desc: 'Proyeksi okupansi & revenue bulan depan, dihitung otomatis dari tren histori.' },
    ],
    desc: 'Sistem data & otomasi end-to-end untuk bisnis homestay (proyek simulasi) — dari pencatatan booking, otomasi pengingat OTA, sampai proyeksi okupansi bulan depan. Tujuannya bukan cuma menunjukkan tools yang dipakai, tapi cara berpikir: data yang berantakan bisa diubah jadi keputusan yang lebih cepat dan lebih jelas.',
    highlights: [
      'Booking baru tercatat ke Google Sheets dalam <1 menit via satu baris command chat — tanpa buka laptop',
      'Setiap booking otomatis memicu reminder ke semua OTA lain (Traveloka, Agoda, Booking.com) — mengurangi risiko double booking',
      'Telegram Bot memvalidasi format input, tipe kamar, dan langsung konfirmasi Booking ID unik',
      'Dashboard interaktif: harga vs okupansi, peta musiman per bulan, sumber booking, okupansi per hari',
      'Proyeksi okupansi & revenue bulan depan dihitung otomatis dari tren histori',
      'Diuji pada 784 data transaksi simulasi sepanjang Juni 2024–Juni 2026',
    ],
    caveat: 'Limitasi saat ini: denominator rate okupansi masih dihitung flat per bulan (belum prorata untuk tanggal check-in yang menginap lintas bulan), dan beberapa data uji ("Test") masih bercampur dalam simulasi ini. Arah pengembangan lanjutan: sisa kamar yang otomatis terhitung real-time setiap ada transaksi baru.',
    metrics: [
      { value: '<1 mnt', label: 'Entry Booking' },
      { value: '784', label: 'Data Transaksi' },
      { value: '54.34%', label: 'Proyeksi Occ. Jul 2026' },
      { value: 'Rp39,4 Jt', label: 'Proyeksi Revenue Jul 2026' },
    ],
    images: [
      { src: 'assets/sinok-workflow.png', caption: 'n8n Automation Workflow' },
      { src: 'assets/sinok-dashboard.png', caption: 'Dashboard Analisa Okupansi' },
      { src: 'assets/sinok-forecast.png', caption: 'Prediksi Occ & Revenue Jul 2026' },
      { src: 'assets/sinok-bot.png', caption: 'Telegram Bot — Booking Flow' },
    ],
    tech: ['Google Sheets', 'n8n', 'Telegram Bot API', 'Python', 'Dashboard', 'Automation'],
  },
};

const overlay = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');

function openModal(id) {
  const d = projectData[id];
  if (!d) return;

  const t = translations[currentLang];

  document.getElementById('modalTag').textContent = d.tag;
  document.getElementById('modalTitle').textContent = d.title;

  // Problem block (sinok-specific)
  let descHTML = '';
  if (d.problem) {
    descHTML += `<div class="modal__problem">${d.problem}</div>`;
  }
  if (d.solutions) {
    descHTML += `<div class="modal__solution-grid">${d.solutions.map(s =>
      `<div class="modal__solution-item"><strong>${s.label}</strong><span>${s.desc}</span></div>`
    ).join('')}</div>`;
  }
  descHTML += d.desc;
  if (d.caveat) {
    descHTML += `<div class="modal__caveat" style="margin-top:16px"><strong>⚠ Kejujuran Teknis</strong>${d.caveat}</div>`;
  }
  document.getElementById('modalDesc').innerHTML = descHTML;

  const linksEl = document.getElementById('modalLinks');
  linksEl.innerHTML = `
    <a href="${d.github}" target="_blank" rel="noopener">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
      GitHub
    </a>
    <a href="${d.demo}" target="_blank" rel="noopener">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Live Demo
    </a>`;

  // Gallery
  const galleryWrap = document.getElementById('modalGalleryWrap');
  const galleryEl = document.getElementById('modalGallery');
  if (d.images && d.images.length) {
    galleryEl.innerHTML = d.images.map(img =>
      `<div class="modal__gallery-item">
        <img src="${img.src}" alt="${img.caption}" loading="lazy" />
        <span class="modal__gallery-caption">${img.caption}</span>
      </div>`
    ).join('');
    galleryWrap.style.display = '';
    // re-apply i18n for gallery header
    const h4 = galleryWrap.querySelector('h4');
    if (h4 && t['modal.gallery']) h4.textContent = t['modal.gallery'];
  } else {
    galleryWrap.style.display = 'none';
    galleryEl.innerHTML = '';
  }

  const hlWrap = document.getElementById('modalHighlightsWrap');
  const hlEl = document.getElementById('modalHighlights');
  hlEl.innerHTML = d.highlights.map(h => `<li>${h}</li>`).join('');
  hlWrap.style.display = d.highlights.length ? '' : 'none';

  const metricsWrap = document.getElementById('modalMetricsWrap');
  const metricsEl = document.getElementById('modalMetrics');
  metricsEl.innerHTML = d.metrics.map(m =>
    `<div class="modal__metric"><strong>${m.value}</strong><span>${m.label}</span></div>`
  ).join('');
  metricsWrap.style.display = d.metrics.length ? '' : 'none';

  const techEl = document.getElementById('modalTech');
  techEl.innerHTML = d.tech.map(item => `<span>${item}</span>`).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card[data-id]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.id));
});

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
