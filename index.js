//function to open dialog
function openDialog() {
  document.querySelector("dialog").showModal();
}
document.querySelector(".btn-primary").addEventListener("click", openDialog);
let buttons = document.querySelectorAll(".carousel-indicators button");
//Changing the image symbol on click
buttons[1].addEventListener("click", () => {
  buttons[1].innerHTML = '<img src="assets/1.svg" alt="">';
  buttons[0].innerHTML = '<img src="assets/2.svg" alt="">';
  buttons[2].innerHTML = '<img src="assets/2.svg" alt="">';
});
buttons[0].addEventListener("click", () => {
  buttons[1].innerHTML = '<img src="assets/2.svg" alt="">';
  buttons[0].innerHTML = '<img src="assets/1.svg" alt="">';
  buttons[2].innerHTML = '<img src="assets/2.svg" alt="">';
});
buttons[2].addEventListener("click", () => {
  buttons[1].innerHTML = '<img src="assets/2.svg" alt="">';
  buttons[0].innerHTML = '<img src="assets/2.svg" alt="">';
  buttons[2].innerHTML = '<img src="assets/1.svg" alt="">';
});
//Changing the corousel every 10 seconds
let buttonno = 0;
setInterval(() => {
  if (buttonno == 0) {
    buttonno++;
  } else if (buttonno == 1) {
    buttonno++;
  } else {
    buttonno = 0;
  }
  buttons[buttonno].click();
}, 10000);
//Changing the image based on content click
let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let imgcontainer = document.querySelector(".image-container");
first.addEventListener("click", () => {
  imgcontainer.innerHTML = '<img src="assets/japan.jpg" alt="">';
  first.classList.add("thingsactive");
  second.classList.remove("thingsactive");
  third.classList.remove("thingsactive");
});
second.addEventListener("click", () => {
  imgcontainer.innerHTML = '<img src="assets/image.png" alt="">';
  second.classList.add("thingsactive");
  first.classList.remove("thingsactive");
  third.classList.remove("thingsactive");
});
third.addEventListener("click", () => {
  imgcontainer.innerHTML = '<img src="assets/japan2.jpg" alt="">';
  third.classList.add("thingsactive");
  second.classList.remove("thingsactive");
  first.classList.remove("thingsactive");
});
//Changing the image automatically every 5 seconds
let active = "second";
let interval = setInterval(() => {
  if (active == "second") {
    third.click();
    active = "third";
  } else if (active == "third") {
    first.click();
    active = "first";
  } else {
    second.click();
    active = "second";
  }
}, 5000);
