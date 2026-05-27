// ===== AOS Init =====
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 900,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
    disable: window.innerWidth < 600 ? false : false
  });
});

// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ===== Navbar Scroll Effect + Active link + Progress bar + Back to top =====
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Navbar background
  if (scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  // Scroll progress bar
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollY / docHeight) * 100;
  scrollProgress.style.width = progress + '%';

  // Back to top
  if (scrollY > 400) backToTop.classList.add('show');
  else backToTop.classList.remove('show');

  // Active section
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    if (scrollY >= top && scrollY < top + height) current = sec.id;
  });

  navLinkEls.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

// ===== Cursor Glow (desktop only) =====
const cursorGlow = document.getElementById('cursorGlow');
if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
} else {
  cursorGlow.style.display = 'none';
}

// ===== Typed text effect =====
const typedText = document.getElementById('typedText');
const phrases = [
  'Production AI Systems',
  'RAG Pipelines',
  'Multi-Agent Architectures',
  'Voice AI Agents',
  'LLM Applications',
  'Automation Workflows',
  'Full-Stack AI Products'
];
let phraseIdx = 0, charIdx = 0, isDeleting = false;

function typeLoop() {
  const current = phrases[phraseIdx];
  if (isDeleting) {
    typedText.textContent = current.substring(0, charIdx--);
  } else {
    typedText.textContent = current.substring(0, charIdx++);
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIdx === current.length + 1) {
    isDeleting = true;
    speed = 1500;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    speed = 300;
  }

  setTimeout(typeLoop, speed);
}
typeLoop();

// ===== Animated Counter Stats =====
const counters = document.querySelectorAll('.stat-num');
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.dataset.target;
      const duration = 1800;
      const startTime = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        el.textContent = value + (target === 85 ? '%' : target === 15 ? '+' : '+');
        if (progress < 1) requestAnimationFrame(animate);
        else el.textContent = target + (target === 85 ? '%' : '+');
      };

      requestAnimationFrame(animate);
      counterObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObs.observe(c));

// ===== Tilt effect on project cards (desktop) =====
if (window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll('.project-card, .about-card, .skill-cat').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -4;
      const rotY = ((x - cx) / cx) * 4;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ===== Form: show success on Netlify redirect =====
if (window.location.search.includes('success=1')) {
  const success = document.getElementById('formSuccess');
  if (success) {
    success.style.display = 'block';
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// ===== Force textarea placeholder for floating label trick =====
document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => {
  el.setAttribute('placeholder', ' ');
});
