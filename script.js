
const text = [
    "Learner at Explorin Academy",
    "Aspiring Web Developer",
    "Tech Enthusiast"
  ];
  
  let i = 0, j = 0, currentText = "", isDeleting = false;
  
  function type() {
    if (i < text.length) {
      if (!isDeleting && j <= text[i].length) {
        currentText = text[i].substring(0, j++);
      } else if (isDeleting && j >= 0) {
        currentText = text[i].substring(0, j--);
      }
  
      const typingElement = document.getElementById("typing-text");
      if (typingElement) {
        typingElement.innerText = currentText;
      }
  
      if (j == text[i].length) {
        isDeleting = true;
      }
  
      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
      }
    }
  
    setTimeout(type, isDeleting ? 50 : 100);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    type(); 
  
    const skillsSection = document.querySelector(".skills-section");
    const skillCards = document.querySelectorAll(".skills-part");
  
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        skillCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("visible");
          }, index * 100);
        });
      }
    }, {
      threshold: 0.3
    });
  
    observer.observe(skillsSection);
      const sectionMap = {
      "Skills": "skills-section",
      "Progress": "progress-section",
      "Project": "projects-section",
      "Education": "education-section",
      "Contact Us": "contact-section",
      "Resume": "resume-section",
      "My Portfolio": "para"
    };
  
    document.querySelectorAll('.navitem').forEach(item => {
      item.addEventListener('click', () => {
        const sectionClass = sectionMap[item.textContent.trim()];
        if (sectionClass) {
          const section = document.querySelector(`.${sectionClass}`);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  });
  
  