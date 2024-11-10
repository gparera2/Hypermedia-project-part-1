// Navbar
let isNavVisible = false;
const menu = document.getElementById("nav");
function toggleMenu(){
    if(isNavVisible){
        menu.style.display = "none";
        isNavVisible = false;
    } else{
        menu.style.display = "block";
        isNavVisible = true;
    }
}

const links = document.querySelectorAll(".nav a");
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.style.display = "none";
        isNavVisible = false;
    });
});


// Skill bars animation
function createBar(bar) {
    for(let i = 0; i < 50; i++){
        const barElement = document.createElement("div");
        barElement.className = "e";
        bar.appendChild(barElement);
    }
}

const cpp = document.getElementById("cpp");
createBar(cpp);
const java = document.getElementById("java");
createBar(java);
const html = document.getElementById("html");
createBar(html);
const javascript = document.getElementById("javascript");
createBar(javascript);
const photoshop = document.getElementById("photoshop");
createBar(photoshop);
const premiere = document.getElementById("premiere");
createBar(premiere);
const blender = document.getElementById("blender");
createBar(blender);
const hidden = document.getElementById("hidden-bar");
createBar(hidden);

let counts = [0, 0, 0, 0, 0, 0, 0];
let startAnimation = false;

function animateBars(){
    const skills = document.getElementById("skills");
    const skillsTop = skills.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(skillsTop < (windowHeight-200) && !startAnimation){
        startAnimation = true;
        const intervalCpp = setInterval(() => paintBar(cpp, 42, 0, intervalCpp), 50);
        const intervalJava = setInterval(() => paintBar(java, 25, 1, intervalJava), 50);
        const intervalHtml = setInterval(() => paintBar(html, 37, 2, intervalHtml), 50);
        const intervalCss = setInterval(() => paintBar(javascript, 30, 3, intervalCss), 50);
        const intervalPhotoshop = setInterval(() => paintBar(photoshop, 20, 4, intervalPhotoshop), 50);
        const intervalPremiere = setInterval(() => paintBar(premiere, 35, 5, intervalPremiere), 50);
        const intervalBlender = setInterval(() => paintBar(blender, 10, 6, intervalBlender), 50);
    }
}

function paintBar(bar, quant, index, interval){
    let x = counts[index];
    if(x < quant) {
        let elements = bar.getElementsByClassName("e");
        elements[x].style.backgroundColor = "#940253";
        counts[index]++;
    } else {
        clearInterval(interval);
    }
}

window.addEventListener("scroll", animateBars);