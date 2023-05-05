let searchable = [
  '<a href="https://www.hdfilmcehennemi.life/prayers-for-the-stolen-2/"> Yangın Gecesi</a>',
  '<a href="https://www.hdfilmcehennemi.life/rift/">Rift</a>',
  '<a href="">Yenilmezler</a>',
  '<a href="">Yenilmezler: Ultron Çağı</a>',
  '<a href="">Yenilmezler Son Oyun</a>',
  '<a href="#">Yenilmezler Sonsuzluk Savaşı</a>',
  '<a href="#">Avengers Infinity War</a>',
  '<a href="#">Avatar</a>',
  '<a href="#">Avatar 2</a>',
  '<a href="#">John Wick</a>',
  '<a href="#">John Wick 2</a>',
  '<a href="#">John Wick 3 Parabellum</a>',
  '<a href="#">john wick: chapter 4</a>',
  '<a href="#">Karınca Adam</a>',
  '<a href="#">Ant Man</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
  '<a href="#">Elestr</a>',
];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('show');
  }

  const content = results
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}









const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector(".wrapper");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
};
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};

const dropdownmenu = document.getElementsByClassName("dropdown-menu")[0];
const submenu = document.getElementsByClassName("sub-menu")[0];

dropdownmenu.addEventListener("click", () => {
  submenu.classList.toggle("active");
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
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

const dropdownbloklist = document.getElementsByClassName(
  "drop-down-blok-list"
)[0];
const submenu2 = document.getElementsByClassName("sub-menu-2")[0];

dropdownbloklist.addEventListener("click", () => {
  submenu2.classList.toggle("active");
});

const btn_diva = document.getElementById("btn_diva");
const btn_divb = document.getElementById("btn_divb");
const diva = document.getElementById("diva");
const divb = document.getElementById("divb");

btn_diva.addEventListener("click", () => {
  diva.style.display = "block";
  divb.style.display = "none";
});
btn_divb.addEventListener("click", () => {
  diva.style.display = "none";
  divb.style.display = "block";
});

const filmcatagori = document.getElementById("film-catagori");
const dizicatagori = document.getElementById("dizi-catagori");
const topfilm = document.getElementById("top-film");
const topdizi = document.getElementById("top-dizi");
const filmcatagori2 = document.getElementById("film-catagori2");
const dizicatagori2 = document.getElementById("dizi-catagori2");
const topfilm2 = document.getElementById("top-film2");
const topdizi2 = document.getElementById("top-dizi2");
const loadMore = document.getElementById("loadMore");
const More = document.getElementById("More");

filmcatagori.addEventListener("click", () => {
  filmcatagori.style.cssText += "color:#000000;background-color:#eaad2c";
  dizicatagori.style.cssText += "color:#fff;background-color:#ffffff00";
  topfilm.style.display = "block";
  topdizi.style.display = "none";
});
dizicatagori.addEventListener("click", () => {
  filmcatagori.style.cssText += "color:#fff;background-color:#ffffff00";
  dizicatagori.style.cssText += "color:#000000;background-color:#eaad2c";
  topfilm.style.display = "none";
  topdizi.style.display = "block";
});
filmcatagori2.addEventListener("click", () => {
  filmcatagori2.style.cssText += "color:#000000;background-color:#eaad2c";
  dizicatagori2.style.cssText += "color:#fff;background-color:#ffffff00";
  topfilm2.style.display = "block";
  topdizi2.style.display = "none";
});
dizicatagori2.addEventListener("click", () => {
  filmcatagori2.style.cssText += "color:#fff;background-color:#ffffff00";
  dizicatagori2.style.cssText += "color:#000000;background-color:#eaad2c";
  topfilm2.style.display = "none";
  topdizi2.style.display = "block";
});

const footertoptextcontainer = document.getElementsByClassName(
  "footer-top-text-container"
)[0];
const textbtn = document.getElementsByClassName("text-btn")[0];

textbtn.addEventListener("click", () => {
  footertoptextcontainer.classList.toggle("active");
});

function addOne() {
  const loadMoredisplay = document.getElementById("loadMore-display");
  const inside = loadMoredisplay.innerHTML;
  const number = parseInt(inside);
  const larger = number + 1;
  loadMoredisplay.innerHTML = larger;

  const mydisplay = document.getElementById("my-display");
  const dz = mydisplay.innerHTML;
  const dznumber = parseInt(dz);
  const dzlarger = dznumber + 1;
  mydisplay.innerHTML = dzlarger;
}
