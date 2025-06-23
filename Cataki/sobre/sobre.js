    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // remove se quiser animação 1x só
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll('.fade-in-up');
  elements.forEach(el => observer.observe(el));

const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('visible');
    } else {
      navbar.classList.remove('visible');
    }
  });