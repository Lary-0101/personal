function setLang(lang) {
  document.querySelectorAll('[data-ro]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
}
