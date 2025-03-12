const hambi = document.querySelector('.hambimenu');
const hamburgerMenu = document.querySelector('.hambimenumain');


hambi.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    hambi.classList.toggle('active')

   
    })


hambi.addEventListener("click", function(event) {
    // Check if click was outside the menu or hamburger
    if (!hamburgerMenu.contains(event.target) && event.target !== hambi) {
        hamburgerMenu.classList.remove("active");
        hambi.classList.remove('active')
        
    }});



   
    
  