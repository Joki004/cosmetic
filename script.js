let check = document.body.dataset.nav;
const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
let run = false;
function ExplosiveEffect() {
  let bomb = document.querySelector(".name");

  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    bomb.innerText = bomb.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return bomb.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= bomb.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

window.onload = () => {
  if (!run) {
    ExplosiveEffect();
    run = true;
  }
};
let arrow = "imageArrow";
console.log(arrow);
blink(arrow, 40, 60, 100);
function blink(elementId, minSize, maxSize, duration) {
  const element = document.getElementById(elementId);
  console.log(element);
  const interval = duration / 2;
  let currentSize = minSize;
  let growing = true;

  setInterval(function () {
    if (growing) {
      currentSize += 1;
      if (currentSize >= maxSize) {
        currentSize = maxSize;
        growing = false;
      }
    } else {
      currentSize -= 1;
      if (currentSize <= minSize) {
        currentSize = minSize;
        growing = true;
      }
    }
    element.style.fontSize = currentSize + "px";
    element.style.width = currentSize + "px";
  }, interval);
}

setTimeout(display, 5000);
function display() {
  let myElement = document.getElementsByClassName("click");
  console.log(myElement);
  myElement[0].classList.add("display");
}

const button = document.getElementById("nav-toggle");
const div = document.getElementsByClassName("click");

button.addEventListener("click", function () {
  // Toggle the "my-class" class on the div element
  div.classList.toggle("my-class");
});
