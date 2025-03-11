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



   
    
    // Kosár megjelenítése
    function kosarmutat() {
        let KosarCuccok = JSON.parse(sessionStorage.getItem('kosar')) || [];
        let cartContainer = document.querySelector(".box");
        
        if (KosarCuccok.length === 0) {
            cartContainer.innerHTML = "<p>A kosarad üres.</p>";
        } else {
            cartContainer.innerHTML = "<ul>" + KosarCuccok.map(item => `<li>${item}</li>`).join("") + "</ul>";
        }
    }
    
    function kosarbarak(ciponev) {
        // Itt lehet a kosárban tárolt cipőt kezelni, ha szükséges
        console.log("Cipő a kosárba: " + ciponev);
    }

    