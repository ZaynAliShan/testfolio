const navMenu = document.getElementById("nav-menu"),
      navToogle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*=============== SHOW MENU ===============*/

if(navToogle) {
  navToogle.addEventListener('click',() => {
    navMenu.classList.add("show-menu")
  })
}

/*============== MENU HIDDEN ===============*/

if(navClose) {
  navClose.addEventListener('click',() => {
    navMenu.classList.remove("show-menu")
  })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLinks = document.querySelectorAll(".nav-link")

function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  //when click on menu items show them content
  navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click',linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
  const header =document.getElementById("header")
  //when scroll is g8 than 80vh, add class scroll header to the tag header
  if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener("scroll",scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/

var swiper = new Swiper(".testimonial-wrapper", {
  loop: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },  
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// get all sections that have and id defined
const sections = document.querySelectorAll("section[id]");
// add and event listner for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  //getting current scroll pos
  let scrollY = window.pageYOffset;
  //now loop through sections to get height, top and ID values fo each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute("id");
    
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
    }
    else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
    }
  })
}

// =============




const theme = document.querySelector("#theme-button");
const themeModel = document.querySelector(".customize-theme")
const fontSizes = document.querySelectorAll('.choose-size span')
const colorPalette = document.querySelectorAll(".choose-color span")
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
//open card
const openCard = () => {
  themeModel.style.display = 'grid'
}
//close model
const closeCard = (e) => {
  if(e.target.classList.contains('customize-theme')){
    themeModel.style.display = 'none'
  }
}


theme.addEventListener("click",openCard)
themeModel.addEventListener("click",closeCard)

/*=============== PORTFOLIO ITEM FILTER ===============*/


const filterContainer = document.querySelector(".portfolio-filter-inner"), 
filterBtns = filterContainer.children, 
totalFilterBtns = filterBtns.length,
portfolioItems = document.querySelectorAll(".portfolio-item"),
totalPortfolioItem = portfolioItems.length;

for(let i = 0; i < totalFilterBtns; i++) {
  filterBtns[i].addEventListener("click", function() {
    filterContainer.querySelector(".active").classList.remove("active")
    this.classList.add("active")

    const filterValue = this.getAttribute("data-filter")
    for(let i = 0; i < totalPortfolioItem; i++){
      if(filterValue === portfolioItems[i].getAttribute("data-category")){
        portfolioItems[i].classList.remove("hide")
        portfolioItems[i].classList.add("show");
      }
      else{
        portfolioItems[i].classList.add("hide");
        portfolioItems[i].classList.remove("show");
      }
      if(filterValue === "all") {
        portfolioItems[i].classList.remove("hide")
        portfolioItems[i].classList.add("show");
      }
    }
  })
}




/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/

/*===== FONTS =====*/
//remove active class from spans or font size selector


const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active')
  })
}

fontSizes.forEach(size => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if(size.classList.contains('font-size-1')){
      fontSize = '12px'
    }
    else if(size.classList.contains('font-size-2')){
      fontSize = '14px'
    }
    else if(size.classList.contains('font-size-3')){
      fontSize = '16px'
    }
    else if(size.classList.contains('font-size-4')){
      fontSize = '18px'
    }
    //change font size of root html tag
    document.querySelector('html').style.fontSize = fontSize;


  })
})

/*===== PRIMARY COLORS =====*/
//remoce active class from clrs
const changeActiveColor = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active')
  })
}

colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primaryHue;
    changeActiveColor();
    if(color.classList.contains('color-1')){
      primaryHue = '252'
    } 
    else if(color.classList.contains('color-2')){
      primaryHue = '52'
    }
    else if(color.classList.contains('color-3')){
      primaryHue = '352'
    }
    else if(color.classList.contains('color-4')){
      primaryHue = '152'
    }
    else if(color.classList.contains('color-5')){
      primaryHue = '202'
    }
    color.classList.add("active")
    root.style.setProperty('--primary-color-hue',primaryHue);
  })
})


/*===== THEME BACKGROUNDS =====*/

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change bg clr

const change_background = () => {
  root.style.setProperty('--light-color-lightness',lightColorLightness);
  root.style.setProperty('--white-color-lightness',whiteColorLightness);
  root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click', () => {
  Bg1.classList.add('active');
  //remove it from overs
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  //remove changes from local storage
  window.location.reload();
})


Bg2.addEventListener('click', () => {
  darkColorLightness = '95%',
  whiteColorLightness = '20%',
  lightColorLightness = '15%'

  //add active class
  Bg2.classList.add('active');
  //remove it from overs
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  change_background();
})


Bg3.addEventListener('click', () => {
  darkColorLightness = '95%',
  whiteColorLightness = '10%',
  lightColorLightness = '0%'

  //add active class
  Bg3.classList.add('active');
  //remove it from overs
  Bg2.classList.remove('active');
  Bg1.classList.remove('active');
  change_background();
})