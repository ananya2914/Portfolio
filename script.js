// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (remembers the choice; falls back to the OS setting)
const root = document.documentElement;
document.querySelector('.theme-toggle').addEventListener('click', () => {
  const current = root.dataset.theme
    || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Project filters
const chips = document.querySelectorAll('.chip');
const projects = document.querySelectorAll('.project');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.toggle('active', c === chip));
  const f = chip.dataset.filter;
  projects.forEach(p => {
    p.classList.toggle('hidden', f !== 'all' && !p.dataset.tags.split(' ').includes(f));
  });
}));

// Reveal sections on scroll
const targets = document.querySelectorAll('.section, .project');
targets.forEach(el => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  targets.forEach(el => io.observe(el));
} else {
  targets.forEach(el => el.classList.add('in'));
}
