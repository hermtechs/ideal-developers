//navingation
const navbars = document.querySelector('.nav-bars');
const smallLinksContainer = document.querySelector('.side-menu-links');

navbars.addEventListener('click',()=>{
   if(navbars.classList.contains('rotate')){
    navbars.classList.remove('rotate')
    smallLinksContainer.classList.add('show-mobile-menu')
   }
   else{
    navbars.classList.add('rotate')
    smallLinksContainer.classList.remove('show-mobile-menu')

   }
})