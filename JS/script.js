const selectMenu = document.querySelectorAll('select');

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