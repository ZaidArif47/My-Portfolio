const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById('download-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('yes-btn').addEventListener('click', () => {
    window.open('zaidArifResume.pdf', '_blank');
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('no-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});