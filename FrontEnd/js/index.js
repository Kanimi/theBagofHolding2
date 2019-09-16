// Custom local accounts for testing purposes
function check(form){
    if(form.userid.value == "admin" && form.pswrd.value == "password"){
        location.href = "overview.html"
    } else if (form.userid.value == "guest" && form.pswrd.value == "password"){
        //window.open("http://35.230.156.56/") if it were online
        location.href = "overview.html"
    }else {
        alert("Incorrect username or password.")
    }
}