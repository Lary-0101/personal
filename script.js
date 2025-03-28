// 🔁 Comutare limbă RO / RU
function setLang(lang) {
  const elements = document.querySelectorAll('[data-ro]');
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

// 🎯 Apare la scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      // 🔢 Numără prețurile
      entry.target.querySelectorAll('.price').forEach(price => {
        const endValue = parseInt(price.getAttribute('data-value'));
        let current = 0;
        const duration = 1000;
        const step = Math.ceil(duration / endValue);
        const counter = setInterval(() => {
          current++;
          price.textContent = current;
          if (current >= endValue) clearInterval(counter);
        }, step);
      });
    }
  });
}, { threshold: 0.2 });

// 🔃 Aplica observatorul
document.querySelectorAll('.fade-section').forEach(section => {
  observer.observe(section);
});
