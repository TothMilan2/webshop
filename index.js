function redirectToDisplay(imageSrc, text) {
    // Construct the URL with encoded parameters
    const url = `megrendel.html?image=${encodeURIComponent(imageSrc)}&text=${encodeURIComponent(text)}`;
    
    // Redirect to the display page
    window.location.href = url;
}