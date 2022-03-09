const dino = document.getElementById("dinozavr");
const cactus = document.getElementById("cactus");
const cactus_2 = document.getElementById('cactus_2');

var x = 0;

document.addEventListener("keydown",function(event){
    jump();
})

function jump(){
    if (dino.classList !=="jump"){
        dino.classList.add("jump")
    }
    setTimeout(function() {
        dino.classList.remove("jump")
    }, 300)

    x++;
    document.getElementById('total').innerHTML = x;
}

let isAlive = setinterval (function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert ("Siz yutqazdingiz... O'yin tugadi")
    }
}, 10)