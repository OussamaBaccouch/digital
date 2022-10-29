function passvalues(){
    var firstName=document.getElementById("firstName").value;
    localStorage.setItem("textvalue1",firstName);
    var lastName=document.getElementById("lastName").value;
    localStorage.setItem("textvalue2",lastName);
    var firstName=document.getElementById("mail").value;
    localStorage.setItem("mail",mail);
    


    return false;
}
document.getElementById("result1").innerHTML=localStorage.getItem("textvalue1");
document.getElementById("result2").innerHTML=localStorage.getItem("textvalue2");
document.getElementById("result3").innerHTML=localStorage.getItem("mail");
