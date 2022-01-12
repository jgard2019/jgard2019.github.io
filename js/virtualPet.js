// slide show
const leftButton = document.querySelector(".button-left");
const rightButton = document.querySelector(".button-right");
const vpImagesArr = Array.from(document.querySelectorAll(".project-images"));

leftButton.addEventListener("click", () => {
  decrementPicture();
});

rightButton.addEventListener("click", () => {
  incrementPicture();
});

let currentSelect = 0;
vpImagesArr[0].style.display = "block";

function decrementPicture() {
  vpImagesArr[currentSelect].style.display = "none";

  if (currentSelect == 0) {
    currentSelect = vpImagesArr.length -1;
  } else {
    currentSelect--;
  }
  vpImagesArr[currentSelect].style.display = "block";
}

function incrementPicture() {
  vpImagesArr[currentSelect].style.display = "none";
  if (currentSelect == vpImagesArr.length -1) {
    currentSelect = 0;
  } else {
    currentSelect++;
  }
  vpImagesArr[currentSelect].style.display = "block";
}