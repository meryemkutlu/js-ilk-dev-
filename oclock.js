let userName = prompt("Adınızı girin")

let myName = document.querySelector("#myName")
myName.innerHTML = userName


function showTime(){
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    let session = "AM";
    
    
    if(h == 0){
        h = 24;
    }
    
    if(h > 24){
        h = h - 24;
        session = "AM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    const d = new Date();
    let day = weekday[d.getDay()];

    let time = h + ":" + m + ":" + s + " " + day;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();