import {throttle} from "./helperFns";

var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var brandname = document.getElementById("brandname");
var toToggle = document.querySelectorAll(".toggleColour");

document.addEventListener("scroll", scrollHandler);
var headerSet = false;

function scrollHandler() {
    /*Apply classes for slide in bar*/
    scrollpos = window.scrollY;

    if (!header) {
        return;
    }

    if (scrollpos > 10) {
        if(!headerSet){
            headerSet = true;
            headerChangerThrottled(true);
        }
    } else {
        if(window.innerWidth > 1024 && headerSet){
            headerSet = false;
            headerChangerThrottled(false);
        }
    }
}

var headerChangerThrottled = throttle(headerChanger, 500, {leading: true});

function headerChanger(set) {
    if(set){
        setHeaderMove();
    }else{
        unsetHeaderMove();
    }
}

export function setHeaderMove() {
    headerSet = true;
    header.classList.add("bg-white");
    navaction?.classList.remove("bg-white");
    navaction?.classList.add("gradient");
    navaction?.classList.remove("text-gray-900");
    navaction?.classList.add("text-white");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
        toToggle[i].classList.add("text-gray-900");
        toToggle[i].classList.remove("text-white");
    }
    header.classList.add("shadow");
    navcontent.classList.remove("bg-gray-100");
    navcontent.classList.add("bg-white");
}

export function unsetHeaderMove() {
    headerSet = false;
    header.classList.remove("bg-white");
    navaction?.classList.remove("gradient");
    navaction?.classList.add("bg-white");
    navaction?.classList.remove("text-white");
    navaction?.classList.add("text-gray-900");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
        toToggle[i].classList.add("text-white");
        toToggle[i].classList.remove("text-gray-900");
    }

    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-gray-100");
}
