
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
  }


document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
  }

  window.onscroll = () =>{
    navbar.classList.remove('active');
  };

  let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
};

function cosmectic_price(){
    let price = document.getElementsByClassName("cosmetics");
    Array.from(price).forEach((x) => {
        if (x.style.display === "none") {
          x.style.display = "flex";
        } else {
          x.style.display = "none";
        }
      })
    
      let arrow_up = document.getElementsByClassName("arrow-up");
      Array.from(arrow_up).forEach((x) => {
        console.log(x);
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
          console.log(x);
        })

 let arrow_down = document.getElementsByClassName("arrow-down");

   
       
}


function makeup_price(){
    let price = document.getElementsByClassName("makeup");
    Array.from(price).forEach((x) => {
        if (x.style.display === "none") {
          x.style.display = "flex";
        } else {
          x.style.display = "none";
        }
      })
    
      let arrow_up = document.getElementsByClassName("arrow-up-make-up");
      Array.from(arrow_up).forEach((x) => {
        console.log(x);
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
          console.log(x);
        })

 let arrow_down = document.getElementsByClassName("arrow-down-make-up");

   
       
}

function powder_price(){
    let price = document.getElementsByClassName("powder");
    Array.from(price).forEach((x) => {
        if (x.style.display === "none") {
          x.style.display = "flex";
        } else {
          x.style.display = "none";
        }
      })
    
      let arrow_up = document.getElementsByClassName("arrow-up-powder");
      Array.from(arrow_up).forEach((x) => {
        console.log(x);
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
          console.log(x);
        })

 let arrow_down = document.getElementsByClassName("arrow-down-powder");

   
       
}