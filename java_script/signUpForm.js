var allInp = document.querySelectorAll("input");
var allSel = document.querySelectorAll("select");
console.log(allInp);
console.log(allSel);
function storeData(){
    var date = allSel[0].value;
    var month = allSel[1].value;
    var year = allSel[2].value;

    var fname = allInp[0].value;
    var lname = allInp[1].value;
    var phno= allInp[2].value;
    var email=allInp[3].value;
    var password=allInp[4].value;

    localStorage.setItem("fname",fname);
    localStorage.setItem("lname",lname);
    localStorage.setItem("phno",phno);
    localStorage.setItem("password",password)
    localStorage.setItem("email",email);
    localStorage.setItem("date",date);
    localStorage.setItem("month",month);
    localStorage.setItem("year",year);

    open("../index.html");
    var confirmpass=allInp[5].value;
    if(password==confirmpass){
        document.getElementById("submbutt").removeAttribute("disabled")
    }
    else{
        document.getElementById("submbutt").setAttribute("disabled","true")

    }
}

function collect(gender){
    localStorage.setItem("gender",gender)
}