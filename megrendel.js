// Function to get the query parameters from the URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Get the image source and text from the URL
const imageSrc = getQueryParam('kep');
const text = getQueryParam('szoveg');

// Set the image source and text content on the page
if (imageSrc && text) {
  document.getElementById('image').src = kep;
  document.getElementById('text').textContent = szoveg;
} else {
  document.getElementById('text').textContent = 'No image or text found!';
}