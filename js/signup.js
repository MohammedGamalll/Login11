var username = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var signUpBtn = document.getElementById("signUpBtn");
var users = [];

if (localStorage.getItem("users") !== null) {
    users = JSON.parse(localStorage.getItem("users"));
}
else {
    localStorage.setItem("users", JSON.stringify(users));
}


function signUp() {
    var user = {
        name: username.value,
        email: email.value,
        password: password.value,
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign up successful");
    clearForm();
    
}
function checkEmail() {
    var email = document.getElementById("email").value;
    var users = JSON.parse(localStorage.getItem("users"));
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            alert("Email already exists");
            return false;
        }
    }
    return true;
}
function checkPassword() {
    var password = document.getElementById("password").value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }
    return true;
}

signUpBtn.addEventListener("click", function checkForm(){
    if (checkEmail() && checkPassword()) {
        signUp();
    }
});

function clearForm() {
    username.value = "";
    email.value = "";
    password.value = "";
}
