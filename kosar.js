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


    window.addEventListener('DOMContentLoaded', function() {
        // Retrieve the image URL from sessionStorage
        var imageUrl = sessionStorage.getItem('megrendelkep');
        
        // If there's an image URL stored in sessionStorage, set it to the img tag
        if (imageUrl) {
            document.getElementById('kosarkepecske').src = imageUrl;
        } else {
            // If there's no image URL in sessionStorage, alert or handle the case
            alert('No image found in the cart.');
        }
    });