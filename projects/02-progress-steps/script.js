const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    circle.classList.toggle('active', idx < currentActive);
  });

  const actives = document.querySelectorAll('.circle.active');
  const percent = ((actives.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${percent}%`;

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}
