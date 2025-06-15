// Import styles
import "./style.css";

// Select all plus and minus icons from the accordion
const plusIcons = document.querySelectorAll(".plus-icon");
const minusIcons = document.querySelectorAll(".minus-icon");

// Add event listeners to plus icons
plusIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    // Hide plus icon on click
    e.target.classList.toggle("hidden");

    // Get and toggle FAQ content visibility
    const faqItemContent = e.target.parentElement.nextElementSibling;
    faqItemContent.classList.toggle("hidden");

    // Show corresponding minus icon
    const minusIcon = e.target.parentElement.querySelector(".minus-icon");
    minusIcon.classList.toggle("hidden");
  });
});

// Add event listeners to minus icons
minusIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    // Hide minus icon on click
    e.target.classList.toggle("hidden");

    // Get and toggle FAQ content visibility
    const faqItemContent = e.target.parentElement.nextElementSibling;
    faqItemContent.classList.toggle("hidden");

    // Show corresponding plus icon
    const plusIcon = e.target.parentElement.querySelector(".plus-icon");
    plusIcon.classList.toggle("hidden");
  });
});
