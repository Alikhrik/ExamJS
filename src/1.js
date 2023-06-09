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
global.CostFirstUp = 100;
global.CostSecondUp = 500;
global.PlusAutoClick = 0;
global.BuyCat2 = false;
global.BuyCat3 = false;

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
fs.readFile("save.txt", function (error, data) {
    MainCounter = Number(data)
    if (error) {
        MainCounter = 1;
    }
});
fs.readFile("saveCostFirstUp.txt", function (error, data) {
    CostFirstUp = Number(data)
    if (error) {
        CostFirstUp = 100;
    }
    costingFirstUpdate.textContent = CostFirstUp;
});
fs.readFile("saveOneClick.txt", function (error, data) {
    plusOneClick = Number(data)
    if (error) {
        plusOneClick = 1;
    }
    ForOneClick.textContent = plusOneClick;
});
fs.readFile("saveAutoClick.txt", function (error, data) {
    PlusAutoClick = Number(data)
    if (error) {
        PlusAutoClick = 0;
    }
    forOneSecondClick.textContent = PlusAutoClick;
});
fs.readFile("saveCostSecondUp.txt", function (error, data) {
    CostSecondUp = Number(data)
    if (error) {
        CostSecondUp = 500;
    }
    SecondUpdateCosting.textContent = CostSecondUp;
});
fs.readFile("saveCatOne.txt", function (error, data) {
    BuyCat2 = data.toString()
    if (BuyCat2 === true) {
        Price2Cat.textContent = "Bought"
    }
    if (error) {
        BuyCat2 = false;
    }
});
fs.readFile("saveCatTwo.txt", function (error, data) {
    BuyCat3 = data.toString()
    if (BuyCat3 === true) {
        Price3Cat.textContent = "Bought"
    }
    if (error) {
        BuyCat3 = false;
    }
});