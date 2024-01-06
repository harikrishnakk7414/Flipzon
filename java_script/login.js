function collectValue(){
    var userEmail=localStorage.getItem("email")
    var userPass= localStorage.getItem("password")
    console.log(userEmail,userPass)
    var userEnteredEmail=document.getElementById("mail").value;
    var userEnteredPassword=document.getElementById("pass").value;

    if (userEmail==userEnteredEmail && userPass==userEnteredPassword) 
    {
        open("./HTML/Home.html")
    }else{
        document.getElementById("result").innerHTML="wrong userName or password";
        document.getElementById("result").style.color="red";
    }

}