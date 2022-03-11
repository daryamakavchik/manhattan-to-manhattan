const langLinks = document.querySelectorAll('.header__lang-link');

function toggleLang(){
  document.getElementById('ru').classList.toggle('header__lang-link_active');
  document.getElementById('en').classList.toggle('header__lang-link_active');
}

langLinks.forEach(langlink => langlink.addEventListener('click', toggleLang));