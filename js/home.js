var logOutBtn = document.getElementById('logout');
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
var username = document.getElementById('username');

username.innerHTML = currentUser.name;

if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
    alert('You must be logged in to access this page');
}

function logOut() {
    localStorage.setItem('loggedIn','false');
    window.location.href = "index.html";
}

logOutBtn.addEventListener("click", logOut);