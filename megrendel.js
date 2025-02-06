 // Function to get URL parameters
 function getQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
      image: urlParams.get('image'),

  };
}

// Load the image and text based on the query parameters
const params = getQueryParams();
const image = params.image;


if (image) {
  // Set the image source from the query parameter
  document.getElementById('image').src = image;
}

