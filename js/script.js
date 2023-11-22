// for resposive navbar
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


// JavaScript code to toggle FAQ items
document.querySelectorAll('.faq').forEach(function(faq) {
  const icon = faq.querySelector('.faq__icon');
  const answer = faq.querySelector('.question__answer');

  faq.addEventListener('click', function() {
      faq.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq');

  faqItems.forEach(function (item) {
    const header = item.querySelector('.faq__header');

    header.addEventListener('click', function () {
      item.classList.toggle('expanded');
    });
  });
});


// DOM to change the reviews 
document.addEventListener("DOMContentLoaded", function() {
  // Function to update the comment content
  function updateComment(commentId, newComment) {
      const commentElement = document.getElementById(commentId);
      const commentTextElement = commentElement.querySelector(".text");
      commentTextElement.textContent = newComment;
  }

  // Example usage: Update the first comment
  const newCommentText = "This is the updated comment for Aruzhan.";
  updateComment("comment-1", newCommentText);
});



// DOM to change the answers of FAQ
// Get all the <p> elements within elements having the class .question__answer
const answerElements = document.querySelectorAll('.question__answer p');

// Define an array of new answers
const newAnswers = [
  "Determine your specific goals and objectives in the field of data science. Are you looking to acquire a broad understanding of the field or specialize in a specific area? Knowing your goals will help you narrow down the course options",
  "Acquire a strong foundation in statistics and programming languages like Python or R. Gain hands-on experience through projects, internships, and online courses to showcase your skills and build a professional network within the data science communit",
  "Machine learning focuses on developing algorithms that enable computers to learn and make predictions or decisions without explicit programming instructions, based on patterns and data. It involves training models on data to improve their performance over time.",
  "Python and R are the most commonly used programming languages in data science courses due to their extensive libraries and tools for data analysis and machine learning.",
  "To study data science, it is crucial to have a strong foundation in mathematics, including statistics and linear algebra. Additionally, proficiency in programming languages like Python or R is essential for data manipulation and analysis.",
  "Deep learning is a subset of machine learning that trains neural networks to mimic the human brain, enabling automatic learning through interconnected layers. It utilizes backpropagation to adjust network weights and improve accuracy in predictions."
];

// Loop through each <p> element and change its text based on the new answers array
answerElements.forEach((answerElement, index) => {
  answerElement.textContent = newAnswers[index];
});


// DOM to change the about us
// Select the <p> element within the "about us" box
const aboutUsParagraph = document.querySelector('.footer .box p');

// Change the text content
aboutUsParagraph.textContent = 'Ace Study stands out due to its commitment to inclusivity and accessibility in the world of technology and Data sciense .';


// teacher carousel
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-container .box');

showSlide(slideIndex);

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  slides.forEach((slide) => (slide.style.display = 'none'));
  slides[slideIndex].style.display = 'block';
}

function changeSlide(offset) {
  showSlide((slideIndex += offset));
}

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));


// home animatiion for title
const textElement = document.getElementById('typing-text');
const originalText = textElement.innerText;

function typeText() {
    textElement.innerText = ''; // Clear the text

    let i = 0;
    const textToType = originalText + ' '; // Add a space at the end for a brief pause

    function addCharacter() {
        if (i < textToType.length) {
            if (textToType[i] === ' ') {
                textElement.innerHTML += '&nbsp;';
            } else {
                textElement.innerHTML += textToType[i];
            }
            i++;
        } else {
            clearInterval(interval); // Stop the animation
            setTimeout(typeText, 1000); // Pause for 1 second before restarting
        }
    }

    const interval = setInterval(addCharacter, 200); // Adjust the delay (100ms) to control typing speed
}

typeText();


// function for slide show
let slideIndex1 = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex1 = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}




