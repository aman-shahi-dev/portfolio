
const githubBtn = document.getElementById('githubBtn')

const linkedinBtn = document.getElementById('linkedinBtn')

const twitterBtn = document.getElementById('twitterBtn')

const github_url = 'https://github.com/aman-shahi-dev'

const linkedin_url = 'https://www.linkedin.com/in/aman-shahi-sde/'

const twitter_url = 'https://x.com/amanshahidev?t=3dQkFH5-zdRUqTuapRhWMQ&s=09'

githubBtn.addEventListener('click', () => {
    window.location.href = github_url
})

linkedinBtn.addEventListener('click', () => {
    window.location.href = linkedin_url
})

twitterBtn.addEventListener('click', () => {
    window.location.href = twitter_url
})



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
