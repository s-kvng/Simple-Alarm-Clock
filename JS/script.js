const currentTime = document.querySelector("h1");
const selectMenu = document.querySelectorAll('select'),
alarmBtn = document.querySelector("button"),
content = document.querySelector(".content");

//console.log(selectMenu);
let ringtone = new Audio("../views/KiDi - One Man ft Adina Mp3 Download » TrendyBeatz.mp3")  

let alarmTime, isAlarmSet = false;

for (i = 12; i > 0;i--) { //setting the values for hour
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}

for (i = 59; i > 0 ; i--) {// setting the values for mintues
    i = i < 10 ? "0" + i : i;
    let option =  `<option value=${i}>${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)
}

for (i = 2; i > 0 ; i--) {// setting the values for AM/PM
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value=${ampm}>${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    //getting the current time 
    let date = new Date()
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    ampm = "AM";

    //
    if (h >= 12) {
        h = h - 12;
        ampm = "PM"
    }

    //
    h = h == 0 ? h = 12 : h;


    //adding 0 to hr , mins , sec, if its value is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    //Getting the time to display on the browser
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime == `${h}:${m} ${ampm}` ){
        console.log("Alarm ringing....")
        ringtone.play();
        ringtone.loop = true;

    }

}, 1000);

function alarm(){// this function fires when the button is clicked
    
    if(isAlarmSet){
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        alarmBtn.innerText = "Set Alarm";
        
        return isAlarmSet = false;
    }


    //
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    console.log(time);

    if(time.includes("Hour") || time.includes("Mintues") || time.includes("AM/PM")){
        return alert("Please set the right time");
    }
    isAlarmSet = true;
    alarmTime = time;
    content.classList.add("disable");
    alarmBtn.innerText = "Clear Alarm";
    
};

alarmBtn.addEventListener("click", alarm);