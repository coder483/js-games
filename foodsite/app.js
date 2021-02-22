window.addEventListener('scroll',function(){
   const  header= document.querySelector('header');
   header.classList.toggle('sticky',window.scrollY >0);

});
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.navigation');
toggle.addEventListener('click',()=>{
  toggle.classList.toggle('active');
  nav.classList.toggle('active');
  
   
})
function scroll(){
  toggle.addEventListener('click',()=>{
   toggle.classList.toggle('active');
   nav.classList.toggle('active');
 });
}