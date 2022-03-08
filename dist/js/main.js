const next = document.querySelectorAll(".next");
const prev = document.querySelectorAll(".prev");
const slides = document.querySelectorAll(".slide");

let index = 0;

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display();
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display();
}

next.forEach((button) => {
  button.addEventListener("click", nextSlide);
});

prev.forEach((button) => {
  button.addEventListener("click", prevSlide);
});

function display() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}
