


function openImagePage() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/dcshoes.jpeg";  // Path to the image
    const szoveg = "Kosárlabda";
    const szoveg2 = "20000Ft";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}

function openImagePage2() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/vans.jpg";  // Path to the image
    const szoveg = "Cipő";
    const szoveg2 = "20000Ft";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}

function openImagePage3() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/nikesbkek.jpg";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}

function openImagePage4() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/jordan1.jpg";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}

function openImagePage5() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/campus.webp";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}

function openImagePage6() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/campus.webp";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}

function openImagePage7() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/campus.webp";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}
function openImagePage8() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/campus.webp";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}
function openImagePage9() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/campus.webp";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}
function openImagePage10() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/campus.webp";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}
function openImagePage11() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/campus.webp";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}
function openImagePage12() {
    // The path to the image, and any text you want to pass
    const kep = "./kepek/campus.webp";  // Path to the image
    const szoveg = "Véééééégre2";  // Some text to pass

    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;

    // Navigate to the new page
    window.location.href = url;
}


const hambi = document.querySelector('.hambimenu');
const hamburgerMenu = document.querySelector('.hambimenumain');
const hamburgerMenuLink = document.querySelector('.navlink');
const hamburgerMenuImg = document.querySelector('.navkep'); 

hambi.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    hambi.classList.toggle('active')
    hamburgerMenuImg.classList.toggle('active')
    hamburgerMenuLink.classList.toggle('active')
    hamburgerMenuLink.forEach(link => {
        links.classList.toggle('active'); // This will change the color of all links when the menu is opened
    })
  });

  hambi.addEventListener("click", function(event) {
    // Check if click was outside the menu or hamburger
    if (!hamburgerMenu.contains(event.target) && event.target !== hambi) {
        hamburgerMenu.classList.remove("active");
        hambi.classList.remove('active')
        
    }});



