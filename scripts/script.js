var timeHours = parseInt(document.getElementById("countdown-hours").textContent);
var timeDays = parseInt(document.getElementById("countdown-days").textContent);
var timeMinutes = parseInt(document.getElementById("countdown-minutes").textContent);
var timeSeconds = parseInt(document.getElementById("countdown-seconds").textContent);
setInterval(countDown, 1000);

function countDown() {
    if (timeDays >= 0) {
        if (timeHours >= 0) {
            if (timeMinutes >= 0) {
                if( timeSeconds>0)
                {
                    timeSeconds = timeSeconds - 1;
                    if(timeSeconds<10)
                    {
                        document.getElementById("countdown-seconds").textContent = "0"+ timeSeconds;
                    }
                    else
                    {
                        document.getElementById("countdown-seconds").textContent = timeSeconds;
                    }
                
                }
                else
                {
                    timeSeconds = 60;
                    timeMinutes  = timeMinutes-1;
                    document.getElementById("countdown-minutes").textContent = timeMinutes ;
                }
         
            }
        }
    }
}
