let btn = document.querySelector('.texgrad');
let rect = btn.getBoundingClientRect();
btn.addEventListener('mousemove', e => {
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});