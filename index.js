const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

c = canvas.getContext("2d");

// 비행기
class Player {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill(this.blue);
  }
}
// 미사일
class Projectile {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill(this.blue);
  }
  update() {
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}
const x = canvas.width / 2;
const y = canvas.height / 2;
const player = new Player(x, y, 30, "blue");
const projectiles = [];

window.addEventListener("click", (event) => {
  const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2);
  const velocity = {
    x: Math.cos(angle),
    y: Math.sin(angle),
  };
  console.log("cos", Math.cos(angle));
  projectiles.push(new Projectile(x, y, 5, "red", velocity));
});

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
  requestAnimationFrame(animate);
  projectiles.forEach((p) => p.update());
}

console.log(Math.PI);
animate();
