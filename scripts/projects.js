
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


const deployedLinks = {
  project_1: 'https://aman-shahi-dev.github.io/algohub/',
  project_2: 'https://aman-shahi-dev.github.io/taskzen/',
  project_3: 'https://aman-shahi-dev.github.io/advance-color-picker/',
  project_4: 'https://aman-shahi-dev.github.io/countdown-timer/',
  project_5: 'https://aman-shahi-dev.github.io/calculator-using-JS/',
  project_6: 'https://aman-shahi-dev.github.io/bmi-index-calculator-responsive/',
  project_7: 'https://aman-shahi-dev.github.io/dynamic-background-changer/',
  project_8: 'https://aman-shahi-dev.github.io/todo-app/',
  project_9: 'https://aman-shahi-dev.github.io/review-collector/',
};

const githubRepos = {
  project_1: 'https://github.com/aman-shahi-dev/algohub',
  project_2: 'https://github.com/aman-shahi-dev/taskzen',
  project_3: 'https://github.com/aman-shahi-dev/advance-color-picker',
  project_4: 'https://github.com/aman-shahi-dev/countdown-timer',
  project_5: 'https://github.com/aman-shahi-dev/calculator-using-JS',
  project_6: 'https://github.com/aman-shahi-dev/bmi-index-calculator-responsive',
  project_7: 'https://github.com/aman-shahi-dev/dynamic-background-changer',
  project_8: 'https://github.com/aman-shahi/todo-app',
  project_9: 'https://github.com/aman-shahi-dev/review-collector',
};

// Get total projects dynamically from links
const totalProjects = Object.keys(deployedLinks).length;

for (let i = 1; i <= totalProjects; i++) {
  const liveBtn = document.querySelector(`#livePreview${i}`);
  const repoBtn = document.querySelector(`#githubRepo${i}`);

  const liveLink = deployedLinks[`project_${i}`];
  const repoLink = githubRepos[`project_${i}`];

  if (liveBtn && liveLink) {
    liveBtn.addEventListener('click', () => {
      window.location.href = liveLink;
    });
  }

  if (repoBtn && repoLink) {
    repoBtn.addEventListener('click', () => {
      window.location.href = repoLink;
    });
  }
}
