
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