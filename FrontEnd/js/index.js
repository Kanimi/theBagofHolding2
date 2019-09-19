// Custom local accounts for testing purposes
function check(form){
    if(form.userid.value == "admin" && form.pswrd.value == "password"){
        location.href = "home.html"
    }else {
        alert("Incorrect username or password.")
    }
}