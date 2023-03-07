// Start header
let allLinks = document.querySelectorAll("ul li a");
let other_links = document.querySelector(".other_links");

allLinks.forEach((link) => {
    link.addEventListener("click", function(e) {
        if (e.target.className === "links") {
            other_links.classList.toggle("active");
        }
    })
})
document.addEventListener("click", function(e) {
    if (e.target !== document.querySelector(".links")) {
        other_links.classList.remove("active")
    }
})
// End header

// Start Services
let counterElement = document.querySelectorAll(".counter h4");
let contNum = 1;

counterElement.forEach((ele) => {
    ele.innerHTML = `0${contNum++}`;
})
// End Services

// Start Video
let videoList = document.querySelectorAll(".list-video ul li");
videoList.forEach((li) => {
    li.addEventListener("click", function(e) {
        videoList.forEach((li) => {
            li.classList.remove("active");
        })
        li.classList.add("active");
    })
})
// End Video

// Start Stats
let statsNumber = document.querySelectorAll(".stats .box .number");
let sectionStats = document.querySelector(".stats");
let started = false;
window.addEventListener("scroll", function() {
        let sec_offsetTop = sectionStats.offsetTop;
        let section_height = sectionStats.offsetHeight;
        let windowHeight = window.innerHeight;
        let winndowScroll = window.scrollY; 

        if (winndowScroll > sec_offsetTop + section_height - windowHeight) {
            if (!started) {
                statsNumber.forEach((num) => {
                    startCount(num);
                })
            }
            started = true;
        }
    })

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
// End Stats

// Start Descount
let descountEle = document.querySelector(".descount .image");
let descount_background = ["./images/discount-background1.jpg", "./images/discount-background2.jpg"];

setInterval(function() {
    let randomNum = Math.trunc(Math.random() * descount_background.length);
    descountEle.style.backgroundImage = `url(${descount_background[randomNum]})`
}, 3000);
// End Dscount