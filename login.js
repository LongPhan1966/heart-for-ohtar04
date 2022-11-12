function validate(){
    var username = document.getElementById("username").value;
    if ( username == "Dang Nguyen Phuong Thao"){
        alert ("Login successfully");
        window.location = "heart.html"; // Redirecting to other page.
        return false;
    }
    else{
        alert("You are not Thao who I know, right ?");
        return false;
    }
}