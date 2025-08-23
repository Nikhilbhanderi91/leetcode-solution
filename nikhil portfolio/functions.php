<?php
function nikhil_portfolio_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

    // FontAwesome
    wp_enqueue_style('fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

    // Theme Styles
    wp_enqueue_style('portfolio-style', get_template_directory_uri() . '/assets/css/styles.css');

    // JS
    wp_enqueue_script('portfolio-script', get_template_directory_uri() . '/assets/js/script.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'nikhil_portfolio_enqueue_assets');
