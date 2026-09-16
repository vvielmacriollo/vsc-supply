/* ============================================
   VICTORY SHIP — Main JavaScript
   Funciones comunes a todas las páginas
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===== REVEAL ON SCROLL =====
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ===== PARALLAX EN CARDS =====
  document.querySelectorAll('.parallax-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / rect.height) * -6;
      const rotateY = ((x - rect.width / 2) / rect.width) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
  });

  // ===== CONTADORES ANIMADOS =====
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.target;
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.floor(eased * target);
          el.textContent = value.toLocaleString('en-US');
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

  // ===== NAVBAR SCROLL =====
  const navbar = document.querySelector('.nav-ios');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.style.background = 'rgba(10, 10, 12, 0.95)';
      } else {
        navbar.style.background = 'rgba(10, 10, 12, 0.72)';
      }
    });
  }

  // ===== MENÚ MÓVIL =====
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // ===== TRACKER INTERACTIVO (solo en home) =====
  const dots = document.querySelectorAll('.tracker-dot');
  if (dots.length) {
    const infoShip = document.getElementById('info-ship');
    const infoRoute = document.getElementById('info-route');
    const infoCargo = document.getElementById('info-cargo');

    dots.forEach(dot => {
      dot.addEventListener('mouseenter', () => {
        if (infoShip) infoShip.textContent = dot.dataset.ship || '';
        if (infoRoute) infoRoute.textContent = dot.dataset.route || '';
        if (infoCargo) infoCargo.textContent = dot.dataset.cargo || '';
      });
    });

    // Rotación automática
    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % dots.length;
      const d = dots[idx];
      if (infoShip) infoShip.textContent = d.dataset.ship || '';
      if (infoRoute) infoRoute.textContent = d.dataset.route || '';
      if (infoCargo) infoCargo.textContent = d.dataset.cargo || '';
    }, 4000);
  }

  // ===== FORM VALIDATION (contact page) =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = '✓ Mensaje enviado';
      btn.style.background = 'linear-gradient(135deg, #00E5A0 0%, #00C2CB 100%)';
      setTimeout(() => {
        btn.textContent = originalText;
        contactForm.reset();
      }, 2500);
    });
  }

  // ===== SMOOTH SCROLL ANCHORS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});