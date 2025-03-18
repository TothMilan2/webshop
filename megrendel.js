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










/*A kosárba rakás*/ 
if(document.readyState=="loading"){
  document.addEventListener('DOMContentLoaded',ready)
}else{
  ready()
}
function ready(){
  var addToCartButton=document.getElementsByClassName('megrendelgomb')
  for(var i =0; i< addToCartButton.length;i++){
      var button=addToCartButton[i]
      button.addEventListener('click', addToCartClicked
      
      )
  }
}
function addToCartClicked(event){
  var button=event.target 
  var ciposzoveg=document.getElementById("text").innerHTML
  var ar=document.getElementsByClassName('elemara')
  var kep=document.getElementById("image").src
  console.log(ciposzoveg , ar, kep.src )
  addItemToCart(ciposzoveg,kep)
}

function addItemToCart(ciposzoveg,kep){
  var cartRow=document.querySelector(".sidecart")

  var cartRowContent= `
                    <div class="cart-item">
                                  <img class="image-cart-item " src="${kep}">
                                  <span class="cart-item-title">${ciposzoveg}</span>
                              </div>
                              
                              
                              <div class="cart-mennyiseg">
                                  <input type="number" value="1">
                              </div>
                              <div><button>Vásárlás</button></div>`
  cartRow.innerHTML=cartRowContent
  var cartItems=document.createElement('div')
  cartRow.append(cartItems)
  
}



 

/*Nincs átfedés a hambimenu és a kosár között*/
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


    /*hambimenu működése*/
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