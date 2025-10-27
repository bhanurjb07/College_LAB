// DOM helpers
const q = sel => document.querySelector(sel);
const qa = sel => document.querySelectorAll(sel);

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (persist in localStorage)
const themeToggle = q('#theme-toggle');
const root = document.documentElement;
const body = document.body;

function applyTheme(light) {
  if (light) body.classList.add('light'), themeToggle.textContent = '🌙';
  else body.classList.remove('light'), themeToggle.textContent = '☀️';
  localStorage.setItem('themeLight', !!light);
}

// initialize from stored preference or system
const stored = localStorage.getItem('themeLight');
if (stored !== null) applyTheme(stored === 'true');
else applyTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);

// toggle button
themeToggle.addEventListener('click', () => {
  applyTheme(!body.classList.contains('light'));
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Reveal on scroll (IntersectionObserver)
const reveals = qa('.reveal');
const obs = new IntersectionObserver((entries, observer) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, {threshold: 0.12});

reveals.forEach(r => obs.observe(r));

// small parallax mouse move on hero photo
const heroPhoto = q('.hero-photo img');
if (heroPhoto) {
  document.addEventListener('mousemove', (ev) => {
    const w = window.innerWidth, h = window.innerHeight;
    const x = (ev.clientX - w/2) / (w/2);
    const y = (ev.clientY - h/2) / (h/2);
    heroPhoto.style.transform = `translate(${x * 6}px, ${y * 6}px) rotate(${x * -2}deg)`;
  });
}

// Accessibility: keyboard toggle (T)
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 't') {
    themeToggle.click();
  }
});
