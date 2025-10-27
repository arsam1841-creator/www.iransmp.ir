const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Particle {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = Math.random()*3+1;
    this.speedX = (Math.random()-0.5)*2;
    this.speedY = (Math.random()-0.5)*2;
    this.color = `rgba(255,255,255,${Math.random()*0.8+0.2})`;
    this.life = 0;
    this.maxLife = Math.random()*50+50;
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    this.life++;
    if(this.life>=this.maxLife) this.size -=0.05;
  }
  draw(){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}

function handleParticles(e){
  for(let i=0;i<3;i++){
    particles.push(new Particle(e.x, e.y));
  }
}

window.addEventListener("mousemove", handleParticles);

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i=particles.length-1;i>=0;i--){
    particles[i].update();
    particles[i].draw();
    if(particles[i].size<=0) particles.splice(i,1);
  }
  requestAnimationFrame(animate);
}
animate();
