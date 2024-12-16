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