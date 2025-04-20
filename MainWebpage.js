var links = document.getElementsByClassName("links");
var contents = document.getElementsByClassName("tab-contents");

function opentab(id) {
  for (let TabLinks of links) {
    TabLinks.classList.remove("active_type");
  }
  for (let TabContents of contents) {
    TabContents.classList.remove("Active");
  }
  event.currentTarget.classList.add("active_type");
  document.getElementById(id).classList.add("Active");
}

var options = document.getElementById('Menu');

function openMenu() {
  options.style.right = '0';
}

function closeMenu() {
  options.style.right = '-150px';
}

function Home() {
  options.style.right = '-150px';
}

function About() {
  options.style.right = '-150px';
}

function Projects() {
  options.style.right = '-150px';
}

function Contact() {
  options.style.right = '-150px';
}

// Smooth Movement of Image in About page
window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll(".scroll-animate");
  elements.forEach(function (element) {
    var rect = element.getBoundingClientRect();
    var alreadyAnimated = element.classList.contains("animate");

    // Trigger animation only when scrolling down into the viewport
    if (rect.top < window.innerHeight && rect.bottom > 0 && !alreadyAnimated) {
      element.classList.add("animate");
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const text = "MEng Computer Science";
  const typingElement = document.getElementById("typing-text");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 100); // Adjust typing speed here
    }
  }

  typingElement.textContent = ""; // Clear the initial text
  typeText(); // Start the typing effect
});


