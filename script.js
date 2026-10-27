const toggle = document.querySelector('.menu-button');
const nav = document.querySelector('#site-menu');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
