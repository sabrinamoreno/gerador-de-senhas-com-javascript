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
