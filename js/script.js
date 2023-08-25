"use strict"

// Nav Bar
let navBtn = document.querySelectorAll('.nav-btn'),
nav = document.querySelector('.navbar')

for(let i =0; i < navBtn.length; i++){
    navBtn[i].addEventListener('click',()=>{
        nav.classList.toggle('active')
    })
}


// Scroll Down

let scrollDown = document.querySelector('.scroll-down')

scrollDown.addEventListener('click',()=>{
    // let idSection = document.querySelector('')
    let idSection = document.getElementById(scrollDown.getAttribute('data-about'))
    idSection.scrollIntoView({
        behavior: 'smooth'
    })
})