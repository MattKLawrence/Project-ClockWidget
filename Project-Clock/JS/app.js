let clockSec = document.querySelector('.sec-m')
let clockMin = document.querySelector('.min-m')
let clockHour = document.querySelector('.hour-m')

function setDate(){
    let s = moment().format('s');
    let sd = ((s/60)*360)+90;
    clockSec.style.transform = "rotate(" + sd + "deg)";

    let m = moment().format('m');
    let md = ((m/60)*360)+((s/60)*6)+90;
    clockMin.style.transform = "rotate(" + md + "deg)";

    let h = moment().format('H');
    let hd = ((h/12)*360)+((m/60)*30)+90;
    clockHour.style.transform = "rotate(" + hd + "deg)";
}

setInterval(setDate,1000);