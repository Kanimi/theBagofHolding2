// Custom local accounts for testing purposes
function check(form){
    if(form.username.value === "admin" && form.password.value === "password"){
        location.href = "home.html";
    }else {
        alert("Incorrect username or password.");
    }
}