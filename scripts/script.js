var timeHours = parseInt(document.getElementById("countdown-hours").textContent);
var timeDays = parseInt(document.getElementById("countdown-days").textContent);
var timeMinutes = parseInt(document.getElementById("countdown-minutes").textContent);
var timeSeconds = parseInt(document.getElementById("countdown-seconds").textContent);
var mobileIcon = document.getElementById("mobile__icon");
var menuMobile = document.getElementById("menu__mobile");
var menuHidden = document.getElementById("menu--hidden");
var sectionTitle  = document.getElementsByClassName("section__title");
var sectionSubTitle  = document.getElementsByClassName("section__subtitle");
var btn =  document.getElementsByClassName("btn");
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
window.onload = () =>
{
    for (let i = 0 ; i < sectionTitle.length ; i++)
    {
     
        sectionTitle[i].classList.add("wow");
        sectionTitle[i].classList.add("animate__animated");
        sectionTitle[i].classList.add("animate__fadeInUp");
        sectionTitle[i].classList.add("animate__slow");

    }
    for (let i = 0 ; i < sectionSubTitle.length ; i++)
    {
     
        sectionSubTitle[i].classList.add("wow");
        sectionSubTitle[i].classList.add("animate__animated");
        sectionSubTitle[i].classList.add("animate__fadeInLeft");
        sectionSubTitle[i].classList.add("animate__slow");

    }
    for (let i = 0 ; i < btn.length ; i++)
    {
     
       btn[i].classList.add("wow");
       btn[i].classList.add("animate__animated");
       btn[i].classList.add("animate__fadeInUp");
       btn[i].classList.add("animate__slow");

    }
}
function openMenuMobile()
{
    menuMobile.classList.add("menu__mobile--active");

}

function hiddenMenuMobile()
{
    menuMobile.classList.remove("menu__mobile--active");

}
menuHidden.addEventListener('click',hiddenMenuMobile);
mobileIcon.addEventListener('click',openMenuMobile);

document.addEventListener('scroll',stuckMenu);
function stuckMenu()
{
    var navBar =  document.getElementsByClassName("navbar");
    if(window.scrollY >  280)
    {
      navBar[0].classList.add("fixed");
    }
    else
    {
        navBar[0].classList.remove("fixed");
    }
}



