const nav = document.getElementById('nav'),
      headerMenu=document.getElementById('header-menu'),
      navClose=document.getElementById('nav-close')

if(headerMenu){
    headerMenu.addEventListener('click', () =>{
        nav.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        nav.classList.remove('show-menu')
    })
}

let swiperMovie = new Swiper('.movie__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 24,
 
    breakpoints:{
       440: {
          slidesPerView: 'auto',
       },
       768: {
          slidesPerView: 4,
       },
       1200: {
          slidesPerView: 5,
       },
    },
 })