var num=1;
// var total;
var shoes=2000;
function inc(){
    num++;
    if(num<=30){
        document.getElementById("output").value=num;       
     var to= document.getElementById("cost").innerHTML=`${shoes*num} Rs/-`;
     var par=parseInt(to);   
        total=+par;
        document.getElementById("totalcost").innerHTML=`${total} Rs/-`
        console.log(total)
    }
    else {
        num=30;
    }
}
function dec(){
    num--;
    if(num>=1){
        document.getElementById("output").value=num;        
       var to= document.getElementById("cost").innerHTML=`${shoes*num}Rs/-`;
       total
    //    console.log(total)
    var par=parseInt(to);   
    total=-par;
       document.getElementById("totalcost").innerHTML=`${total} Rs/-`
    //     console.log(total)
    }
    else {
        num=1;
    }
}