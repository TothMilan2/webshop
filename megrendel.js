 // Function to get URL parameters
 function getQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
      image: urlParams.get('image'),
      text: urlParams.get('text'),

  };
}

// Load the image and text based on the query parameters
const params = getQueryParams();
const image = params.image;
const text = params.text;


if (image) {
  // Set the image source from the query parameter
  document.getElementById('image').src = image;
}
if (text) {
  // Set the image source from the query parameter
  document.getElementById('text').textContent = text;
}

