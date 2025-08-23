<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head><?php get_header(); ?>

<!-- Hero Section -->
<section id="home" class="hero-section">
    <div class="hero-content">
        <div class="profile-wrapper">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/nikhil.jpg" alt="Nikhil Bhanderi" class="profile-photo">
        </div>
        <div class="hero-title">
            <span id="typed-text"></span>
            <span class="cursor">_</span>
        </div>
        <div class="hero-subtitle">
            3rd_year_software_engineering_student@marwadiuniversity:~$
        </div>
        <div class="hero-card">
            <div class="comment">// About</div>
            <div class="description">
                Passionate software engineering student specializing in full-stack development with expertise in modern web technologies and a keen interest in creating efficient, scalable solutions.
            </div>
            <div class="status">Status: <span class="accent">Doing internships at BizzYatra</span></div>
        </div>
        <div class="hero-buttons">
            <a href="#" class="btn-primary"><i class="fas fa-terminal"></i> ./connect.sh</a>
            <a href="#" class="btn-secondary" download><i class="fas fa-download"></i> ./download_resume.sh</a>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="section">
    <div class="container">
        <div class="section-title">
            <span class="prompt"><?php bloginfo('name'); ?>@portfolio:~$</span> cat about.txt
        </div>
        <div class="about-grid">
            <div class="about-card">
                <div class="comment">// Personal Info</div>
                <div class="info-list">
                    <div>Name: Nikhil Bhanderi</div>
                    <div>Role: Software Engineering Student</div>
                    <div>Year: 3rd Year</div>
                    <div>Location: Rajkot, Gujarat</div>
                    <div>Education: Marwadi University</div>
                </div>
            </div>
            <div class="about-card">
                <div class="comment">// Interests & Expertise</div>
                <div class="info-list">
                    <div>Full-stack Web Development</div>
                    <div>Machine Learning & AI</div>
                    <div>Open Source Contribution</div>
                    <div>Problem Solving & Algorithms</div>
                    <div>UI/UX Design</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Skills Section -->
<section id="skills" class="section alt-bg">
    <div class="container">
        <div class="section-title">
            <span class="prompt"><?php bloginfo('name'); ?>@portfolio:~$</span> ls -la skills/
        </div>
        <div class="skills-grid">
            <div class="skill-category">
                <div class="category-title">./frontend/</div>
                <div class="skills-list" data-category="frontend">
                    <!-- Will be populated by JavaScript -->
                </div>
            </div>
            <div class="skill-category">
                <div class="category-title">./backend/</div>
                <div class="skills-list" data-category="backend">
                    <!-- Will be populated by JavaScript -->
                </div>
            </div>
            <div class="skill-category">
                <div class="category-title">./tools/</div>
                <div class="skills-list" data-category="tools">
                    <!-- Will be populated by JavaScript -->
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Projects Section -->
<section id="projects" class="section">
    <div class="container">
        <div class="section-title">
            <span class="prompt"><?php bloginfo('name'); ?>@portfolio:~$</span> ls projects/
        </div>
        <div class="project-filters">
            <button class="filter-btn active" data-filter="all">./all</button>
            <button class="filter-btn" data-filter="web">./web</button>
            <button class="filter-btn" data-filter="mini">./mini</button>
            <button class="filter-btn" data-filter="academic">./academic</button>
        </div>
        <div class="projects-grid" id="projects-grid">
            <!-- Will be populated by JavaScript -->
        </div>
    </div>
</section>

<!-- Experience Section -->
<section id="experience" class="section alt-bg">
    <div class="container">
        <div class="section-title">
            <span class="prompt"><?php bloginfo('name'); ?>@portfolio:~$</span> cat experience.log
        </div>
        <div class="experience-list" id="experience-list">
            <!-- Will be populated by JavaScript -->
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section">
    <div class="container">
        <div class="section-title">
            <span class="prompt"><?php bloginfo('name'); ?>@portfolio:~$</span> ./contact.sh
        </div>
        <div class="contact-grid">
            <!-- Contact Info -->
            <div class="contact-info">
                <div class="contact-card">
                    <div class="comment">// Contact Info</div>
                    <div class="contact-item">
                        <span class="contact-icon">📧</span>
                        <span>nikhil.bhanderi4465@email.com</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📱</span>
                        <span>+91 98765 43210</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📍</span>
                        <span>Rajkot, Gujarat, India</span>
                    </div>

                    <!-- Social Links -->
                    <div class="social-links">
                        <a href="https://github.com/nikhilbhanderi" target="_blank" class="social-btn" title="GitHub"><i class="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/nikhilbhanderi" target="_blank" class="social-btn" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/nikhilbhanderi" target="_blank" class="social-btn" title="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="https://instagram.com/nikhilbhanderi" target="_blank" class="social-btn" title="Instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form-container">
                <div class="contact-card">
                    <div class="comment">// Send Message</div>
                    <form class="contact-form" id="contact-form">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <textarea placeholder="Your Message" rows="4" required></textarea>
                        <button type="submit" class="btn-primary">
                            <i class="fas fa-paper-plane"></i> ./send_message.sh
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>

    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Terminal Navigation -->
<nav class="terminal-nav">
    <div class="nav-container">
        <div class="nav-brand">
            <span class="terminal-icon">👨‍💻</span>
            <span class="brand-text"><?php bloginfo('name'); ?>@portfolio:~$</span>
        </div>
        <div class="nav-links">
            <a href="#home" class="nav-link active">🏠 ./home</a>
            <a href="#about" class="nav-link">👤 ./about</a>
            <a href="#skills" class="nav-link">💻 ./skills</a>
            <a href="#projects" class="nav-link">📁 ./projects</a>
            <a href="#experience" class="nav-link">📝 ./experience</a>
            <a href="#contact" class="nav-link">💬 ./contact</a>
        </div>
    </div>
</nav>
