// --- Tab Functionality for "About Me" Section ---
const links = document.getElementsByClassName("links");
const contents = document.getElementsByClassName("tab-contents");
const skillsTab = document.getElementById("Skills"); 

const tabCache = {};

function opentab(id, event) {
  for (let tabLink of links) {
    tabLink.classList.remove("active_type");
  }
  for (let tabContent of contents) {
    tabContent.classList.remove("Active");
  }
  
  event.currentTarget.classList.add("active_type");

  if (!tabCache[id]) {
    tabCache[id] = document.getElementById(id);
  }
  tabCache[id].classList.add("Active");

  skillsTab.classList.remove('animate-progress');

  if (id === 'Skills') {
    setTimeout(function() {
      skillsTab.classList.add('animate-progress');
    }, 100); 
  }
}

// --- Blinking effect on Custom Logo ---
const slash = document.getElementById("slash-command");
setInterval(() => {
  slash.classList.toggle("slash");
}, 500);


// --- Mobile Navigation Menu ---
const menu = document.getElementById('nav-menu');

function openMenu() {
  menu.style.right = '0';
}

function closeMenu() {
  menu.style.right = '-300px';
}

// --- Certificate Modal Functionality ---
function openModal(imageSrc) {
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
  const modal = document.getElementById("certModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// --- Initializations on DOMContentLoaded ---
document.addEventListener("DOMContentLoaded", function() {
  // --- Tappable Project Cards on Mobile ---
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
      project.addEventListener('click', () => {
          project.classList.toggle('tapped');

          projects.forEach(otherProject => {
              if (otherProject !== project) {
                  otherProject.classList.remove('tapped');
              }
          });
      });
  });

  // --- Fade-in Animation on Scroll ---
  const sections = document.querySelectorAll('.fade-in-section');
  if (window.IntersectionObserver) {
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
  }

  // --- Mobile Navigation Links Close Menu ---
  const navLinks = document.querySelectorAll('#nav-menu li a');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          closeMenu();
      });
  });
});
