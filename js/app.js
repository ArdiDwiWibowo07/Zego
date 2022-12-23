const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container-lg ul li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 5) {
      current = section.getAttribute("id");
    console.log(pageYOffset);
    console.log( sectionTop - 5);
    console.log(current); }
  });

  navLi.forEach((a) => {
    
    if (a.classList.contains(current)) {
        a.classList.add("aktif");
    }
  });
};

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
const navLink = document.querySelectorAll('.nav-link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('aktif'));
  this.classList.add('aktif');
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/


const br = ScrollReveal({
    origin: 'bottom',
    duration: 2000,
    distance: '30px',
    reset: true
});



br.reveal(`.home-img`, {
    interval: 500
})

br.reveal(`.home-text`, {
    interval: 250
})


br.reveal(`.portofolio`, {
    interval: 500
})

br.reveal(`.portofolio-item`, {
    interval: 200
})

