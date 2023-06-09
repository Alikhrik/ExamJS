const audio = document.getElementById("audioBackground");
const AudioSwitch = document.getElementById("music");

let flag = true;

AudioSwitch.addEventListener("click", FSwitcher);
AudioSwitch.addEventListener('click', FSwitcherDO);

const maxVolume = 0.2;
audio.play();
audio.volume = maxVolume;
audio.loop = true;

function FSwitcher() {
    if (flag === true) {
        flag = false;
        console.log("false")
    } else {
        flag = true;
        console.log("true")
    }
}

function FSwitcherDO() {
    if (flag === true) {
        audio.volume = maxVolume;
        console.log("TRUE");
        AudioSwitch.src = "../img/turnOn.png"
    } else {
        audio.volume = 0;
        console.log("FALSE")
        AudioSwitch.src = "../img/turnOff.png"
    }
}