const hambi = document.querySelector('.hambimenu');
const hamburgerMenu = document.querySelector('.hambimenumain');





 



    document.addEventListener("DOMContentLoaded", function () {
        const cartIcon = document.querySelector(".navkep");
        const sideCart = document.querySelector(".sidecart");

 
        
        if (cartIcon) {
            cartIcon.addEventListener("click", function () {
                console.log("Cart icon clicked!");
                if (sideCart) {
                    sideCart.classList.toggle('active');
   
                    
                    
                }
                else{
                    console.error("Nincs meg a sideCART")
                }
                
            });
        } else {
            console.error("Nem található a .carticon elem!");
        }
    });
    const sideCart = document.querySelector(".sidecart");

    document.addEventListener("DOMContentLoaded", function () {
        const cartIcon2 = document.querySelector(".navkep2");
        
 
        
        if (cartIcon2) {
            cartIcon2.addEventListener("click", function () {
                console.log("Cart icon clicked!");
                if (sideCart) {
                    sideCart.classList.toggle('active');
                    hamburgerMenu.classList.remove("active");
                    hambi.classList.remove('active')
                    
                    
                }
                else{
                    console.error("Nincs meg a sideCART")
                }
                
            });
        } else {
            console.error("Nem található a .carticon elem!");
        }
    });


    
    hambi.addEventListener('click', () => {
        if(!sideCart.classList.contains("active")){
            hamburgerMenu.classList.toggle('active');
            hambi.classList.toggle('active')
        }
        else{
            hamburgerMenu.classList.toggle('active');
            hambi.classList.toggle('active')
            sideCart.classList.remove("active")
        }
        
    
       
        })

        hambi.addEventListener("click", function(event) {
            // Check if click was outside the menu or hamburger
            if (!hamburgerMenu.contains(event.target) && event.target !== hambi) {
                hamburgerMenu.classList.remove("active");
                hambi.classList.remove('active')
                
            }});