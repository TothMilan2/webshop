 // Function to get URL parameters
 function getQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
      image: urlParams.get('image'),
      text: urlParams.get('text'),
      text2: urlParams.get('elemara'),

  };
}

// Load the image and text based on the query parameters
const params = getQueryParams();
const image = params.image;
const text = params.text;
const text2 = params.text2;


if (image) {
  // Set the image source from the query parameter
  document.getElementById('image').src = image;
}
if (text) {
  // Set the image source from the query parameter
  document.getElementById('text').textContent = text;
}
if (text2) {
  // Set the image source from the query parameter
  document.getElementById('elemara').textContent = text;
}


const hambi = document.querySelector('.hambimenu');
const hamburgerMenu = document.querySelector('.hambimenumain');

hambi.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
  });


  




  let gomb = document.getElementsByClassName('megrendelgomb')[0];

gomb.addEventListener('click', () => {
    let cipoKep = document.getElementsByClassName('.megrendelkep');
    let ciponev = cipoKep ? document.getElementById('text').innerText : "Nem található cipő";

    // Kosár cuccok kezeléséhez sessionStorage-t használunk
    let KosarCuccok = JSON.parse(sessionStorage.getItem('kosar')) || [];
    KosarCuccok.push(ciponev);
    sessionStorage.setItem('kosar', JSON.stringify(KosarCuccok));

    // Kosár frissítése
    kosarbarak(ciponev);
    window.location.href = "kosar.html";
});

if (window.location.pathname.includes("kosar.html")) {
    kosarmutat();

    // Kosár ürítés gombja
    document.getElementById("KosarUrit").addEventListener("click", function () {
        sessionStorage.removeItem("kosar");
        kosarmutat();
    });

    // Megrendelés gomb eseménykezelése
    document.getElementById("megrendelButton").addEventListener("click", function () {
        let mennyiseg = document.getElementById("quantity").value;
        if (mennyiseg && mennyiseg > 0) {
            alert(`Megrendelve ${mennyiseg} darab termék!`);
            // További megrendelési logika ide
        } else {
            alert("Kérlek válassz mennyiséget!");
        }
    });
}

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