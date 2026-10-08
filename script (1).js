/* ===== 1. INTRO SEQUENCE ===== */
const intro = document.getElementById('intro');
const bootText = document.getElementById('boot-text');
const logo = document.getElementById('logo');

// Blue particles drawn on a <canvas>
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let dots = [], raf;
function sizeCanvas(){ canvas.width = innerWidth; canvas.height = innerHeight; }
sizeCanvas(); addEventListener('resize', sizeCanvas);
for (let i = 0; i < 60; i++) dots.push({x:Math.random()*innerWidth, y:Math.random()*innerHeight, v:2+Math.random()*5, l:10+Math.random()*30});
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = 'rgba(0,168,255,.5)';
  dots.forEach(d => { // short horizontal "speed lines"
    ctx.beginPath(); ctx.moveTo(d.x,d.y); ctx.lineTo(d.x-d.l,d.y); ctx.stroke();
    d.x += d.v; if (d.x > canvas.width + 40) { d.x = -40; d.y = Math.random()*canvas.height; }
  });
  raf = requestAnimationFrame(animate);
}
animate();

// Timed boot messages (total ~3s)
document.getElementById('bar-fill').style.width = '100%';
setTimeout(() => logo.classList.add('glitch'), 1300);                       // logo flickers
setTimeout(() => bootText.textContent = 'LOADING PROGRAMMER PROFILE...', 1700);
setTimeout(() => intro.classList.add('done'), 3000);                        // wipe away
setTimeout(() => { intro.remove(); cancelAnimationFrame(raf); }, 3700);     // clean up

/* ===== 2. MOBILE MENU ===== */
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

/* ===== 3. FOOTER YEAR ===== */
document.getElementById('year').textContent = new Date().getFullYear();
