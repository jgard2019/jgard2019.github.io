// slide show
const leftButton = document.querySelector(".button-left");
const rightButton = document.querySelector(".button-right");
const donutMakerImagesArr = Array.from(
  document.querySelectorAll(".project-images")
);

leftButton.addEventListener("click", () => {
  decrementPicture();
});

rightButton.addEventListener("click", () => {
  incrementPicture();
});

let currentSelect = 0;
donutMakerImagesArr[0].style.display = "block";

function decrementPicture() {
  donutMakerImagesArr[currentSelect].style.display = "none";

  if (currentSelect == 0) {
    currentSelect = donutMakerImagesArr.length - 1;
  } else {
    currentSelect--;
  }
  donutMakerImagesArr[currentSelect].style.display = "block";
}

function incrementPicture() {
  donutMakerImagesArr[currentSelect].style.display = "none";
  if (currentSelect == donutMakerImagesArr.length - 1) {
    currentSelect = 0;
  } else {
    currentSelect++;
  }
  donutMakerImagesArr[currentSelect].style.display = "block";
}
