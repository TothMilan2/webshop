


function openImagePage() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/dcshoe.png";  // Path to the image
    const szoveg = "DC-COURT GRAFFIK UNISEX - Skate shoes";
    const szoveg2 = "20000Ft";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg) }&text2=${encodeURIComponent(szoveg2)}`;

    // Navigate to the new page
    window.location.href = url;
}

function openImagePage2() {
    // The path to the image, and any text you want to pass
    const kep = "kepek/vans-removebg-preview.png";  // Path to the image
    const szoveg = "Vans Old School ";
    const szoveg2 = "20000Ft";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}

function openImagePage3() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/nikesbkek.jpg";  // Path to the image
    const szoveg = "Nike SB Dunk";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}

function openImagePage4() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/newbalance.jpg";  // Path to the image
    const szoveg = "New Balance";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}

function openImagePage5() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/wuwear.jpg";  // Path to the image
    const szoveg = "WU Wear - Wu Tang Clan Póló";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}

function openImagePage6() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/nikevintage.webp";  // Path to the image
    const szoveg = "Nike vintage ";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}

function openImagePage7() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/Barry.jpg";  // Path to the image
    const szoveg = "Barry Sanders #20 Detroit Lions Nike Game NFL Jersey Blue";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}
function openImagePage8() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/duckswebp.webp";  // Path to the image
    const szoveg = "Anaheim Ducks 2024 Fanatics Premium Official NHL AWAY Jersey";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}
function openImagePage9() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/FEKETEwebp.webp";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}
function openImagePage10() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/bezs.jpg";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}
function openImagePage11() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/feherkek.jpg";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}
function openImagePage12() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/raiders.jpg";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}


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