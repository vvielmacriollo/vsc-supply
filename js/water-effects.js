/* ============================================
   VICTORY SHIP — Water Ripple Effect
   Efecto de ondas de agua interactivas con Canvas
   ============================================ */

(function() {
  const canvas = document.getElementById('water-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let ripples = [];
  let mouse = { x: -1000, y: -1000, lastX: -1000, lastY: -1000 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  class Ripple {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = 0;
      this.maxRadius = 180 + Math.random() * 120;
      this.opacity = 0.6;
      this.speed = 2.5 + Math.random() * 1.5;
      this.hue = Math.random() > 0.5 ? '0, 194, 203' : '0, 229, 160';
      this.lineWidth = 1.5 + Math.random();
    }

    update() {
      this.radius += this.speed;
      this.opacity -= 0.008;
      this.speed *= 0.99;
      return this.opacity > 0 && this.radius < this.maxRadius;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${this.hue}, ${this.opacity})`;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();

      // Segunda onda interna
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${this.hue}, ${this.opacity * 0.5})`;
      ctx.lineWidth = this.lineWidth * 0.6;
      ctx.stroke();
    }
  }

  function spawnRipple(x, y) {
    if (ripples.length < 40) {
      ripples.push(new Ripple(x, y));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    ripples = ripples.filter(r => {
      const alive = r.update();
      if (alive) r.draw();
      return alive;
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const dx = mouse.x - mouse.lastX;
    const dy = mouse.y - mouse.lastY;
    const speed = Math.sqrt(dx * dx + dy * dy);

    if (speed > 8 && Math.random() > 0.7) {
      spawnRipple(mouse.x, mouse.y);
    }

    mouse.lastX = mouse.x;
    mouse.lastY = mouse.y;
  });

  window.addEventListener('click', (e) => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => spawnRipple(e.clientX, e.clientY), i * 80);
    }
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches[0]) {
      const t = e.touches[0];
      if (Math.random() > 0.75) spawnRipple(t.clientX, t.clientY);
    }
  }, { passive: true });

  resize();
  animate();
})();