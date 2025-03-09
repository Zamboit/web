    // Tunggu hingga halaman selesai dimuat
window.addEventListener('load', function () {
    // Dapatkan elemen loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');

    // Tambahkan class 'hide' untuk menyembunyikan overlay setelah 1 detik (opsional)
    setTimeout(function () {
        loadingOverlay.classList.add('hide');
    }, 1000); // Sesuaikan waktu delay jika diperlukan
});
       
    // GSAP Animations
gsap.from('.hero-content', { opacity: 0, x: -50, duration: 1, delay: 0.5 });
gsap.from('.hero-image', { opacity: 0, x: 50, duration: 1, delay: 0.5 });
gsap.from('.about', { opacity: 0, y: 50, duration: 1, scrollTrigger: '.about' });
gsap.from('.objective', { opacity: 0, y: 50, duration: 1, scrollTrigger: '.portfolio' });
gsap.from('.contact', { opacity: 0, y: 50, duration: 1, scrollTrigger: '.contact' });
   
    // Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
       
hamburger.addEventListener('click', () => {
   navLinks.classList.toggle('active');
});

    // GSAP Animations for Achievement
gsap.from('.achievement h2', {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
        trigger: '.achievement',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
    },
});

gsap.from('.achievement-image', {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: '.achievement',
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
    },
});

gsap.from('.achievement-details', {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.achievement',
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
    },
});
       
    // Audio Control
const audio = document.getElementById('background-audio');
const audioToggle = document.getElementById('audio-toggle');
       
audioToggle.addEventListener('click', () => {
   if (audio.paused) {
       audio.play();
       audioToggle.textContent = 'Pause';
   } else {
       audio.pause();
       audioToggle.textContent = 'Play';
   }
});