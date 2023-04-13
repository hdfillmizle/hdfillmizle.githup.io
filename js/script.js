const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
}
searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}


const dropdownmenu = document.getElementsByClassName('dropdown-menu')[0]
const submenu = document.getElementsByClassName('sub-menu')[0]

dropdownmenu.addEventListener('click', () => {
    submenu.classList.toggle('active');
});

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 300) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(blue ${scrollValue}%, #424242 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


const dropdownbloklist = document.getElementsByClassName('drop-down-blok-list')[0]
const submenu2 = document.getElementsByClassName('sub-menu-2')[0]

dropdownbloklist.addEventListener('click', () => {
    submenu2.classList.toggle('active');
});

const btn_diva = document.getElementById("btn_diva");
const btn_divb = document.getElementById("btn_divb");
const diva = document.getElementById("diva");
const divb = document.getElementById("divb");

btn_diva.addEventListener('click', ()=>{
    diva.style.display='block';
    divb.style.display='none';
});
btn_divb.addEventListener('click', ()=>{
    diva.style.display='none';
    divb.style.display='block';
});

const filmcatagori = document.getElementById("film-catagori");
const dizicatagori = document.getElementById("dizi-catagori");
const topfilm = document.getElementById("top-film");
const topdizi = document.getElementById("top-dizi");
const loadMore = document.getElementById("loadMore");
const More = document.getElementById("More");

filmcatagori.addEventListener('click', ()=>{
    filmcatagori.style.cssText += 'color:#000000;background-color:#eaad2c';
    dizicatagori.style.cssText += 'color:#fff;background-color:#ffffff00';
    topfilm.style.display='block';
    topdizi.style.display='none';
});
dizicatagori.addEventListener('click', ()=>{
    filmcatagori.style.cssText += 'color:#fff;background-color:#ffffff00';
    dizicatagori.style.cssText += 'color:#000000;background-color:#eaad2c';
    topfilm.style.display='none';
    topdizi.style.display='block';
});

