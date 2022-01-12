const anchorContainerEl = document.querySelector(".anchor-container");

function clearChildrenElements(element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

const vpLink = document.querySelector(".vPetLink");
vpLink.addEventListener("click", () =>{
    window.location.href = "./virtualPet";
});

const chLink = document.querySelector(".citiesReviewLink");
chLink.addEventListener("click", () =>{
    window.location.href = "./cityHoppers";
});



export { clearChildrenElements };
