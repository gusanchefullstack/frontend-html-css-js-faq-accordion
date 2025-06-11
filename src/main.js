import './style.css'

const plusIcons = document.querySelectorAll('.plus-icon')

plusIcons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    console.log(e.target) 
    const faqItemContent = e.target.parentElement.nextElementSibling
    faqItemContent.classList.toggle('hidden')
  })
})