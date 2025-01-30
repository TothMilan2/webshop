const updatedContent = localStorage.getItem('updatedContent');
const kep=document.getElementsByClassName('kep')


    if (updatedContent) {
      document.getElementsByClassName('megrendel').innerHTML = `{updatedContent}`;
    }