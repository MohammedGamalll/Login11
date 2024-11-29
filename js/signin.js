var email = document.getElementById("email");
var password = document.getElementById("password");
var signInBtn = document.getElementById("signInBtn");
var users = JSON.parse(localStorage.getItem("users"));

function signIn() {
    var emailValue = email.value;
    var passwordValue = password.value;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === emailValue && users[i].password === passwordValue) {
            alert("Sign in successful");
            localStorage.setItem("currentUser", JSON.stringify(users[i]));
            window.location.href = "home.html"
            localStorage.setItem('loggedIn', 'true');
            return;
        }
    }
    alert("Invalid email or password");
}

signInBtn.addEventListener("click", signIn);