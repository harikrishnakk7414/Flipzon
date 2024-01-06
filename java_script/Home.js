var prevscroll = window.pageYOffset;
console.log(prevscroll);
 var navBar = document.getElementById("navbar");
 window.onscroll=function(){
    var currentScrollpos = window.pageYOffset;
    console.log(currentScrollpos);
    if(prevscroll > currentScrollpos)
    {
        navBar.style.top="0";

    }else{
        navBar.style.top="-80px"
    }
    if(currentScrollpos > 400 || currentScrollpos <=0){
        navBar.style.top="0"
    }
    prevscroll=currentScrollpos
 }
var num=0;
 function addCart(){
    num++;
    document.getElementById("cartvalue").innerHTML=num;
 }

 function loadingClose(){
    document.getElementById("loading").style.display="none"
    document.getElementById("catageryContainer").style.display="flex";
 }
 setTimeout(loadingClose,7000)