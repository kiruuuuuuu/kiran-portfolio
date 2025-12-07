/* Main.js */
import './style.css';

// --- Data ---
const projectsData = [
    {
        id: 'resume-builder',
        title: 'AI Resume Builder',
        description: `
            <p class="mb-4">An intelligent resume creation platform powered by AI that helps job seekers build professional resumes with real-time feedback, scoring, and job matching. Built with Django, Celery, Redis, and Google Gemini AI.</p>
            
            <h4 class="text-xl font-bold mb-2">🚀 Features</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>AI-Powered Resume Builder:</strong> Create professional resumes with multiple templates (Classic, Modern, Professional, Creative)</li>
                <li><strong>Real-time AI Feedback:</strong> Get instant scoring and actionable suggestions to improve your resume</li>
                <li><strong>Job Matching:</strong> Intelligent matching between resumes and job postings using AI</li>
                <li><strong>Interview Preparation:</strong> AI-generated interview questions tailored to your resume and job requirements</li>
                <li><strong>Multiple Resume Templates:</strong> Choose from 4 professionally designed templates with customizable color schemes</li>
                <li><strong>PDF Export:</strong> Generate high-quality PDF resumes for download</li>
                <li><strong>User Authentication:</strong> Secure login/registration with optional social authentication (Google, GitHub)</li>
                <li><strong>Job Application Tracking:</strong> Track your applications with detailed status updates</li>
                <li><strong>Employer Dashboard:</strong> Employers can post jobs and manage applications</li>
            </ul>

            <h4 class="text-xl font-bold mb-2">📋 Prerequisites</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li>Python 3.11+</li>
                <li>Redis (for Celery background tasks)</li>
                <li>PostgreSQL (for production) or SQLite (for development)</li>
                <li>Google AI API Key (for Gemini features)</li>
            </ul>

            <h4 class="text-xl font-bold mb-2">Tech Stack</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Backend:</strong> Django 5.2.5, Python 3.11+</li>
                <li><strong>AI/ML:</strong> Google Gemini AI, scikit-learn</li>
                <li><strong>Task Queue:</strong> Celery with Redis</li>
                <li><strong>Database:</strong> PostgreSQL (production) / SQLite (development)</li>
                <li><strong>PDF Generation:</strong> WeasyPrint</li>
                <li><strong>Frontend:</strong> Tailwind CSS, Django Templates</li>
                <li><strong>Authentication:</strong> django-allauth (Google, GitHub OAuth)</li>
            </ul>
        `,
        techStack: ['Django', 'Python', 'Gemini API', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
        images: [
            '/assets/resume%20builder/ai%20resume%20home%20page.png',
            '/assets/resume%20builder/ai%20resume%20login%20page.png',
            '/assets/resume%20builder/ai%20resume%20dashboard%201.png',
            '/assets/resume%20builder/ai%20resume%20dashboard.png',
            '/assets/resume%20builder/ai%20resume.png'
        ],
        links: [
            { label: 'GitHub Code', url: 'https://github.com/kiruuuuuuu/ai-resume-builder', icon: 'fab fa-github' }
        ]
    },
    {
        id: 'qp-generator',
        title: 'Smart Question Paper Generator',
        description: `
            <p class="mb-4">The Smart Question Paper Generator is a web-based solution designed to automate and streamline the examination paper setting process for educational institutions.</p>
            <p class="mb-4">Traditionally, setting question papers is a manual, time-consuming task prone to human errors—specifically regarding mark distribution and question repetition. This application solves that problem by allowing faculty to build a centralized question bank and automatically assemble examination papers that adhere to specific structural guidelines while ensuring mathematical accuracy in mark distribution.</p>
            
            <h4 class="text-xl font-bold mb-2">🚀 Key Features</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Centralized Question Bank:</strong> Teachers can Create, Read, Update, and Delete questions easily with metadata like Subject, Year, Unit, and Marks.</li>
                <li><strong>Intelligent Paper Assembly:</strong> Define paper structure dynamically (e.g., "Part A: 10 questions of 2 marks each") and use logic-based selection.</li>
                <li><strong>Automated Validation:</strong> Real-time validation ensures section-wise marks match the Maximum Marks, preventing invalid papers.</li>
                <li><strong>Professional Output:</strong> Renders validated papers into a standardized, printable PDF format.</li>
            </ul>

            <h4 class="text-xl font-bold mb-2">🛠️ Technical Architecture</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Backend:</strong> Python & Django (MVT architecture)</li>
                <li><strong>Database:</strong> SQLite (Dev) / Scalable to PostgreSQL/MySQL</li>
                <li><strong>Frontend:</strong> HTML5, CSS3, Bootstrap</li>
                <li><strong>Tools:</strong> PDF Generation libraries, Git</li>
            </ul>

            <h4 class="text-xl font-bold mb-2">💡 Challenges & Learnings</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Logic Implementation:</strong> Ensuring Randomization Logic didn't pick duplicate questions while satisfying constraints.</li>
                <li><strong>PDF Rendering:</strong> Precise CSS handling for standard university paper formats.</li>
            </ul>
        `,
        techStack: ['Django', 'Python', 'Bootstrap', 'SQLite/MySQL', 'PDF Generation'],
        images: [
            '/assets/qp%20gen/qphome.png',
            '/assets/qp%20gen/adminlogin.png'
        ],
        links: [
            { label: 'GitHub Code', url: 'https://github.com/kiruuuuuuu/Smart-Question-paper-generator', icon: 'fab fa-github' }
        ]
    }
];

// --- Mobile Menu Toggle ---
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(10, 10, 10, 0.95)';
        navLinks.style.padding = '2rem';
        navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        navLinks.style.zIndex = '999';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// --- Smooth Scrolling for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- Active Link Highlighting on Scroll ---
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});

// --- Scroll Animations (Intersection Observer) ---
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-category, .timeline-item, .contact-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Add animation class styles dynamically
const style = document.createElement('style');
style.innerHTML = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// --- Dynamic Year in Footer ---
document.querySelector('.footer p').innerHTML = `&copy; ${new Date().getFullYear()} Kiran J. All rights reserved.`;

// --- Modal & Carousel Logic ---
const modalOverlay = document.getElementById('project-modal');
const modalCloseBtn = document.querySelector('.modal-close');
const carouselTrack = document.querySelector('.carousel-track');
const carouselDots = document.querySelector('.carousel-dots');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    card.style.cursor = 'pointer';

    card.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') return;
        const projectId = index === 0 ? 'resume-builder' : 'qp-generator';
        openModal(projectId);
    });
});

let currentSlide = 0;
let currentImages = [];

function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-description').innerHTML = project.description;

    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = project.techStack.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('');

    const linksContainer = document.getElementById('modal-links');
    linksContainer.innerHTML = project.links.map(link =>
        `<a href="${link.url}" target="_blank" class="btn btn-primary"><i class="${link.icon}"></i> ${link.label}</a>`
    ).join('');

    currentImages = project.images;
    currentSlide = 0;
    setupCarousel();

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

function setupCarousel() {
    carouselTrack.innerHTML = '';
    carouselDots.innerHTML = '';

    currentImages.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.classList.add('carousel-slide');
        carouselTrack.appendChild(img);

        const dot = document.createElement('div');
        dot.classList.add('dot-btn');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        carouselDots.appendChild(dot);
    });

    updateCarouselPosition();
}

function updateCarouselPosition() {
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    const dots = document.querySelectorAll('.dot-btn');
    dots.forEach((dot, index) => {
        if (index === currentSlide) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateCarouselPosition();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % currentImages.length;
    updateCarouselPosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + currentImages.length) % currentImages.length;
    updateCarouselPosition();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});
