const currentTime = document.querySelector("h1");
const selectMenu = document.querySelectorAll('select'),
alarmBtn = document.querySelector("button");

console.log(selectMenu);  

for (i = 12; i > 0;i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}

for (i = 59; i > 0 ; i--) {
    i = i < 10 ? "0" + i : i;
    let option =  `<option value=${i}>${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)
}

for (i = 2; i > 0 ; i--) {
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
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`

}, 1000);

function alarm(){
    
};

alarmBtn.addEventListener("click", alarm);