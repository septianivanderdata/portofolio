// ─── i18n ────────────────────────────────────────────────────────
const translations = {
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',

    'hero.eyebrow': "Hello, I'm",
    'hero.role': 'Data & Automation Specialist',
    'hero.bio': 'I turn messy operational data — bookings, transactions, daily records — into dashboards, automation, and forecasts that are actually usable. Focused on SMEs and small businesses still working manually.',
    'hero.cta1': 'See What I Build',
    'hero.cta2': 'Start a Conversation',
    'hero.stat1': 'Years in Data & Finance',
    'hero.stat2': 'Ministry of Finance, RI',
    'hero.stat3': 'Power BI · n8n · Sheets',
    'hero.badge1': 'Automation First',
    'hero.badge2': 'Data Driven',

    'about.tag': 'About',
    'about.title': 'Who I Am',
    'about.p1': "I'm a Data & Automation Specialist with 7+ years at the Ministry of Finance, where I integrate compliance and financial management with data analysis — building dashboards, automating workflows, and turning scattered records into clear, usable insights.",
    'about.p2': "My focus is practical: taking messy operational data — bookings, transactions, daily records — and turning them into dashboards, automation, and forecasts that small businesses and SMEs can actually act on. Tools I use daily: Power BI, Google Sheets, Looker Studio, n8n, and Telegram Bot API.",
    'about.p3': "One of the projects below now runs at a real business — a three-room homestay in Balige. It went live in July 2026, so there's no measured outcome yet, and I won't pretend otherwise. Every number you see is still from the data I built it against.",
    'about.quickfacts': 'Quick Facts',
    'about.fact1.label': 'Education',
    'about.fact1.val': 'PKN STAN · Asia Cyber University',
    'about.fact2.label': 'Location',
    'about.fact2.val': 'Indonesia',
    'about.fact3.label': 'Status',
    'about.fact3.val': 'Taking freelance projects',
    'about.fact4.label': 'Languages',
    'about.fact4.val': 'Indonesian, English',
    'about.cta': 'Get In Touch',

    'services.tag': 'Services',
    'services.title': 'What I Can Build For You',
    'services.subtitle': "Three things, done properly. If your problem isn't one of these, I'll say so.",
    'service1.title': 'Dashboard & Reporting',
    'service1.desc': 'Your numbers live in five spreadsheets and nobody trusts them. I clean the data, model it properly, and build one dashboard you can actually make decisions from.',
    'service1.item1': 'Data cleaning & quality audit',
    'service1.item2': 'Power BI or Looker Studio dashboard',
    'service1.item3': 'Handover doc so you can maintain it',
    'service1.timeline': 'Typical: 2–3 weeks',
    'service2.title': 'Workflow Automation',
    'service2.desc': 'Manual re-typing between WhatsApp, spreadsheets, and marketplaces. I connect them so data lands once, in the right place, without anyone copying it.',
    'service2.item1': 'n8n workflows, Telegram/WhatsApp bots',
    'service2.item2': 'Google Sheets & API integrations',
    'service2.item3': "Error alerts so failures don't stay silent",
    'service2.timeline': 'Typical: 1–2 weeks',
    'service3.title': 'Data Cleanup & Audit',
    'service3.desc': "Before any dashboard is worth building, the data has to be trustworthy. Sometimes that's the whole job — and it's the one most people skip.",
    'service3.item1': 'Outlier & duplicate detection',
    'service3.item2': 'Written findings, not just a cleaned file',
    'service3.item3': 'Repeatable pipeline, not a one-off fix',
    'service3.timeline': 'Typical: 3–7 days',
    'process.title': "How We'd Work",
    'process.s1.title': '1 · Free call (30 min)',
    'process.s1.desc': "You describe the manual work. I tell you honestly whether automation helps, and whether I'm the right person.",
    'process.s2.title': '2 · Look at the real data',
    'process.s2.desc': "I audit a sample before quoting anything. No fixed price until I know what's actually in there.",
    'process.s3.title': '3 · Scope & price, in writing',
    'process.s3.desc': "Fixed scope, fixed price, fixed date. What's excluded is written down too.",
    'process.s4.title': '4 · Build & hand over',
    'process.s4.desc': 'You get the working system, the source files, and documentation. Not a black box you have to pay me to touch.',
    'services.ctaText': 'Currently taking on freelance projects. First conversation costs nothing.',
    'services.ctaBtn': 'Tell Me About Your Problem',

    'skills.tag': 'Skills',
    'skills.title': 'What I Work With',
    'skills.level.advanced': 'Advanced',
    'skills.level.intermediate': 'Intermediate',
    'skills.note': "Only listed if there's work on this page that demonstrates it. Learning SQL and machine learning — they'll appear here once something I've built proves it.",

    'badge.live': 'Live · real business',
    'badge.public': 'Public dataset',

    'projects.tag': 'Projects',
    'projects.title': 'Featured Work',
    'projects.subtitle': 'Labelled honestly. The badge on each card tells you what the data behind it actually is — deployed, public, or invented.',
    'projects.filter.all': 'All',
    'projects.filter.data': 'Data Analysis',
    'projects.filter.bi': 'Business Intelligence',
    'projects.filter.automation': 'Automation',

    'proj.sinok.title': 'Sinok Homestay — Booking & Forecasting System',
    'proj.sinok.desc': 'A 3-room homestay in Balige, Toba, running on it since July 2026 — bookings now arrive by Telegram instead of WhatsApp. Too new to claim an outcome; the numbers shown here are still from the simulated dataset I built it against.',
    'proj.sinok.cta': 'View Build Notes →',
    'proj.sinok.aria': 'View the Sinok Homestay build notes',
    'proj.powerbi.title': 'Retail Business Intelligence — Sales, Customer & Return Analysis',
    'proj.powerbi.desc': "UCI Online Retail — a dataset thousands of people have used. What's mine is the investigation: tracing two cancelled mega-orders that were inflating the return rate by more than double.",
    'proj.powerbi.cta': 'View Build Notes →',
    'proj.powerbi.aria': 'View the Retail Business Intelligence build notes',

    'exp.tag': 'Experience',
    'exp.title': 'Career Journey',
    'exp.current': 'Current',
    'exp.inProgress': 'In progress',
    'exp.groupWork': 'Work',
    'exp.groupEdu': 'Education',
    'exp.job1.date': 'Jan 2021 — Present',
    'exp.job1.role': 'Internal Compliance',
    'exp.job1.company': 'Ministry of Finance, Republic of Indonesia · Full-time',
    'exp.job1.desc': 'Building Power BI dashboards and reporting pipelines for internal compliance monitoring — turning scattered records into reviews that no longer depend on manual Excel consolidation.',
    'exp.job2.date': 'Dec 2018 — Jan 2021',
    'exp.job2.role': 'Finance Officer',
    'exp.job2.company': 'Ministry of Finance, Republic of Indonesia · Full-time',
    'exp.job2.desc': 'Budget execution, reconciliation, and financial reporting. Where the process was manual and repetitive, I rebuilt it in spreadsheets — the habit that eventually turned into dashboards.',
    'exp.edu1.role': 'Bachelor of Accounting',
    'exp.edu1.company': 'Asia Cyber University',
    'exp.edu1.desc': 'Accounting with a focus on data analysis. Expected 2027 — current GPA 3.89/4.0, not a final result.',
    'exp.edu2.role': 'Diploma',
    'exp.edu2.company': 'Politeknik Keuangan Negara STAN',
    'exp.edu2.desc': 'State finance polytechnic specializing in accounting and state financial management.',
    'certs.tag': 'Certifications',
    'certs.title': 'Licenses & Certifications',
    'cert3.name': 'Machine Learning (Fresh Graduate Academy)',
    'cert3.date': 'Nov 2025',
    'cert4.name': 'Membangun Proyek Deep Learning Tingkat Mahir',
    'cert4.date': 'Apr 2026 · Expires Apr 2029',

    'contact.tag': 'Contact',
    'contact.title': "Let's Work Together",
    'contact.subtitle': "Describe the manual work that's eating your week. If I can't help, I'll tell you that too.",
    'contact.availability': 'Taking freelance projects now',
    'contact.secondary': 'Also open to full-time roles in data analysis or BI.',

    'footer.copy': '© 2026 Septian Ivander. Built with HTML, CSS & JavaScript.',
  },
  id: {
    'nav.about': 'Tentang',
    'nav.services': 'Layanan',
    'nav.projects': 'Proyek',
    'nav.experience': 'Pengalaman',
    'nav.contact': 'Kontak',

    'hero.eyebrow': 'Halo, saya',
    'hero.role': 'Data & Automation Specialist',
    'hero.bio': 'Saya ubah data operasional yang berantakan — booking, transaksi, catatan harian — jadi dashboard, otomasi, dan proyeksi yang langsung bisa dipakai. Fokus untuk UMKM dan bisnis kecil yang masih kerja manual.',
    'hero.cta1': 'Lihat Yang Saya Kerjakan',
    'hero.cta2': 'Mulai Obrolan',
    'hero.stat1': 'Tahun di Data & Keuangan',
    'hero.stat2': 'Kementerian Keuangan RI',
    'hero.stat3': 'Power BI · n8n · Sheets',
    'hero.badge1': 'Automation First',
    'hero.badge2': 'Data Driven',

    'about.tag': 'Tentang',
    'about.title': 'Tentang Saya',
    'about.p1': 'Saya adalah Data & Automation Specialist dengan 7+ tahun di Kementerian Keuangan, mengintegrasikan fungsi kepatuhan dan keuangan dengan analisis data — membangun dashboard, mengotomasi alur kerja, dan mengubah data yang tercecer menjadi insight yang jelas dan bisa dipakai.',
    'about.p2': 'Fokus saya praktis: mengambil data operasional yang berantakan — booking, transaksi, catatan harian — dan mengubahnya jadi dashboard, otomasi, dan proyeksi yang bisa langsung digunakan UMKM dan bisnis kecil. Tools yang saya pakai sehari-hari: Power BI, Google Sheets, Looker Studio, n8n, dan Telegram Bot API.',
    'about.p3': 'Salah satu project di bawah kini berjalan di bisnis nyata — homestay 3 kamar di Balige. Mulai dipakai Juli 2026, jadi belum ada hasil yang terukur, dan saya tidak akan berpura-pura ada. Semua angka yang Anda lihat masih berasal dari data yang saya pakai membangunnya.',
    'about.quickfacts': 'Fakta Singkat',
    'about.fact1.label': 'Pendidikan',
    'about.fact1.val': 'PKN STAN · Asia Cyber University',
    'about.fact2.label': 'Lokasi',
    'about.fact2.val': 'Indonesia',
    'about.fact3.label': 'Status',
    'about.fact3.val': 'Menerima proyek freelance',
    'about.fact4.label': 'Bahasa',
    'about.fact4.val': 'Indonesia, Inggris',
    'about.cta': 'Hubungi Saya',

    'services.tag': 'Layanan',
    'services.title': 'Yang Bisa Saya Bangun Untuk Anda',
    'services.subtitle': 'Tiga hal, dikerjakan benar. Kalau masalah Anda bukan salah satunya, saya akan bilang.',
    'service1.title': 'Dashboard & Pelaporan',
    'service1.desc': 'Angka Anda tersebar di lima spreadsheet dan tak ada yang mempercayainya. Saya bersihkan datanya, modelkan dengan benar, dan bangun satu dashboard yang bisa dipakai mengambil keputusan.',
    'service1.item1': 'Pembersihan data & audit kualitas',
    'service1.item2': 'Dashboard Power BI atau Looker Studio',
    'service1.item3': 'Dokumen serah terima agar Anda bisa merawatnya sendiri',
    'service1.timeline': 'Umumnya: 2–3 minggu',
    'service2.title': 'Otomasi Alur Kerja',
    'service2.desc': 'Ketik ulang manual antara WhatsApp, spreadsheet, dan marketplace. Saya sambungkan supaya data masuk sekali, ke tempat yang benar, tanpa ada yang menyalin.',
    'service2.item1': 'Workflow n8n, bot Telegram/WhatsApp',
    'service2.item2': 'Integrasi Google Sheets & API',
    'service2.item3': 'Notifikasi error supaya kegagalan tidak diam-diam',
    'service2.timeline': 'Umumnya: 1–2 minggu',
    'service3.title': 'Pembersihan & Audit Data',
    'service3.desc': 'Sebelum dashboard apa pun layak dibangun, datanya harus bisa dipercaya. Kadang itulah seluruh pekerjaannya — dan itu yang paling sering dilewati orang.',
    'service3.item1': 'Deteksi outlier & duplikat',
    'service3.item2': 'Temuan tertulis, bukan sekadar file bersih',
    'service3.item3': 'Pipeline yang bisa diulang, bukan tambalan sekali pakai',
    'service3.timeline': 'Umumnya: 3–7 hari',
    'process.title': 'Cara Kita Bekerja',
    'process.s1.title': '1 · Telepon gratis (30 menit)',
    'process.s1.desc': 'Anda ceritakan kerja manualnya. Saya jawab jujur apakah otomasi membantu, dan apakah saya orang yang tepat.',
    'process.s2.title': '2 · Lihat data aslinya',
    'process.s2.desc': 'Saya audit sampelnya sebelum memberi harga. Tidak ada harga pasti sebelum saya tahu isinya.',
    'process.s3.title': '3 · Lingkup & harga, tertulis',
    'process.s3.desc': 'Lingkup tetap, harga tetap, tanggal tetap. Yang tidak termasuk juga ditulis.',
    'process.s4.title': '4 · Bangun & serah terima',
    'process.s4.desc': 'Anda dapat sistemnya, file sumbernya, dan dokumentasinya. Bukan kotak hitam yang harus bayar saya untuk menyentuhnya.',
    'services.ctaText': 'Sedang menerima proyek freelance. Obrolan pertama tidak dipungut biaya.',
    'services.ctaBtn': 'Ceritakan Masalah Anda',

    'skills.tag': 'Keahlian',
    'skills.title': 'Yang Saya Gunakan',
    'skills.level.advanced': 'Mahir',
    'skills.level.intermediate': 'Menengah',
    'skills.note': 'Hanya dicantumkan kalau ada karya di halaman ini yang membuktikannya. SQL dan machine learning sedang dipelajari — akan muncul di sini setelah ada yang saya bangun untuk membuktikannya.',

    'badge.live': 'Live · bisnis nyata',
    'badge.public': 'Dataset publik',

    'projects.tag': 'Proyek',
    'projects.title': 'Karya Unggulan',
    'projects.subtitle': 'Dilabeli jujur. Badge di tiap kartu memberi tahu data di baliknya benar-benar apa — terpasang, publik, atau karangan.',
    'projects.filter.all': 'Semua',
    'projects.filter.data': 'Analisis Data',
    'projects.filter.bi': 'Business Intelligence',
    'projects.filter.automation': 'Automation',

    'proj.sinok.title': 'Sinok Homestay — Booking & Forecasting System',
    'proj.sinok.desc': 'Homestay 3 kamar di Balige, Toba, memakainya sejak Juli 2026 — booking kini masuk lewat Telegram, bukan WhatsApp. Terlalu baru untuk mengklaim hasil; angka di halaman ini masih dari dataset simulasi yang saya pakai membangunnya.',
    'proj.sinok.cta': 'Lihat Catatan Build →',
    'proj.sinok.aria': 'Lihat catatan build Sinok Homestay',
    'proj.powerbi.title': 'Retail Business Intelligence — Sales, Customer & Return Analysis',
    'proj.powerbi.desc': 'UCI Online Retail — dataset yang sudah dipakai ribuan orang. Yang jadi milik saya adalah investigasinya: melacak dua mega-order yang dibatalkan dan menggelembungkan return rate lebih dari dua kali lipat.',
    'proj.powerbi.cta': 'Lihat Catatan Build →',
    'proj.powerbi.aria': 'Lihat catatan build Retail Business Intelligence',

    'exp.tag': 'Pengalaman',
    'exp.title': 'Perjalanan Karier',
    'exp.current': 'Sekarang',
    'exp.inProgress': 'Sedang berjalan',
    'exp.groupWork': 'Pekerjaan',
    'exp.groupEdu': 'Pendidikan',
    'exp.job1.date': 'Jan 2021 — Sekarang',
    'exp.job1.role': 'Internal Compliance',
    'exp.job1.company': 'Kementerian Keuangan Republik Indonesia · Full-time',
    'exp.job1.desc': 'Membangun dashboard Power BI dan alur pelaporan untuk pemantauan kepatuhan internal — mengubah catatan yang tercecer menjadi telaah yang tidak lagi bergantung pada konsolidasi Excel manual.',
    'exp.job2.date': 'Des 2018 — Jan 2021',
    'exp.job2.role': 'Finance Officer',
    'exp.job2.company': 'Kementerian Keuangan Republik Indonesia · Full-time',
    'exp.job2.desc': 'Pelaksanaan anggaran, rekonsiliasi, dan pelaporan keuangan. Di mana prosesnya manual dan berulang, saya bangun ulang di spreadsheet — kebiasaan yang akhirnya berkembang jadi dashboard.',
    'exp.edu1.role': 'Sarjana Akuntansi',
    'exp.edu1.company': 'Asia Cyber University',
    'exp.edu1.desc': 'Akuntansi dengan fokus analisis data. Perkiraan lulus 2027 — IPK berjalan 3.89/4.0, bukan hasil akhir.',
    'exp.edu2.role': 'Diploma',
    'exp.edu2.company': 'Politeknik Keuangan Negara STAN',
    'exp.edu2.desc': 'Politeknik keuangan negara dengan spesialisasi akuntansi dan pengelolaan keuangan negara.',
    'certs.tag': 'Sertifikasi',
    'certs.title': 'Lisensi & Sertifikasi',
    'cert3.name': 'Machine Learning (Fresh Graduate Academy)',
    'cert3.date': 'Nov 2025',
    'cert4.name': 'Membangun Proyek Deep Learning Tingkat Mahir',
    'cert4.date': 'Apr 2026 · Berlaku s.d. Apr 2029',

    'contact.tag': 'Kontak',
    'contact.title': 'Mari Bekerja Sama',
    'contact.subtitle': 'Ceritakan kerja manual yang menghabiskan waktu Anda tiap minggu. Kalau saya tidak bisa membantu, itu juga akan saya bilang.',
    'contact.availability': 'Sedang menerima proyek freelance',
    'contact.secondary': 'Juga terbuka untuk posisi full-time di analisis data atau BI.',

    'footer.copy': '© 2026 Septian Ivander. Dibuat dengan HTML, CSS & JavaScript.',
  },
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


let currentLang = 'en';
try {
  const saved = localStorage.getItem('lang');
  if (saved === 'en' || saved === 'id') currentLang = saved;
} catch (e) { /* localStorage unavailable */ }

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

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.querySelector('.lang-toggle__active').textContent = lang.toUpperCase();
    toggle.querySelector('.lang-toggle__other').textContent = lang === 'en' ? 'ID' : 'EN';
  }

  try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
  currentLang = lang;
}

applyLang(currentLang);
document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'id' : 'en');
});

// ─── Nav ─────────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

function setMenuOpen(open) {
  navLinks.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
}

burger.addEventListener('click', () => setMenuOpen(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
function setActiveLink() {
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    const link = document.querySelector(`.nav__links a[href="#${section.id}"]`);
    if (!link) return;
    const top = section.offsetTop;
    link.classList.toggle('active', scrollY >= top && scrollY < top + section.offsetHeight);
  });
}
window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// ─── Reveal on scroll ────────────────────────────────────────────
const revealTargets = document.querySelectorAll(
  '.hero__content, .hero__visual, .about__text, .about__card, .skill-card, .project-card, .timeline__item, .contact__info, .contact__form'
);

if (prefersReducedMotion) {
  revealTargets.forEach(el => el.classList.add('visible'));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// ─── Project filter ──────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    projectCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category.split(' ').includes(filter);
      card.classList.toggle('hidden', !show);
    });
  });
});

// ─── Hero stat counters ──────────────────────────────────────────
function animateCounter(el, target, suffix) {
  const duration = 1500;
  let start = null;
  const step = timestamp => {
    if (start === null) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const heroStats = document.querySelector('.hero__stats');
if (heroStats && !prefersReducedMotion) {
  const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.stat__num').forEach(el => {
        const value = parseInt(el.textContent, 10);
        if (Number.isNaN(value)) return;
        const suffix = el.textContent.replace(/\d+/, '');
        el.textContent = '0' + suffix;
        animateCounter(el, value, suffix);
      });
      heroObserver.disconnect();
    });
  }, { threshold: 0.5 });
  heroObserver.observe(heroStats);
}

// ─── Dialog layer (project modals + lightbox) ────────────────────
// Both dialogs share one Escape handler so the topmost layer closes first,
// and one scroll-lock counter so closing one doesn't unlock the other.
const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';
const dialogStack = [];

function lockScroll() {
  document.body.classList.add('modal-open');
}
function unlockScroll() {
  if (dialogStack.length === 0) document.body.classList.remove('modal-open');
}

function openDialog(el, onClose) {
  const entry = { el, onClose, lastFocus: document.activeElement };
  dialogStack.push(entry);
  el.setAttribute('aria-hidden', 'false');
  lockScroll();

  const first = el.querySelector(FOCUSABLE);
  if (first) first.focus();
}

function closeTopDialog() {
  const entry = dialogStack.pop();
  if (!entry) return;
  entry.onClose();
  entry.el.setAttribute('aria-hidden', 'true');
  unlockScroll();
  if (entry.lastFocus && typeof entry.lastFocus.focus === 'function') entry.lastFocus.focus();
}

function closeDialog(el) {
  const index = dialogStack.findIndex(entry => entry.el === el);
  if (index === -1) return;
  // Close everything stacked above it first, then it.
  while (dialogStack.length > index) closeTopDialog();
}

// Trap Tab inside the topmost dialog.
document.addEventListener('keydown', e => {
  if (dialogStack.length === 0) return;

  if (e.key === 'Escape') {
    e.preventDefault();
    closeTopDialog();
    return;
  }
  if (e.key !== 'Tab') return;

  const { el } = dialogStack[dialogStack.length - 1];
  const focusable = [...el.querySelectorAll(FOCUSABLE)].filter(n => n.offsetParent !== null);
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

// ─── Project modals ──────────────────────────────────────────────
document.querySelectorAll('.js-project-card').forEach(card => {
  const open = () => {
    const modal = document.querySelector(card.dataset.modalTarget);
    if (!modal) return;
    modal.classList.add('is-open');
    openDialog(modal, () => modal.classList.remove('is-open'));
  };

  card.addEventListener('click', open);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });
});

document.querySelectorAll('[data-close-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.project-modal');
    if (modal) closeDialog(modal);
  });
});

// ─── Gallery lightbox ────────────────────────────────────────────
const lightbox = document.getElementById('sinok-lightbox');
const lbImg = lightbox.querySelector('.sinok-lightbox__img');
const lbCaption = lightbox.querySelector('.sinok-lightbox__caption');

function openLightbox(src, caption) {
  lbImg.src = src;
  lbImg.alt = caption;
  lbCaption.textContent = caption;
  lightbox.classList.add('is-open');
  openDialog(lightbox, () => {
    lightbox.classList.remove('is-open');
    lbImg.removeAttribute('src');
  });
}

document.querySelectorAll('.sinok-gallery__item').forEach(item => {
  const open = () => openLightbox(item.dataset.src, item.dataset.caption);
  item.addEventListener('click', open);
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });
});

lightbox.querySelector('.sinok-lightbox__close').addEventListener('click', () => closeDialog(lightbox));
lightbox.querySelector('.sinok-lightbox__overlay').addEventListener('click', () => closeDialog(lightbox));
