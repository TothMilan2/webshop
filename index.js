function redirectToDisplay(kep, szoveg) {
    // Construct the URL with encoded parameters
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;
    
    // Redirect to the display page
    window.location.href = url;
}