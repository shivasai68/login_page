const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signBtn');

signupBtn.onclick = function () {
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
    signupBtn.classList.add("active");   
}

signinBtn.onclick = function () {
    title.innerHTML = "Login";
    nameField.style.display = "none";
    signupBtn.classList.remove("active"); 
}
