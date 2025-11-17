// =====================
// Scroll Reveal Animation
// =====================

document.addEventListener('DOMContentLoaded', () => {
    // Configuration de l'Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // L'élément doit être visible à 15% pour déclencher l'animation
    };

    // Callback pour l'observation
    const observerCallback = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Ajouter un délai progressif pour chaque élément
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100); // Délai de 100ms entre chaque élément

                // Optionnel : arrêter d'observer l'élément une fois révélé
                observer.unobserve(entry.target);
            }
        });
    };

    // Créer l'observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observer tous les éléments avec la classe .scroll-reveal
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(element => {
        observer.observe(element);
    });
});

// =====================
// Smooth Scroll for CTA
// =====================

document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('a[href^="#"]');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// =====================
// Form Validation Enhancement
// =====================

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');

    if (form) {
        const inputs = form.querySelectorAll('input');

        // Ajouter une classe pour les champs valides/invalides
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value.trim() !== '') {
                    input.classList.add('filled');
                } else {
                    input.classList.remove('filled');
                }
            });
        });

        // Message de confirmation personnalisé
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Récupérer les valeurs du formulaire
            const prenom = form.querySelector('#prenom').value;

            // Afficher un message personnalisé
            alert(`Merci ${prenom} pour votre intérêt ! 🎉\n\nCeci est une maquette non-fonctionnelle.\nDans la version réelle, nous vous contacterons rapidement pour organiser votre premier appel découverte gratuit avec TELLORE.`);
        });
    }
});

// =====================
// Accessibility: Skip to Content
// =====================

document.addEventListener('DOMContentLoaded', () => {
    // Ajouter un bouton "Skip to content" pour l'accessibilité
    const skipButton = document.createElement('a');
    skipButton.href = '#benefices';
    skipButton.className = 'skip-to-content';
    skipButton.textContent = 'Aller au contenu principal';
    skipButton.style.cssText = `
        position: absolute;
        top: -100px;
        left: 0;
        background: var(--color-accent);
        color: white;
        padding: 1rem 2rem;
        z-index: 100;
        text-decoration: none;
        font-weight: bold;
    `;

    skipButton.addEventListener('focus', () => {
        skipButton.style.top = '0';
    });

    skipButton.addEventListener('blur', () => {
        skipButton.style.top = '-100px';
    });

    document.body.insertBefore(skipButton, document.body.firstChild);
});

// =====================
// Console Info
// =====================

console.log('%c🎉 TELLORE Landing Page', 'color: #4A90E2; font-size: 24px; font-weight: bold;');
console.log('%cVos conversations qui font du bien', 'color: #FF8C69; font-size: 16px;');
console.log('%cMaquette développée avec amour et accessibilité ❤️', 'color: #2D3748; font-size: 14px;');
