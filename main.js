const switcher = document.querySelector('#theme-switch');
const html = document.querySelector('html');

function setTheme() {
  if (switcher.checked) {
    html.dataset.theme = 'dark';
  } else {
    html.dataset.theme = 'light';
  }
}

switcher.addEventListener('change', setTheme);

setTheme()