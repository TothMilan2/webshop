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
    var addToCartButton = document.getElementsByClassName('megrendelgomb');
    
    // When the button is clicked
    addToCartButton.addEventListener('click', function() {
        // Get the image source URL
        var imageUrl = document.getElementsByClassName('megrendelkep').src;
        
        // Store the image URL in sessionStorage
        sessionStorage.setItem('megrendelkep', imageUrl);
        
        // Redirect to kosar.html
        window.location.href = 'kosar.html';
    });
});