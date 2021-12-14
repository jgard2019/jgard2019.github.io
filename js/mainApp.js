const anchorContainerEl = document.querySelector(".anchor-container");

function clearChildrenElements(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
};

//add listeners
const vpLink = document.querySelector(".vPetLink");
vpLink.addEventListener("click", () =>{
    window.location.href = "./virtualPet.html";
    //window.location.replace("");
});

export {clearChildrenElements}