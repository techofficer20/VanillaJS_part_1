const form = document.querySelector(".js-form"),
  // form이라는 상수는 html 상에서 클래스가 js-form인 것의 리턴값을 가져옴.
  input = form.querySelector("input"),
  // input이라는 상수는 form 상수 안에 있는 input이라는 태그의 리턴값을 가져옴.
  greeting = document.querySelector(".js-greetings");
// greeting이라는 상수는 html 상에서 클래스가 js-greetings인 것의 리턴값을 가져옴.
const USER_LS = "currentUser",
  // USER_LS라는 상수는 currnetUser로 정의
  SHOWING_CN = "showing";
// SHOWING_CN이라는 상수는 showing으로 정의
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
  event.preventDefault(); // 엔터를 눌렀을 때 텍스트가 자동으로 사라지고 새로고침 되었던 걸 막는다.
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}
function askForName() {
  form.classList.add(SHOWING_CN); // form에서의 클래스에 showing이라는 클래스를 추가 (이름 입력 창 보여짐)
  form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  // form에서의 클래스 중 showing이라는 클래스를 제거 (이름 입력 창 없어짐)
  greeting.classList.add(SHOWING_CN);
  // greeting에서의 클래스에 showing이라는 클래스를 추가 (hello text 보여짐)
  greeting.innerText = `Hello ${text}`;
  // greeting에서의 텍스트를 hello text로 변경
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  // currentUser라는 상수에 로컬 스토리지에서 currentUser를 호출했을 때의 리턴값을 저장.
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
