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
    'hero.stat1': 'End-to-End Case Studies',
    'hero.stat2': 'Phases: Dashboard · Automation · Forecast',
    'hero.stat3': 'Open for Freelance',
    'hero.badge1': 'Automation First',
    'hero.badge2': 'Data Driven',

    'about.tag': 'About',
    'about.title': 'Who I Am',
    'about.p1': "I'm a Data & Automation Specialist with 7+ years at the Ministry of Finance, where I integrate compliance and financial management with data analysis — building dashboards, automating workflows, and turning scattered records into clear, usable insights.",
    'about.p2': "My focus is practical: taking messy operational data — bookings, transactions, daily records — and turning them into dashboards, automation, and forecasts that small businesses and SMEs can actually act on. Tools I use daily: Power BI, Google Sheets, Looker Studio, n8n, and Telegram Bot API.",
    'about.p3': "Currently building my portfolio of end-to-end case studies. Open for freelance projects where data and automation can replace manual work.",
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
    'skills.level.advanced': 'Advanced',
    'skills.level.intermediate': 'Intermediate',

    'projects.tag': 'Projects',
    'projects.title': 'Featured Work',
    'projects.filter.all': 'All',
    'projects.filter.data': 'Data Analysis',
    'projects.filter.bi': 'Business Intelligence',
    'projects.filter.automation': 'Automation',

    'proj.sinok.title': 'Sinok Homestay — Booking & Forecasting System',
    'proj.sinok.desc': 'Automation and business intelligence system to help homestay businesses record bookings, reduce double-booking risk, monitor occupancy, and project monthly revenue.',
    'proj.sinok.cta': 'View Case Study →',
    'proj.sinok.aria': 'View the Sinok Homestay case study',
    'proj.powerbi.title': 'Retail Business Intelligence — Sales, Customer & Return Analysis',
    'proj.powerbi.desc': '541K rows of raw data, cleaned until trustworthy. Return Rate corrected from 4.88% to 2.15% — a 2-page dashboard that prioritizes data quality, not just visuals.',
    'proj.powerbi.cta': 'View Case Study →',
    'proj.powerbi.aria': 'View the Retail Business Intelligence case study',

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
    'contact.form.opening': 'Opening your email app…',
    'contact.form.fallback': 'Your browser blocked the email app. Write to septianivander.data@gmail.com directly.',

    'footer.copy': '© 2026 Septian Ivander. Built with HTML, CSS & JavaScript.',
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
    'about.p1': 'Saya adalah Data & Automation Specialist dengan 7+ tahun di Kementerian Keuangan, mengintegrasikan fungsi kepatuhan dan keuangan dengan analisis data — membangun dashboard, mengotomasi alur kerja, dan mengubah data yang tercecer menjadi insight yang jelas dan bisa dipakai.',
    'about.p2': 'Fokus saya praktis: mengambil data operasional yang berantakan — booking, transaksi, catatan harian — dan mengubahnya jadi dashboard, otomasi, dan proyeksi yang bisa langsung digunakan UMKM dan bisnis kecil. Tools yang saya pakai sehari-hari: Power BI, Google Sheets, Looker Studio, n8n, dan Telegram Bot API.',
    'about.p3': 'Sedang membangun portofolio studi kasus end-to-end. Terbuka untuk proyek freelance di mana data dan otomasi bisa menggantikan kerja manual.',
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
    'skills.level.advanced': 'Mahir',
    'skills.level.intermediate': 'Menengah',

    'projects.tag': 'Proyek',
    'projects.title': 'Karya Unggulan',
    'projects.filter.all': 'Semua',
    'projects.filter.data': 'Analisis Data',
    'projects.filter.bi': 'Business Intelligence',
    'projects.filter.automation': 'Automation',

    'proj.sinok.title': 'Sinok Homestay — Booking & Forecasting System',
    'proj.sinok.desc': 'Sistem otomasi dan business intelligence untuk membantu bisnis homestay mencatat booking, mengurangi risiko double booking, memantau okupansi, dan memproyeksikan revenue bulanan.',
    'proj.sinok.cta': 'Lihat Case Study →',
    'proj.sinok.aria': 'Lihat detail case study Sinok Homestay',
    'proj.powerbi.title': 'Retail Business Intelligence — Sales, Customer & Return Analysis',
    'proj.powerbi.desc': '541K baris data mentah, dibersihkan sampai bisa dipercaya. Return Rate terkoreksi dari 4.88% ke 2.15% — dashboard 2 halaman yang mengutamakan kualitas data, bukan sekadar visual.',
    'proj.powerbi.cta': 'Lihat Case Study →',
    'proj.powerbi.aria': 'Lihat detail case study Retail Business Intelligence',

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
    'contact.form.opening': 'Membuka aplikasi email Anda…',
    'contact.form.fallback': 'Browser Anda memblokir aplikasi email. Kirim langsung ke septianivander.data@gmail.com.',

    'footer.copy': '© 2026 Septian Ivander. Dibuat dengan HTML, CSS & JavaScript.',
  },
};

const EMAIL = 'septianivander.data@gmail.com';
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

// ─── Contact form (mailto) ───────────────────────────────────────
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const subject = encodeURIComponent(data.subject || 'Portfolio Contact');
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
  );

  showFormStatus(translations[currentLang]['contact.form.opening'], 'info');

  // Popup blockers kill window.open on mailto: — a same-tab navigation is reliable.
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

  // If the mail client never takes over, the page stays put. Tell the user.
  setTimeout(() => {
    if (!document.hidden) {
      showFormStatus(translations[currentLang]['contact.form.fallback'], 'warn');
    }
  }, 2000);
});

function showFormStatus(message, kind) {
  let el = document.getElementById('formStatus');
  if (!el) {
    el = document.createElement('p');
    el.id = 'formStatus';
    el.className = 'form-status';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    contactForm.appendChild(el);
  }
  el.dataset.kind = kind;
  el.textContent = message;
}

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
