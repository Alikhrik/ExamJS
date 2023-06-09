const fs = require("fs");
const Exit = document.getElementById("exit");

Exit.addEventListener('click', FExit);

function FExit() {
    FSave();
    console.log("exit");
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
    fs.writeFileSync("save.txt", MainCounter.toString(), function (error) {

        if (error) throw error;

    });
}
function saveAutoClick() {
    fs.writeFileSync("saveAutoClick.txt", PlusAutoClick.toString(), function (error) {

        if (error) throw error;

    });
}
function saveCostOneClick() {
    fs.writeFileSync("saveCostFirstUp.txt", CostFirstUp.toString(), function (error) {

        if (error) throw error;

    });
}
function saveCatOne() {
    fs.writeFileSync("saveCatOne.txt", BuyCat2.toString(), function (error) {

        if (error) throw error;

    });

} function saveCatTwo() {
    fs.writeFileSync("saveCatTwo.txt", BuyCat3.toString(), function (error) {

        if (error) throw error;

    });
}
function saveOneClick() {
    fs.writeFileSync("saveOneClick.txt", plusOneClick.toString(), function (error) {

        if (error) throw error;

    });
}
function saveCostSecondUp() {
    fs.writeFileSync("saveCostSecondUp.txt", CostSecondUp.toString(), function (error) {

        if (error) throw error;

    });
}