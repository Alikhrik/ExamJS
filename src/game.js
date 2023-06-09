const CatClick = document.getElementById("cat");
const Counter = document.getElementById("counter");
const update1 = document.getElementById("update 1");
const update2 = document.getElementById("update 2");
const costingFirstUpdate = document.getElementById("firstUpdateCosting");
const ForOneClick = document.getElementById("forOneClick");
const forOneSecondClick = document.getElementById("forOneSecondClick");
const SecondUpdateCosting = document.getElementById("secondUpdateCosting");
const NewCatBuy = document.getElementById("NewCatBuy");
const FirstCat = document.getElementById("FirstCat");
const Price2Cat = document.getElementById("Price2Cat");
const Price3Cat = document.getElementById("Price3Cat");
const BuyCat1 = document.getElementById("BuyCat1");

global.MainCounter = 0;
global.plusOneClick = 1;
global.CostFirstUp = 50;
global.CostSecondUp = 500;
global.PlusAutoClick = 0;
global.BuyCat2 = false;
global.BuyCat3 = false;
global.SaveDir = "./save/";

CatClick.addEventListener("click", FCatClick);
function FCatClick() {
    MainCounter = MainCounter + plusOneClick;
    Counter.textContent = MainCounter;
}

update1.addEventListener("click", FOneClickCalculation);
function FOneClickCalculation() {
    if (MainCounter >= CostFirstUp) {
        MainCounter = MainCounter - CostFirstUp;
        Counter.textContent = MainCounter;
        CostFirstUp = CostFirstUp * 2;
        plusOneClick = plusOneClick * 2;
        costingFirstUpdate.textContent = CostFirstUp;
        ForOneClick.textContent = plusOneClick;
        // audioPay.play();
    }
}

update2.addEventListener("click", FSecondClickCalculation);
function EverySecondPlus() {
    MainCounter = MainCounter + PlusAutoClick;
    Counter.textContent = MainCounter;
    console.log("EverySecondPlus: " + PlusAutoClick);
}
setInterval(EverySecondPlus, 1000);

function FSecondClickCalculation() {
    if (MainCounter >= CostSecondUp && CostSecondUp === 150) {
        PlusAutoClick = 1;
        MainCounter = MainCounter - CostSecondUp;
        Counter.textContent = MainCounter;
        CostSecondUp = CostSecondUp * 4;
        SecondUpdateCosting.textContent = CostSecondUp;
        forOneSecondClick.textContent = PlusAutoClick;
        // audioPay.play();
    } else if (MainCounter >= CostSecondUp) {
        MainCounter = MainCounter - CostSecondUp;
        Counter.textContent = MainCounter;
        PlusAutoClick = PlusAutoClick * 2;
        CostSecondUp = CostSecondUp * 4;
        SecondUpdateCosting.textContent = CostSecondUp;
        forOneSecondClick.textContent = PlusAutoClick;
        // audioPay.play();
    }
}

NewCatBuy.addEventListener("click", FBuyCat)
function FBuyCat() {
    debugger
    if (MainCounter >= 50000 && BuyCat2 === false) {
        MainCounter = MainCounter - 50000;
        Counter.textContent = MainCounter;
        BuyCat2 = true
        CatClick.src = '../img/catimg/cat2.gif';
        Price2Cat.textContent = "Bought"
        // audioPay.play();
    } else if (BuyCat2 === true) {
        CatClick.src = '../img/catimg/cat2.gif';
    }
}

BuyCat1.addEventListener("click", FBuyCat1)
function FBuyCat1() {
    debugger
    if (MainCounter >= 100000 && BuyCat3 === false) {
        MainCounter = MainCounter - 100000;
        Counter.textContent = MainCounter;
        BuyCat3 = true
        CatClick.src = '../img/catimg/cat3.gif';
        Price3Cat.textContent = "Bought"
        // audioPay.play();
    } else if (BuyCat3 === true) {
        CatClick.src = '../img/catimg/cat3.gif';
    }
}

FirstCat.addEventListener("click", FFirstCat)
function FFirstCat() {
    CatClick.src = '../img/catimg/black-cat.gif';
}

const fs = require("fs");
fs.readFile(SaveDir + "save.txt", function (error, data) {
    if (!error) {
        MainCounter = Number(data);
    }
});
fs.readFile(SaveDir + "saveCostFirstUp.txt", function (error, data) {
    if (!error) {
        CostFirstUp = Number(data);
    }
    costingFirstUpdate.innerText = CostFirstUp;
});
fs.readFile(SaveDir + "saveOneClick.txt", function (error, data) {
    if (!error) {
        plusOneClick = Number(data);
    }
    ForOneClick.innerText = plusOneClick;
});
fs.readFile(SaveDir + "saveAutoClick.txt", function (error, data) {
    if (!error) {
        PlusAutoClick = Number(data);
    }
    forOneSecondClick.innerText = PlusAutoClick;
});
fs.readFile(SaveDir + "saveCostSecondUp.txt", function (error, data) {
    if (!error) {
        CostSecondUp = Number(data);
    }
    SecondUpdateCosting.innerText = CostSecondUp;
});
fs.readFile(SaveDir + "saveCatOne.txt", function (error, data) {
    if(error) return;
    BuyCat2 = data.toString()
    if (BuyCat2 === true) {
        Price2Cat.innerText = "Bought"
    }
    if (error) {
        BuyCat2 = false;
    }
});
fs.readFile(SaveDir + "saveCatTwo.txt", function (error, data) {
    if(error) return;
    BuyCat3 = data.toString()
    if (BuyCat3 === true) {
        Price3Cat.innerText = "Bought"
    }
    if (error) {
        BuyCat3 = false;
    }
});