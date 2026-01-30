// Cabinet Design Pro - Main Application JavaScript

document.addEventListener('DOMContentLoaded', () => {
    console.log('🪚 Cabinet Design Pro initialized');
    
    // Get Started button functionality
    const getStartedBtn = document.querySelector('.btn-primary');
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            alert('Welcome to Cabinet Design Pro! The design tools are coming soon.');
            console.log('Get Started button clicked');
        });
    }
    
    // Add animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
