// Data
const skills = [
  { name: "C++", level: 85, category: "backend" },
  { name: "Java", level: 80, category: "backend" },
  { name: "Python", level: 90, category: "backend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 88, category: "frontend" },
  { name: "React", level: 82, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "PHP/Laravel", level: 70, category: "backend" },
  { name: "SQL/DBMS", level: 85, category: "tools" },
  { name: "Git", level: 90, category: "tools" },
  { name: "DSA", level: 88, category: "tools" },
]

const projects = [
  {
    id: 1,
    title: "e_commerce_platform",
    description: "Full-stack web application with authentication and payment integration",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "task_management_system",
    description: "Collaborative project management tool with real-time updates",
    tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    category: "web",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "weather_prediction_ml",
    description: "Machine learning model for weather forecasting using neural networks",
    tech: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    category: "academic",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "inventory_management",
    description: "Desktop application for small businesses to manage inventory and sales",
    tech: ["Java", "JavaFX", "MySQL", "JasperReports"],
    category: "mini",
    github: "#",
    demo: "#",
  },
]

const experiences = [
  {
    role: "web_development_intern",
    company: "BizzYatra",
    duration: "Jun_2025_-_Aug_2025",
    description: "Developed web applications using Laravel, collaborated with senior developers",
  },
//   {
//     role: "frontend_developer",
//     company: "StartupXYZ",
//     duration: "Dec_2023_-_Feb_2024",
//     description: "Created responsive user interfaces and improved website performance by 40%",
//   },
]

// State
let currentSection = "home"
let activeFilter = "all"

// DOM Elements
const typedTextElement = document.getElementById("typed-text")
const backToTopButton = document.getElementById("back-to-top")
const navLinks = document.querySelectorAll(".nav-link")
const filterButtons = document.querySelectorAll(".filter-btn")
const projectsGrid = document.getElementById("projects-grid")
const experienceList = document.getElementById("experience-list")
const contactForm = document.getElementById("contact-form")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initTypewriter()
  initNavigation()
  initScrollEffects()
  initSkills()
  initProjects()
  initExperience()
  initContactForm()
  initIntersectionObserver()
})

// Typewriter Effect
function initTypewriter() {
  const fullText = "Nikhil Bhaderi"
  let index = 0

  function typeChar() {
    if (index < fullText.length) {
      typedTextElement.textContent = fullText.slice(0, index + 1)
      index++
      setTimeout(typeChar, 150)
    }
  }

  typeChar()
}

// Navigation
function initNavigation() {
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const section = this.dataset.section
      scrollToSection(section)
      updateActiveNav(section)
    })
  })

  // Hero buttons
  document.querySelectorAll("[data-section]").forEach((button) => {
    button.addEventListener("click", function () {
      const section = this.dataset.section
      scrollToSection(section)
      updateActiveNav(section)
    })
  })
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
  currentSection = sectionId
}

function updateActiveNav(section) {
  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.dataset.section === section) {
      link.classList.add("active")
    }
  })
}

// Scroll Effects
function initScrollEffects() {
  window.addEventListener("scroll", () => {
    // Back to top button
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible")
    } else {
      backToTopButton.classList.remove("visible")
    }

    // Update active navigation based on scroll position
    updateNavOnScroll()
  })

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

function updateNavOnScroll() {
  const sections = ["home", "about", "skills", "projects", "experience", "contact"]
  const scrollPosition = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && scrollPosition >= section.offsetTop) {
      if (currentSection !== sections[i]) {
        currentSection = sections[i]
        updateActiveNav(sections[i])
      }
      break
    }
  }
}

// Skills
function initSkills() {
  const categories = ["frontend", "backend", "tools"]

  categories.forEach((category) => {
    const container = document.querySelector(`[data-category="${category}"]`)
    const categorySkills = skills.filter((skill) => skill.category === category)

    categorySkills.forEach((skill) => {
      const skillElement = createSkillElement(skill)
      container.appendChild(skillElement)
    })
  })
}

function createSkillElement(skill) {
  const skillDiv = document.createElement("div")
  skillDiv.className = "skill-item"

  skillDiv.innerHTML = `
        <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-percentage">${skill.level}%</span>
        </div>
        <div class="skill-bar">
            <div class="skill-progress" data-level="${skill.level}"></div>
        </div>
    `

  return skillDiv
}

// Projects
function initProjects() {
  renderProjects()

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      activeFilter = this.dataset.filter
      updateActiveFilter()
      renderProjects()
    })
  })
}

function updateActiveFilter() {
  filterButtons.forEach((button) => {
    button.classList.remove("active")
    if (button.dataset.filter === activeFilter) {
      button.classList.add("active")
    }
  })
}

function renderProjects() {
  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  projectsGrid.innerHTML = ""

  filteredProjects.forEach((project) => {
    const projectElement = createProjectElement(project)
    projectsGrid.appendChild(projectElement)
  })
}

function createProjectElement(project) {
  const projectDiv = document.createElement("div")
  projectDiv.className = "project-card fade-in"

  const techTags = project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")

  projectDiv.innerHTML = `
        <div class="project-title">${project.title}</div>
        <div class="project-description">${project.description}</div>
        <div class="project-tech">${techTags}</div>
        <div class="project-links">
            <a href="${project.github}" class="project-link">
                <span>📱</span>
                <span>code</span>
            </a>
            <a href="${project.demo}" class="project-link">
                <span>🔗</span>
                <span>demo</span>
            </a>
        </div>
    `

  return projectDiv
}

// Experience
function initExperience() {
  experiences.forEach((experience) => {
    const experienceElement = createExperienceElement(experience)
    experienceList.appendChild(experienceElement)
  })
}

function createExperienceElement(experience) {
  const experienceDiv = document.createElement("div")
  experienceDiv.className = "experience-card fade-in"

  experienceDiv.innerHTML = `
        <div class="experience-header">
            <div>
                <div class="experience-role">${experience.role}</div>
                <div class="experience-company">${experience.company}</div>
            </div>
            <div class="experience-duration">${experience.duration}</div>
        </div>
        <div class="experience-description">${experience.description}</div>
    `

  return experienceDiv
}

// Contact Form
function initContactForm() {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const name = this.querySelector('input[type="text"]').value
    const email = this.querySelector('input[type="email"]').value
    const message = this.querySelector("textarea").value

    // Simulate form submission
    alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`)

    // Reset form
    this.reset()
  })
}

// Intersection Observer for animations
function initIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")

        // Animate skill bars
        if (entry.target.classList.contains("skill-item")) {
          const progressBar = entry.target.querySelector(".skill-progress")
          const level = progressBar.dataset.level
          setTimeout(() => {
            progressBar.style.width = level + "%"
          }, 200)
        }
      }
    })
  }, observerOptions)

  // Observe elements
  document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .skill-item").forEach((el) => {
    observer.observe(el)
  })
}

// Smooth scrolling for all internal links
document.addEventListener("click", (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault()
    const targetId = e.target.getAttribute("href").substring(1)
    scrollToSection(targetId)
  }
})

// Add some interactive effects
document.addEventListener("mousemove", (e) => {
  // Subtle cursor trail effect (optional)
  const cursor = document.querySelector(".cursor")
  if (cursor) {
    const mouseX = e.clientX
    const mouseY = e.clientY

    // Add subtle glow effect near cursor (optional enhancement)
  }
})

// Console easter egg
console.log(
  `
%c
 ╔══════════════════════════════════════╗
 ║          Welcome to my portfolio!     ║
 ║                                      ║
 ║  Built with vanilla HTML, CSS & JS   ║
 ║  Terminal aesthetic by Alex Johnson  ║
 ║                                      ║
 ║  Type: help() for available commands ║
 ╚══════════════════════════════════════╝
`,
  "color: #00ffff; font-family: monospace;",
)

// Console commands
window.help = () => {
  console.log(
    `
%cAvailable commands:
- about()     : Show personal info
- skills()    : List technical skills  
- projects()  : Display project portfolio
- contact()   : Get contact information
- resume()    : Download resume link
- clear()     : Clear console
`,
    "color: #00ffff; font-family: monospace;",
  )
}

window.about = () => {
  console.log(
    `
%cAlex Johnson - Software Engineering Student
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 3rd Year Student
🎯 CGPA: 8.7/10.0  
💻 Full-stack Developer
🚀 Available for internships
`,
    "color: #00ffff; font-family: monospace;",
  )
}

window.skills = () => {
  console.log(
    `
%cTechnical Skills:
━━━━━━━━━━━━━━━━
Frontend: HTML/CSS (95%), JavaScript (88%), React (82%)
Backend:  Python (90%), C++ (85%), Java (80%), Node.js (75%)
Tools:    Git (90%), DSA (88%), SQL/DBMS (85%)
`,
    "color: #00ffff; font-family: monospace;",
  )
}

window.projects = () => {
  console.log(
    `
%cFeatured Projects:
━━━━━━━━━━━━━━━━━━
1. E-commerce Platform (React, Node.js, MongoDB)
2. Task Management System (Vue.js, Express, Socket.io)  
3. Weather Prediction ML (Python, TensorFlow)
4. Inventory Management (Java, JavaFX, MySQL)
`,
    "color: #00ffff; font-family: monospace;",
  )
}

window.contact = () => {
  console.log(
    `
%cContact Information:
━━━━━━━━━━━━━━━━━━━━
📧 alex.johnson@email.com
💼 LinkedIn: /in/alexjohnson
🐱 GitHub: /alexjohnson
🐦 Twitter: @alexjohnson_dev
`,
    "color: #00ffff; font-family: monospace;",
  )
}

window.resume = () => {
  console.log(
    `
%c📄 Resume download initiated...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Link: https://example.com/alex-johnson-resume.pdf
`,
    "color: #00ffff; font-family: monospace;",
  )
}
