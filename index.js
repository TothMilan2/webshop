const keplink=document.getElementById('shop_content')
const kep=document.getElementsByClassName('kep')


keplink.addEventListener('click', function() {
    
    localStorage.setItem('updatedContent', 'kep');
    

    window.location.href = 'megrendel.html'; 
})