import {DonutClass} from "./DonutClass.js";

//main game HUD
const newDonuts = new DonutClass();
const containerDiv = document.querySelector(".container");

const BakeryDiv = document.createElement("div");
containerDiv.append(BakeryDiv);

const heading = document.createElement("h1");
heading.innerText = "Fred's Donut Bakery";
BakeryDiv.append(heading);

const donutCounter = document.createElement("h2")
donutCounter.innerText = newDonuts.donutCount;
BakeryDiv.append(donutCounter);

const donutButton = document.createElement("button");
donutButton.innerText = "Make Donuts!";
donutButton.setAttribute("id", "makeDonuts");
BakeryDiv.append(donutButton);

const upgradesBought = document.createElement("h3");
upgradesBought.innerText = "Clicker Level: " + newDonuts.clickLevel;
BakeryDiv.append(upgradesBought);

const autoClickersBought = document.createElement("h3");
autoClickersBought.innerText = "AutoClickers Active: " + newDonuts.numOfAutoClickers;
BakeryDiv.append(autoClickersBought);

const multipliersBought = document.createElement("h3");
multipliersBought.innerText = "Multipliers Purchased: " + ((newDonuts.autoMultiplier) -1);
BakeryDiv.append(multipliersBought);

donutButton.addEventListener("click", ()=> {
newDonuts.makeDonuts(1);
updateUi(newDonuts);
});

//information bars

const infoButtons1 = document.querySelector(".infoButton1");
const infoButtons2 = document.querySelector(".infoButton2");
const infoButtons3 = document.querySelector(".infoButton3");
const infoDropDown1 = document.querySelector(".box1");
const infoDropDown2 = document.querySelector(".box2");
const infoDropDown3 = document.querySelector(".box3");

infoButtons1.addEventListener("click", ()=>{
    showHide1();
});

infoButtons2.addEventListener("click", ()=>{
    showHide2();
});

infoButtons3.addEventListener("click", ()=>{
    showHide3();
});

function showHide1() {
    // let infoDisplay = window.getComputedStyle(infoDropDown, null).display;
    //infoDropDown.style.display = infoDisplay;

    console.log("Style is set to:" + infoDropDown1.style.display);
    if(infoDropDown1.style.display === "none") {
        infoDropDown1.style.display = "block";
    } else {
        infoDropDown1.style.display = "none";        
    } 
}

function showHide2() {
    console.log("Style is set to:" + infoDropDown2.style.display);
    if(infoDropDown2.style.display === "none") {
        infoDropDown2.style.display = "block";
    } else {
        infoDropDown2.style.display = "none";        
    }
}

function showHide3() {
    console.log("Style is set to:" + infoDropDown3.style.display);
    if(infoDropDown3.style.display === "none") {
        infoDropDown3.style.display = "block";
    } else {
        infoDropDown3.style.display = "none";        
    }
}



// game controls
const actionBar1 = document.querySelector(".section1");
const section1Div = document.createElement("div");
actionBar1.append(section1Div);

const buyUpgrade1 = document.createElement("button");
buyUpgrade1.innerText="Click Multiplier (" + newDonuts.upgradeClickerPrice + ")";
section1Div.append(buyUpgrade1);

const buyUpgrade2 = document.createElement("button");
buyUpgrade2.innerText="Buy Auto Clicker (" + newDonuts.autoClickerCost1 + ")";
section1Div.append(buyUpgrade2);

const buyUpgrade3 = document.createElement("button");
buyUpgrade3.innerText = "Buy AutoClick Multiplier (" + newDonuts.autoMultiUpgradeCost + ")";
section1Div.append(buyUpgrade3);

    buyUpgrade1.addEventListener("click", ()=>{
        if(newDonuts.donutCount >= newDonuts.upgradeClickerPrice) {
            newDonuts.upgradeClickerLevel();
        } 
        updateUi(newDonuts);
    });

    buyUpgrade2.addEventListener("click", ()=>{
        if(newDonuts.donutCount >= newDonuts.autoClickerCost1) {
            newDonuts.buyAutoClicker();
        }
        updateUi(newDonuts);
        
    });

    buyUpgrade3.addEventListener("click", () =>{
        if(newDonuts.donutCount >= newDonuts.autoMultiUpgradeCost) {
            newDonuts.multiplyAutoClicker();
        }
        updateUi(newDonuts);
    })

//reset switch

    const resetSwitch = document.querySelector(".reset");

    resetSwitch.addEventListener("mouseover", () => {
        resetSwitch.innerText = "Are you sure?";
    });

    resetSwitch.addEventListener("mouseout", () => {
        resetSwitch.innerText = "Reset Game";
    });

    resetSwitch.addEventListener("click", () =>  {
        resetGame();
    });

    function resetGame(){
        newDonuts.donutCount = 0;
        newDonuts.autoClickerCost1 = 100;
        newDonuts.numOfAutoClickers = 0;
        newDonuts.autoInterest =0.2;
        newDonuts.multiClick = 1;
        newDonuts.upgradeClickerPrice = 10;
        newDonuts.clickInterest = 0.2;
        newDonuts.autoMultiUpgradeCost = 250;
        newDonuts.autoMultiplier = 1;
        newDonuts.autoMultiInterest = 0.25;
    }



//user interface updates
    function updateUi(DonutClass){
        donutCounter.innerText = DonutClass.donutCount.toFixed(0);
        buyUpgrade1.innerText = "Click Multiplier (" + newDonuts.upgradeClickerPrice.toFixed(0) + ")";
        buyUpgrade2.innerText="Buy Auto Clicker (" + newDonuts.autoClickerCost1.toFixed(0) + ")";
        buyUpgrade3.innerText="Buy Auto-Multiplier (" + newDonuts.autoMultiUpgradeCost.toFixed(0) + ")";
        upgradesBought.innerText = "Clicker Level: " + newDonuts.multiClick;
        autoClickersBought.innerText = "AutoClickers Active: " + newDonuts.numOfAutoClickers;
        multipliersBought.innerText = "Multipliers Purchased: " + ((newDonuts.autoMultiplier) -1);
    
        if(newDonuts.donutCount >= newDonuts.upgradeClickerPrice) {
            buyUpgrade1.disabled=false;
        } else {
            buyUpgrade1.disabled=true;
        }

        if(newDonuts.donutCount >= newDonuts.autoClickerCost1) {
            buyUpgrade2.disabled=false;
        } else {
            buyUpgrade2.disabled=true;
        }

        if(newDonuts.donutCount >= newDonuts.autoMultiUpgradeCost){
            buyUpgrade3.disabled=false;
        } else {
            buyUpgrade3.disabled=true;
        }
    }

setInterval(autoClicker, 1000);

function autoClicker() {
    newDonuts.autoDonut();
}

setInterval(function(){
    updateUi(newDonuts);
}, 500);