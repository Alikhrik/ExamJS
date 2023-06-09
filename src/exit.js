const fs = require("fs");
const Exit = document.getElementById("exit");

Exit.addEventListener('click', FExit);

function FExit() {
    FSave();
    window.close();
}

function FSave() {
    saveAutoClick();
    saveCatOne();
    saveCatTwo();
    saveMainCounter();
    saveCostOneClick();
    saveOneClick();
    saveCostSecondUp();
}

function saveMainCounter() {
    fs.appendFileSync(SaveDir + "save.txt", MainCounter.toString(), function (error) {
        if (error) throw error;

    });
}
function saveAutoClick() {
    fs.appendFileSync(SaveDir + "saveAutoClick.txt", PlusAutoClick.toString(), function (error) {
        if (error) throw error;
    });
}
function saveCostOneClick() {
    fs.appendFileSync(SaveDir + "saveCostFirstUp.txt", CostFirstUp.toString(), function (error) {
        if (error) throw error;
    });
}
function saveCatOne() {
    fs.appendFileSync(SaveDir + "saveCatOne.txt", BuyCat2.toString(), function (error) {
        if (error) throw error;
    });

} function saveCatTwo() {
    fs.appendFileSync(SaveDir + "saveCatTwo.txt", BuyCat3.toString(), function (error) {
        if (error) throw error;
    });
}
function saveOneClick() {
    fs.appendFileSync(SaveDir + "saveOneClick.txt", plusOneClick.toString(), function (error) {
        if (error) throw error;
    });
}
function saveCostSecondUp() {
    fs.appendFileSync(SaveDir + "saveCostSecondUp.txt", CostSecondUp.toString(), function (error) {
        if (error) throw error;
    });
}