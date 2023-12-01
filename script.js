// script.js

const body = document.body;
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

toggleSwitch.addEventListener('change', switchTheme);

function openPopup() {
    document.getElementById('profilePopup').style.display = 'block';
    body.style.overflow = 'hidden'; // Mencegah scroll pada background
}

function closePopup() {
    document.getElementById('profilePopup').style.display = 'none';
    body.style.overflow = 'auto'; // Mengembalikan fungsi scroll
}