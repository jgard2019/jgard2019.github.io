const anchorContainerEl = document.querySelector(".anchor-container");

function clearChildrenElements(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
};

//add listeners
const vpLink = document.querySelector(".vPetLink");
vpLink.addEventListener("click", () =>{
    window.location.href = "./virtualPet";
});

const chLink = document.querySelector(".citiesReviewLink");
chLink.addEventListener("click", () =>{
    window.location.href = "./cityHoppers";
});

// slide show
const leftButton = document.querySelector(".button-left");
const rightButton = document.querySelector(".button-right");
const grabCityImages = Array.from(document.querySelectAll(".city-images"));



export {clearChildrenElements}