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

const donutsLink = document.querySelector(".donutMakerLink");
donutsLink.addEventListener("click", () =>{
    window.location.href = "./donutMaker";
});

const spaceInvadersLink = document.querySelector(".spaceInvadersLink");
spaceInvadersLink.addEventListener("click", () =>{
    window.location.href = "./spaceInvaders";
});

const oneShotWizardLink = document.querySelector(".dndCharCreaterLink");
oneShotWizardLink.addEventListener("click", () =>{
    window.location.href = "./oneShotWizard";
});

export { clearChildrenElements };
