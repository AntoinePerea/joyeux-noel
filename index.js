 /*Navbar shrink */
 
 window.addEventListener("scroll", function() { 
    
    const logo =document.getElementById("logo"); 
    const navbar = document.getElementById("navbar"); 
    
    if (window.scrollY > 50) { 
        
        navbar.classList.add("shrink"); 
        logo.classList.add("shrink-logo"); 

    } 
    else { navbar.classList.remove("shrink"); 
             logo.classList.remove("shrink-logo")
    } });
    


    /*menu toggle */
    
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navitems = document.querySelectorAll(".navitem");



    toggle.addEventListener("click", () => { 
        
        navLinks.classList.toggle("active"); });

   /* navLinks.addEventListener("click", () => { 
        
        navLinks.classList.toggle("active"); }); */


navitems.forEach(item => { 
  
  item.addEventListener('click', () => { 


 navLinks.classList.toggle("active");

  console.log('Clicked:', item);

 }); 
});


document.addEventListener("click", (e) => { 
        

  if (navLinks.classList.contains("active") && !toggle.contains(e.target)) {

        navLinks.classList.toggle("active");} });


/*Carousel*/


const cards = document.querySelectorAll('.contains-card');
const bullets = document.querySelectorAll('.bullet'); 
let index = 0;
 
 function showSlide(i) { 
    
    cards.forEach((c, j) => c.classList.toggle('active', j === i));
    
    bullets.forEach((b, j) => b.classList.toggle('active', j === i)); 
    
    index = i; } 
    
    document.querySelector('.next').onclick = () => { 


        console.log("gotclicked");
        showSlide((index + 1) % cards.length); };
        
        document.querySelector('.prev').onclick = () => { 
            
            showSlide((index - 1 + cards.length) % cards.length);
        
        }; 
        
        bullets.forEach((b, i) => { b.onclick = () => showSlide(i); });


const intervalid = setInterval(() => { showSlide((index + 1) % cards.length); },6000);
const zonecarte= document.querySelector(".services-right")

zonecarte.addEventListener("click", () => { clearInterval(intervalid); console.log("hello")} )


/* SWIPING */

let touchstartX = 0
let touchendX = 0
    
function checkDirection() {

  if (touchendX < touchstartX) showSlide((index + 1) % cards.length); 

  clearInterval(intervalid);
  
  console.log('swiped left')

  if (touchendX > touchstartX) showSlide((index - 1 + cards.length) % cards.length);
  
    clearInterval(intervalid);
    console.log('swiped right!')
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})


/*ACCORDEON*/


 const headers = document.querySelectorAll('.accordion-header'); 

 headers.forEach(header => { header.addEventListener('click', () => { 
    
    const item = header.parentElement; 
    
    const content = item.querySelector('.accordion-content');
    
    const isOpen = content.classList.contains('open'); 

    

 document.querySelectorAll('.accordion-content').forEach(c => { 
    
    c.style.maxHeight = null; c.classList.remove('open'); 
    
    c.previousElementSibling.classList.remove('active'); }); 


    
    if (!isOpen) { content.classList.add('open'); 
        
        header.classList.add('active'); 
        
        content.style.maxHeight = content.scrollHeight + "px"; } }); });


        /* FADE IN */

        const observer = new IntersectionObserver(entries => { 
          
          entries.forEach(entry => { 
            
            if (entry.isIntersecting) { 
              
              entry.target.classList.add('visible');
            
            } }); }); 
            
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));