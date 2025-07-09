
const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', function () {
    const href = this.getAttribute('href');
    localStorage.setItem('isActiveTab', href);  // Save the active tab
  });
});

const currentActive = localStorage.getItem('isActiveTab');

links.forEach(link => {
  if (link.getAttribute('href') === currentActive) {
    link.classList.add('active');
  }
});