document.addEventListener("DOMContentLoaded", () => {
    // Boot sequence typing effect
    const bootText = [
        "INIT SYSTEM...",
        "LOADING KERNEL...",
        "MOUNTING FILE SYSTEMS...",
        "STARTING NETWORK INTERFACES...",
        "WELCOME TO PORTFOLIO OS v1.0.0"
    ];

    const bootSequenceEl = document.getElementById("boot-sequence");
    let lineIndex = 0;

    function typeLine() {
        if (lineIndex < bootText.length) {
            bootSequenceEl.textContent = `sys@admin:~ $ ` + bootText[lineIndex];
            lineIndex++;
            setTimeout(typeLine, Math.random() * 200 + 100);
        } else {
            bootSequenceEl.textContent += " [OK]";
        }
    }

    setTimeout(typeLine, 500);

    // Glitch effect on header (randomly)
    const headerTitle = document.querySelector('h1.glitch');
    setInterval(() => {
        if (Math.random() > 0.95) {
            headerTitle.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            headerTitle.style.textShadow = `
                ${Math.random() * 10 - 5}px 0 rgba(255, 0, 0, 0.8),
                ${Math.random() * -10 + 5}px 0 rgba(0, 255, 255, 0.8)
            `;
            setTimeout(() => {
                headerTitle.style.transform = 'none';
                headerTitle.style.textShadow = '0 0 10px var(--glow-color), 0 0 20px var(--glow-color)';
            }, 100);
        }
    }, 200);

    // Form submission simulation
    const contactForm = document.getElementById("contact-form");
    if(contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = "> SENDING...";
            btn.style.color = "var(--bg-color)";
            btn.style.backgroundColor = "var(--text-color)";
            
            setTimeout(() => {
                btn.textContent = "> MESSAGE SENT_";
                contactForm.reset();
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.color = "var(--text-color)";
                    btn.style.backgroundColor = "transparent";
                }, 3000);
            }, 1500);
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
