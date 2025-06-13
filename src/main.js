import "./style.css";

const plusIcons = document.querySelectorAll(".plus-icon");
const minusIcons = document.querySelectorAll(".minus-icon");

plusIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.target.classList.toggle("hidden");
    const faqItemContent = e.target.parentElement.nextElementSibling;
    faqItemContent.classList.toggle("hidden");
    const minusIcon = e.target.parentElement.querySelector(".minus-icon");
    minusIcon.classList.toggle("hidden");
  });
});

minusIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.target.classList.toggle("hidden");
    const faqItemContent = e.target.parentElement.nextElementSibling;
    faqItemContent.classList.toggle("hidden");
    const plusIcon = e.target.parentElement.querySelector(".plus-icon");
    plusIcon.classList.toggle("hidden");
  });
});
