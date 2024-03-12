const menu = document.querySelector('.menu-icon');
const linksDiv = document.querySelector('.links-div');

menu.addEventListener('click', () => {
    linksDiv.classList.toggle('active');
    
    if (linksDiv.classList.contains('active')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');
    } else {
        menu.classList.add('fa-bars');
        menu.classList.remove('fa-times');
    }
});