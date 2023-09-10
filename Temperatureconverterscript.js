function calculate(){
    var celsius,fahrenheit,a;
    celsius=document.getElementsByClassName("celsius");
    celsius=celsius[0].value;
    fahrenheit=(9/5)*celsius+32;
    a=document.getElementsByClassName("fahrenheit");
    a[0].value=fahrenheit;
}
function textclear(){
    var b,c;
    b=document.getElementsByClassName("celsius");
    b[0].value="";
    c=document.getElementsByClassName("fahrenheit");
    c[0].value="";
}