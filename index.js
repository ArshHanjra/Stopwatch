const clock = document.querySelector(".clock");

let mili=0;
let second = 0;
let intervalId;
let minute = 0;
let hour = 0;
const startStopwatch = () => {

    intervalId = setInterval(() => {
        // second++;
        // console.log(second);
        if(mili<100){
            mili++;
        }
        else{
            mili=0;
            second++;
        }
        // if (second < 59) {
        //     second++;
        // }
        if (second >= 59) {
            second = 0;
            minute++;
        }
        if (minute >= 59) {

            minute = 0;
            hour++
        }
        const miliSecond=String(mili).padStart(3,"0");
        const seconds=String(second).padStart(2,"0");
        const minutes=String(minute).padStart(2,"0");
        const hours=String(hour).padStart(2,"0");
        clock.innerText=`${hours}:${minutes}:${seconds}:${miliSecond}`;
    },0);

}


const stopStopwatch = (e) => {
   
    clearInterval(intervalId);

 

}