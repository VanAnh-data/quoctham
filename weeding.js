
// Configuration des images de fond pour la section bride-gallery
/*LCA01330.jpeg
- LCA01392.jpeg
- LCA01398.jpeg
- LCA01418.jpeg
- LCA01427.jpeg
- LCA01434.jpeg
- LCA01439.jpeg
- LCA01458.jpeg
- LCA01529.jpeg
- LCA01535.jpeg
- LCA01543.jpeg
- LCA01559.jpeg
- LCA01569.jpeg
- LCA01573.jpeg
- LCA01585.jpeg
- LCA01590.jpeg
- LCA01598.jpeg
- LCA01742 .png
- LCA01748.jpeg
- LCA01933.jpeg
- LCA01975.jpeg
- LCA02033.jpeg
- LCA02080.jpeg
- LCA02089.jpeg
- LCA02171.jpeg
- LCA02186.jpeg
- LCA02252.jpeg
- LCA02253.jpeg
- LCA02302.jpeg*/
const galleryBackgrounds = [
    'image/ANH/LCA01330.jpeg',
    'image/ANH/LCA01392.jpeg',
    'image/ANH/LCA01398.jpeg',
    'image/ANH/LCA01418.jpeg',
    'image/ANH/LCA01427.jpeg',
    'image/ANH/LCA01434.jpeg',
    'image/ANH/LCA01439.jpeg',
    'image/ANH/LCA01458.jpeg',
    'image/ANH/LCA01529.jpeg',
    'image/ANH/LCA01535.jpeg',
    'image/ANH/LCA01543.jpeg',
    'image/ANH/LCA01559.jpeg',
    'image/ANH/LCA01569.jpeg',
    'image/ANH/LCA01573.jpeg',
    'image/ANH/LCA01585.jpeg',
    'image/ANH/LCA01590.jpeg',
    'image/ANH/LCA01598.jpeg',
    'image/ANH/LCA01742.png',
    'image/ANH/LCA01748.jpeg',
    'image/ANH/LCA01933.jpeg',
    'image/ANH/LCA01975.jpeg',
    'image/ANH/LCA02033.jpeg',
    'image/ANH/LCA02080.jpeg',
    'image/ANH/LCA02089.jpeg',
    'image/ANH/LCA02171.jpeg',
    'image/ANH/LCA02186.jpeg',
    'image/ANH/LCA02252.jpeg',
    'image/ANH/LCA02253.jpeg',
    'image/ANH/LCA02302.jpeg'
];

let currentGalleryBackgroundIndex = 0;
const brideGallerySection = document.querySelector('.bride-gallery-section');

// Fonction pour changer le fond de la section bride-gallery
function changeGalleryBackground() {
    currentGalleryBackgroundIndex = (currentGalleryBackgroundIndex + 1) % galleryBackgrounds.length;
    brideGallerySection.style.backgroundImage = `url('${galleryBackgrounds[currentGalleryBackgroundIndex]}')`;
    
    // Ajouter une transition fluide
    brideGallerySection.style.opacity = '0.8';
    setTimeout(() => {
        brideGallerySection.style.opacity = '1';
    }, 500);
}

// Démarrer le changement automatique du fond de la galerie
setInterval(changeGalleryBackground, 5000); // Toutes les 5 secondes

// Votre code existant pour la galerie des mariées (images)
const images = document.querySelectorAll('.bride-gallery img');
let current = 0;

function showNextImage() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
}

// Afficher la première image au démarrage
images[0].classList.add('active');

// Changer toutes les 3 secondes (3000ms)
setInterval(showNextImage, 3000);

// Animation d'apparition au défilement
const fadeElements = document.querySelectorAll('.fade-in');
const sectionElements = document.querySelectorAll('.section-transition');

function checkScroll() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });

    sectionElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Vérifier au chargement et au défilement
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Compte à rebours
document.addEventListener('DOMContentLoaded', function () {
    // Date du mariage - 19 Octobre 2025 à 12:00
    const weddingDate = new Date('October 19, 2025 12:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Calculs du temps
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mise à jour de l'affichage
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        // Si le compte à rebours est terminé
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdownTimer').innerHTML = `
                        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
                            <div style="font-size: 2rem; color: var(--primary-color); font-family: 'Dancing Script', cursive;">
                                Le grand jour est arrivé !
                            </div>
                        </div>
                    `;
        }
    }

    // Mise à jour immédiate
    updateCountdown();

    // Mise à jour toutes les secondes
    const countdownTimer = setInterval(updateCountdown, 1000);

    // Animation des chiffres
    const countdownNumbers = document.querySelectorAll('.countdown-number');
    countdownNumbers.forEach(number => {
        number.addEventListener('DOMSubtreeModified', function () {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Contrôle du bouton musique flottant - ACTIF AU DÉBUT
const floatingBtn = document.getElementById('floatingMusicBtn');
const backgroundMusic = document.getElementById('backgroundMusic');

let isPlaying = false;
backgroundMusic.volume = 0.3; // Volume initial à 30%

// Fonction pour mettre à jour le bouton selon l'état
function updateButton() {
    if (isPlaying) {
        floatingBtn.innerHTML = '⏸<span class="music-tooltip">Tạm dừng nhạc</span>';
        floatingBtn.style.background = '#a44d4d';
        floatingBtn.style.animation = 'pulse 2s infinite';
    } else {
        floatingBtn.innerHTML = '▶<span class="music-tooltip">Bật nhạc</span>';
        floatingBtn.style.background = 'var(--primary-color)';
        floatingBtn.style.animation = 'none';
    }
}

// Fonction de lecture de la musique
function playMusic() {
    backgroundMusic.play().then(() => {
        isPlaying = true;
        updateButton();
        console.log("Musique démarrée !");
    }).catch(err => {
        console.log("Impossible de démarrer la musique :", err);
    });
}

// Tentative de lecture auto au chargement (bloquée sur certains navigateurs)
document.addEventListener('DOMContentLoaded', () => {
    backgroundMusic.play().then(() => {
        isPlaying = true;
        updateButton();
    }).catch(() => {
        console.log("Lecture auto bloquée, en attente d'interaction utilisateur...");
        updateButton();
    });
});

// ➕ Démarrage automatique dès la première interaction (clic, touche ou touch mobile)
['click', 'keydown', 'touchstart'].forEach(eventName => {
    document.addEventListener(eventName, function startMusicOnce() {
        if (!isPlaying) {
            playMusic();
        }
        // Supprime les écouteurs après la première activation
        ['click', 'keydown', 'touchstart'].forEach(e => {
            document.removeEventListener(e, startMusicOnce);
        });
    });
});

// Gestion manuelle via le bouton flottant
floatingBtn.addEventListener('click', function () {
    if (isPlaying) {
        backgroundMusic.pause();
        isPlaying = false;
    } else {
        playMusic();
    }
    updateButton();
});

// Réduction automatique du volume après 30 secondes
setTimeout(() => {
    if (isPlaying) {
        backgroundMusic.volume = 0.2;
    }
}, 30000);
// Réduction automatique du volume après 30 secondes
setTimeout(() => {
    if (isPlaying) {
        backgroundMusic.volume = 0.2; // Réduit à 20% après 30s
    }
}, 30000);



// Bouton pour afficher les QR codes
const showQRBtn = document.getElementById('showQRBtn');
const qrCodesContainer = document.getElementById('qrCodesContainer');

showQRBtn.addEventListener('click', () => {
    qrCodesContainer.style.display = 'flex';  // Montre les QR codes
    showQRBtn.style.display = 'none';          // Cache le bouton après clic
});

