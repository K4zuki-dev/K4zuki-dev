console.log("Test-before-Load")

const body = document.body

// window.onbeforeunload = function () {
//   window.scroll(0, 0, 0, 0)
// }

body.style.overflowY = "hidden"


// Starting animation:

const animObject = document.getElementById("start")
const animObject1 = document.getElementById("start1")

const h1 = document.getElementById("start-text")
const h2 = document.getElementById("start-text1")
const h3 = document.getElementById("start-text2")

window.onload = function() {
  // setTimeout(show, 500, h1)
  // setTimeout(show, 600, h2) 
  // setTimeout(show, 700, h3) 

  setTimeout(animStart, 1000)
  setTimeout(animStart1, 900)
  setTimeout(removeAnim,   1000)
}

function show(line) {
  line.classList.add("show")
  line.addEventListener("animationend", function() {
    line.style.top = "0em"
  })
}

function animStart() {
  animObject.classList.add("animation-start1")
}

function animStart1() {
  animObject1.classList.add("animation-start1")
}

function removeAnim() {
  animObject1.addEventListener("animationend", function(){
    animObject1.remove()
  })

  animObject.addEventListener("animationend", function(){
    animObject.remove()
  })

  body.style.overflowY = "scroll"
  
  const title = document.getElementById("title")
  title.classList.add("active")
}


let textArray = []
textArray  = document.querySelectorAll(".hide")

textArray.forEach(function(x) {
  x.style.top = "3em"
})

body.onscroll = function() {
  const reveal = document.getElementsByClassName("not-active")
  

  Array.from(reveal).forEach(function(x, index) {
    const top = reveal[index].getBoundingClientRect().top

    if (top + 400 < window.innerHeight) {
      x.classList.add("active")
    }
  });
}


const windowHeight = window.innerHeight
title.style.height = windowHeight + "px"
title.style.fontSize = "3em"


console.log("test-before-THREE");