
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
  }


document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
  }

  window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
  };
