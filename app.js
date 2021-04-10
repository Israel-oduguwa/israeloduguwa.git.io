//Declare all the variables and identities
const toggleButton = document.getElementById("customSwitch1");
const about = document.getElementById("aboutMe");
const body = document.body;
const header = document.getElementById("header");
const navLinks = document.querySelectorAll('.navbar-nav li a')
const social = document.querySelectorAll('.socialIcons li .fab')
const cardTitle = document.querySelectorAll('.whole .card-title');
const navbar = document.querySelector(".navbar");
const pText = document.querySelectorAll(".whole p")
const sun = document.querySelector(".fa-sun")
toggleButton.addEventListener("click",() =>{
  body.classList.toggle("body-light")
  header.classList.toggle("title-light")
  sun.classList.toggle("sun")
  // pText.classList.toggle("p-text-light")
  pText.forEach((text, index) =>{
    text.classList.toggle("p-text-light")
  })
  social.forEach((icons,index) =>{
    icons.classList.toggle("p-text-light")
  })
  navLinks.forEach((links,index) =>{
    links.classList.toggle("p-text-light")
  })
  cardTitle.forEach((title, index) =>{
    title.classList.toggle("cardTitleLight")
  })
  navbar.classList.toggle("lightnav")
})

window.onscroll = function() {myFunction()};

// Get the navbar
// const navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;
const height =90
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > height) {
    navbar.classList.add("sticky")
    // navLinks.forEach((links,index) =>{
    //   links.classList.add("navDark")
    // })
  } else {
    navbar.classList.remove("sticky");
    navLinks.forEach((links,index) =>{
      links.classList.remove("navDark")
    })
  }
}


AOS.init();
new WOW().init();