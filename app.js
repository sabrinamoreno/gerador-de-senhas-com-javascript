////logica para gerar senha////

function generatePassword(length, hasUpper, hasLower, hasNumbers, hasSymbols) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let chars = "";
  if (hasUpper) chars += upper;
  if (hasLower) chars += lower;
  if (hasNumbers) chars += numbers;
  if (hasSymbols) chars += symbols;

  if (chars.length === 0) return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

document.getElementById("generate").addEventListener("click", () => {
  const length = document.getElementById("length").value;
  const hasUpper = document.getElementById("uppercase").checked;
  const hasLower = document.getElementById("lowercase").checked;
  const hasNumbers = document.getElementById("numbers").checked;
  const hasSymbols = document.getElementById("symbols").checked;

  const password = generatePassword(length, hasUpper, hasLower, hasNumbers, hasSymbols);
  document.getElementById("password").value = password;
});

document.getElementById("copy").addEventListener("click", () => {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Senha copiada!");
});






/////// Efeito background javascript//////

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let butterflies = [];
const numButterflies = 20;


for (let i = 0; i < numButterflies; i++) {
  butterflies.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speedX: Math.random() * 1 - 0.5,
    speedY: Math.random() * 1 - 0.5,
    angle: Math.random() * 2 * Math.PI
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  butterflies.forEach(b => {
    ctx.save();
    ctx.translate(b.x, b.y);
    ctx.rotate(Math.sin(b.angle));
    ctx.fillStyle = "#ac1fe4ff";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.ellipse(0, 0, b.size * 0.5, b.size, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    b.x += b.speedX;
    b.y += b.speedY;
    b.angle += 0.05;

 
    if (b.x < -50) b.x = canvas.width + 50;
    if (b.x > canvas.width + 50) b.x = -50;
    if (b.y < -50) b.y = canvas.height + 50;
    if (b.y > canvas.height + 50) b.y = -50;
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
