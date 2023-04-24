let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let section=document.querySelectorAll("section");
let navLinks = document.querySelectorAll("a.nav-link");

window.onscroll = () =>{

  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150; 
    let height = sec.offsetHeight;
    let id= sec.getAttribute("id");

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove("active");
        document.querySelector("header ul a[href*= "+ id +"]").classList.add("active")
      });
    } ;

  });
};

/*

for (let links = 0; links <  navLinks.length ; links++) {
  navLinks[links].addEventListener('click',function () {
      for (let out = 0; out < navLinks.length; out++) {
         navLinks[out].classList.remove("active");;
        
      }
      this.classList.add("active");
  });
  
}

/*window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

  document.querySelectorAll('.nav-link').forEach(link => {
if (link.href ===  )) {
  link.classList.add('active');
}

});  
          */                          