const clock = document.querySelector("h2#clock");

//clock.innerText = "lalalsad";

/*function sayHello() {
    console.log("Hello");
}*/

// setInterval(sayHello, 5000); //5초마다 함수 실행.
//setTimeout(sayHello, 5000); //5초 후에 함수를 오직 한번만 실행.

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);