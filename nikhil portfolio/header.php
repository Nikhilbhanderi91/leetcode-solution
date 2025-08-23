<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
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
