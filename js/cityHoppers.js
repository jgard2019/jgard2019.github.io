// slide show
const leftButton = document.querySelector(".button-left");
const rightButton = document.querySelector(".button-right");
const cityImagesArr = Array.from(document.querySelectorAll(".city-images"));

leftButton.addEventListener("click", () => {
  decrementPicture();
});

rightButton.addEventListener("click", () => {
  incrementPicture();
});

let currentSelect = 0;
cityImagesArr[0].style.display = "block";

function decrementPicture() {
  cityImagesArr[currentSelect].style.display = "none";

  if (currentSelect == 0) {
    currentSelect = cityImagesArr.length -1;
  } else {
    currentSelect--;
  }
  cityImagesArr[currentSelect].style.display = "block";
}

function incrementPicture() {
  cityImagesArr[currentSelect].style.display = "none";
  if (currentSelect == cityImagesArr.length -1) {
    currentSelect = 0;
  } else {
    currentSelect++;
  }
  cityImagesArr[currentSelect].style.display = "block";
}