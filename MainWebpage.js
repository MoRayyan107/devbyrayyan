// --- Tab Functionality for "About Me" Section ---
const links = document.getElementsByClassName("links");
const contents = document.getElementsByClassName("tab-contents");
const skillsTab = document.getElementById("Skills"); // Get the Skills container

function opentab(id, event) {
  // Remove active classes from all links and content panels
  for (let tabLink of links) {
    tabLink.classList.remove("active_type");
  }
  for (let tabContent of contents) {
    tabContent.classList.remove("Active");
  }
  
  // Add active classes to the clicked link and corresponding content
  event.currentTarget.classList.add("active_type");
  document.getElementById(id).classList.add("Active");

  // --- REVISED LOGIC FOR SKILL BAR ANIMATION ---
  // Always remove the animation class first to reset the bars to 0
  skillsTab.classList.remove('animate-progress');

  // If the opened tab is 'Skills', re-add the class after a tiny delay.
  // This delay gives the browser time to apply the 'display: block' style,
  // which ensures the CSS transition will fire correctly.
  if (id === 'Skills') {
    setTimeout(function() {
      skillsTab.classList.add('animate-progress');
    }, 100); // 100 milliseconds is a safe delay
  }
}


// --- Mobile Navigation Menu ---
const menu = document.getElementById('nav-menu');

function openMenu() {
  menu.style.right = '0';
}

function closeMenu() {
  menu.style.right = '-300px';
}


// --- Dynamic Typewriter Effect ---
document.addEventListener("DOMContentLoaded", function() {
  const typingElement = document.getElementById("typing-text");
  const words = ["Computer Science Student", "Back-End Development", "Software Engineer","Web Development"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    let displayText = '';

    if (isDeleting) {
      displayText = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      displayText = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    typingElement.textContent = displayText;

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => { isDeleting = true; type(); }, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      const typeSpeed = isDeleting ? 50 : 150;
      setTimeout(type, typeSpeed);
    }
  }

  type();
});

// --- NEW: Add this block for Tappable Project Cards on Mobile ---
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', () => {
            // This allows the user to tap the same card to close it
            project.classList.toggle('tapped');
            
            // This closes other open cards when you tap a new one
            projects.forEach(otherProject => {
                if (otherProject !== project) {
                    otherProject.classList.remove('tapped');
                }
            });
        });
    });
});


// --- Fade-in Animation on Scroll ---
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#nav-menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
});