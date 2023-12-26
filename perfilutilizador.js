var email = localStorage.getItem("email");
var password = localStorage.getItem("password");

variableemail.innerHTML = email
passhidden = '•'.repeat(password.length)
variablepassword.innerHTML = passhidden

document.getElementById('email').innerHTML = email;
passhidden = '•'.repeat(password.length);
document.getElementById('password').innerHTML = passhidden;