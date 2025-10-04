const sendBtn = document.getElementById("send");
    const result = document.getElementById("result");

    sendBtn.addEventListener("click", async () => {
      const name = document.getElementById("name").value.trim();
      const message = document.getElementById("message").value.trim();
      const participants = document.getElementById("participants").value;

      if(!name || !message || !participants){
        result.textContent = "⚠️ Tous les champs sont requis";
        return;
      }

      const res = await fetch("http://localhost:3000/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, participants })
      });

      const text = await res.text();
      result.textContent = text;
    });

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

        // Configuration initiale - musique active
        let isPlaying = true;
        backgroundMusic.volume = 0.3; // Volume à 30%

        // Lecture automatique avec gestion d'erreur
        document.addEventListener('DOMContentLoaded', function () {
            backgroundMusic.play().then(() => {
                console.log("Musique démarrée automatiquement");
                floatingBtn.innerHTML = '⏸<span class="music-tooltip">Tạm dừng nhạc</span>';
                floatingBtn.style.background = '#a44d4d';
            }).catch(error => {
                console.log("Lecture auto bloquée, nécessite une interaction utilisateur");
                floatingBtn.innerHTML = '▶<span class="music-tooltip">Bật nhạc</span>';
                floatingBtn.style.background = 'var(--primary-color)';
                floatingBtn.style.animation = 'none';
                isPlaying = false;
            });
        });

        // Gestion du clic sur le bouton
        floatingBtn.addEventListener('click', function () {
            if (isPlaying) {
                backgroundMusic.pause();
                floatingBtn.innerHTML = '▶<span class="music-tooltip">Bật nhạc</span>';
                floatingBtn.style.background = 'var(--primary-color)';
                floatingBtn.style.animation = 'none';
            } else {
                backgroundMusic.play().then(() => {
                    floatingBtn.innerHTML = '⏸<span class="music-tooltip">Tạm dừng nhạc</span>';
                    floatingBtn.style.background = '#a44d4d';
                    floatingBtn.style.animation = 'pulse 2s infinite';
                }).catch(error => {
                    console.log("Impossible de démarrer la musique");
                });
            }
            isPlaying = !isPlaying;
        });

        // Réduction automatique du volume après 30 secondes
        setTimeout(() => {
            if (isPlaying) {
                backgroundMusic.volume = 0.2; // Réduit à 20% après 30s
            }
        }, 30000);