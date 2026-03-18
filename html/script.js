document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation ---
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // --- Lightbox ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const galleryThumbs = document.querySelectorAll('.gallery-thumb');

    let currentIndex = 0;
    const images = Array.from(galleryThumbs).map(thumb => ({
        full: thumb.getAttribute('data-full'),
        caption: thumb.getAttribute('data-caption')
    }));

    function showLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].full;
        lightboxCaption.textContent = images[currentIndex].caption || '';
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeLightboxFn() {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }

    galleryThumbs.forEach((thumb, i) => {
        thumb.addEventListener('click', () => showLightbox(i));
    });

    document.querySelector('.lightbox-close').addEventListener('click', closeLightboxFn);

    document.querySelector('.lightbox-prev').addEventListener('click', (e) => {
        e.stopPropagation();
        showLightbox((currentIndex - 1 + images.length) % images.length);
    });

    document.querySelector('.lightbox-next').addEventListener('click', (e) => {
        e.stopPropagation();
        showLightbox((currentIndex + 1) % images.length);
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display !== 'flex') return;
        if (e.key === 'ArrowLeft') showLightbox((currentIndex - 1 + images.length) % images.length);
        if (e.key === 'ArrowRight') showLightbox((currentIndex + 1) % images.length);
        if (e.key === 'Escape') closeLightboxFn();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightboxFn();
    });

    // --- Booking Reveal ---
    const btnCheck = document.getElementById('btn-check-occupancy');
    const revealArea = document.getElementById('occupancy-reveal');

    btnCheck.addEventListener('click', () => {
        revealArea.style.display = 'block';
        btnCheck.style.display = 'none';
        setTimeout(() => {
            revealArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    });

    // --- Lead Form ---
    const form = document.getElementById('lead-form');
    const formSuccess = document.getElementById('form-success');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                form.style.display = 'none';
                formSuccess.classList.remove('hidden');
            } else {
                alert('Hiba történt a küldés során. Kérjük próbálja újra később.');
            }
        }).catch(() => {
            alert('Hiba történt a küldés során. Kérjük próbálja újra később.');
        });
    });

    // --- Smooth scroll for nav (offset for fixed nav) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
});
