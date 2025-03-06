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


  document.addEventListener('DOMContentLoaded', function() {
    // Get the add to cart button
    console.log('DOM fully loaded');
    var gomb = document.getElementsByClassName('megrendelgomb')
    console.log('Button:', gomb); // Log to check if the button is found;
    
    if (gomb) {
      gomb.addEventListener('click', function() {
          console.log('Button clicked');
          alert('Button clicked!');
      });
  } else {
      console.error('Add to Cart button not found!');
  }
    // When the button is clicked
    addToCartButton.addEventListener('click', function() {
        // Get the image source URL
        console.log('Button clicked');
        var imageUrl = document.getElementsByClassName('megrendelkep').src;
        
        // Store the image URL in sessionStorage
        sessionStorage.setItem('megrendelkep2', imageUrl);
        
        // Redirect to kosar.html
        window.location.href = 'kosar.html';
    });
});