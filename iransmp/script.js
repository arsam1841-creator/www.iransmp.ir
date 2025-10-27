const ip = 'iransmp.linkpc.net';
const toast = document.getElementById('toast');
const copyButtons = [document.getElementById('copyIpBtn'), document.getElementById('copyIpBtn2'), document.getElementById('copyIpBtn3'), document.getElementById('joinTop')].filter(Boolean);

function showToast(text='آی‌پی کپی شد!') {
  toast.textContent = text;
  toast.style.opacity = '1';
  setTimeout(()=>{ toast.style.opacity = '0'; }, 2200);
}

function copyIp() {
  if(navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(ip).then(()=> showToast());
  } else {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = ip; document.body.appendChild(ta); ta.select();
    try{ document.execCommand('copy'); showToast(); }catch(e){ alert('کپی دستی: ' + ip); }
    ta.remove();
  }
}

copyButtons.forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    copyIp();
  });
});

// نمونه: نمایش تعداد پلیر (برای اینکه سرور واقعی رو صدا نزنه، اینجا نمونه ثابت/تصادفی)
const playersCountEl = document.getElementById('playersCount');
function updatePlayersDemo(){
  if(!playersCountEl) return;
  const n = Math.floor(Math.random()*80) + 1;
  playersCountEl.textContent = n + ' بازیکن';
  document.getElementById('serverStatus').textContent = 'آنلاین (نمونه)';
}
updatePlayersDemo();
setInterval(updatePlayersDemo, 8000);

// منو برای موبایل
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');
if(burger && nav){
  burger.addEventListener('click', ()=> {
    if(nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.background = 'rgba(0,0,0,0.4)';
    nav.style.position = 'absolute';
    nav.style.right = '16px';
    nav.style.top = '70px';
    nav.style.padding = '10px';
    nav.style.borderRadius = '8px';
  });
}