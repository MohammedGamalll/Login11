var logOutBtn = document.getElementById('logout');
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
var username = document.getElementById('username');

username.innerHTML = currentUser.name;



function logOut() {
    window.location.href = "index.html";
}

logOutBtn.addEventListener("click", logOut);