const nav__logo = document.querySelector('.nav__logo');
const nav__img = document.querySelector('.nav__img');
const hero = document.querySelector('.hero');
const hero__headline = document.querySelector('.hero__headline');
const slider = document.querySelector('.slider');

const tl = new TimelineMax();

tl.fromTo(
    hero,
    1,
    {height: "0%"},
    {height:"80%",
    ease:Power2.easeInOut
}).addLabel("start_tl")
.fromTo(
    hero,
    1.2,
    {width: "100%"},
    {width: "80%",
    ease:Power2.easeInOut    
}).fromTo(
    slider,
    1.3,
    {x:"-100%"},
    {x:"0%",
    ease:Power2.easeInOut},
    "start_tl"
).from(
    [nav__logo,nav__img],
    1,
    {x:10,opacity:0},
    "typography" // implicity addLabel at this timePoint
).fromTo(
    hero__headline,
    1,
    {opacity:0,x:30},
    {opacity:1,x:0},
    "typography"
)

