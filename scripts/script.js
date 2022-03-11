const langLinks = document.querySelectorAll('.header__lang-link');

function toggleLang(){
  document.getElementById('ru').classList.toggle('header__lang-link_active');
  document.getElementById('en').classList.toggle('header__lang-link_active');
}

langLinks.forEach(langlink => langlink.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('header__lang-link_active')) {
    return false
  } else {
    toggleLang();
  }
}));