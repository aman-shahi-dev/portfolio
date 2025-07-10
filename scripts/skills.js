const links = document.querySelectorAll('.link');

let currentActive = localStorage.getItem('isActiveTab');

if (!currentActive) {
  currentActive = 'index.html'; 
}

links.forEach(link => {
  if (link.getAttribute('href') === currentActive) {
    link.classList.add('active');  
  }
});

links.forEach(link => {
  link.addEventListener('click', function () {
    const href = this.getAttribute('href');
    localStorage.setItem('isActiveTab', href);
  });
});

window.addEventListener('pagehide', (event) => {
  if (event.persisted === false) {
    localStorage.removeItem('isActiveTab');
  }
});
