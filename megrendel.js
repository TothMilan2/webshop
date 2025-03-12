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

    var ShopItem=button.parentElement
    var ciposzoveg=document.getElementById("text").innerHTML
    var ar=document.getElementsByClassName('elemara')
    var kep=document.getElementById("image")
    console.log(ciposzoveg , ar, kep.src )
    window.location.href = "kosar.html";
    addItemToCart(ciposzoveg,kep)
}

function addItemToCart(ciposzoveg,kep){
    var cartRow=document.createElement('div')
}