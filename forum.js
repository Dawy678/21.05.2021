let ustawieniaButton = document.getElementById('ustawieniaButton')
let zmienkolor = document.getElementById('zmienkolor')
let colorff6699 = document.getElementById('colorff6699')
let color0066ff = document.getElementById('color0066ff')
let colorcc3300 = document.getElementById('colorcc3300')
let randomowykolorek = document.getElementById('randomowykolor')
function zmianakoloru() {
    colorff6699.style.opacity = 1
    color0066ff.style.opacity = 1
    colorcc3300.style.opacity = 1
    randomowykolorek.style.opacity = 1
}
let sekcjatytul = document.getElementsByClassName('sekcjatytul') /*BACKGROUND-COLOR*/
let forumbignapis = document.getElementById('forumbignapis') /*TEXT-DECORATION UNDERLINE*/
let ahover = document.getElementsByClassName('ahover','ahover1','ahover2','ahover3') /*COLOR*/
let elements = sekcjatytul
let elements2 = ahover
let forum = document.getElementById('forum')
function zmianakoloruff6699() {
    for(let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#ff6699"
    }
    for(let i = 0; i < elements2.length; i++) {
        elements2[i].classList.remove('ahover1','ahover2','ahover3')
        elements2[i].classList.add('ahover1')
    }
    forumbignapis.style.textDecoration = "underline #ff6699"
    forum.style.color = "#ff6699"
} 
function zmianakoloru0066ff() {
    for(let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#0066ff"
    }
    for(let i = 0; i < elements2.length; i++) {
        elements2[i].classList.remove('ahover1','ahover2','ahover3')
        elements2[i].classList.add('ahover2')
    }
    forumbignapis.style.textDecoration = "underline #0066ff"
    forum.style.color = "#0066ff"
}
function zmianakolorucc3300() {
    for(let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#cc3300"
    }
    for(let i = 0; i < elements2.length; i++) {
        elements2[i].classList.remove('ahover1','ahover2','ahover3')
        elements2[i].classList.add('ahover3')
    }
    forumbignapis.style.textDecoration = "underline #cc3300"
    forum.style.color = "#cc3300"
}