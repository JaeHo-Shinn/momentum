const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const logoutForm = document.querySelector(".logout");

const USERNAME_KEY = "username";
const HIDDEN = "hidden";

// 값이 단순 string인 변수는 관행상 대문자로만 적어준다

function UsernameSubmit(event) {
  const userName = loginInput.value;

  localStorage.setItem(USERNAME_KEY, userName);

  event.preventDefault();
  loginForm.classList.add(HIDDEN);
  greeting.classList.remove(HIDDEN);
  logoutForm.classList.remove(HIDDEN);
  greeting.innerText = `Hello ${userName}`;
}

// `string #{변수}` = "string"+변수

const savedUserName = localStorage.getItem(USERNAME_KEY);

console.log(savedUserName);

if (savedUserName === null) {
  loginForm.addEventListener("submit", UsernameSubmit);
} else {
  loginForm.classList.add(HIDDEN);
  greeting.classList.remove(HIDDEN);
  logoutForm.classList.remove(HIDDEN);
  greeting.innerText = `Hello ${savedUserName}`;
}

function logoutSubmit() {
  localStorage.removeItem(USERNAME_KEY);
}

logoutForm.addEventListener("submit", logoutSubmit);
