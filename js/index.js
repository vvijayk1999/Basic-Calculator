document.getElementById("btn_1").addEventListener("click",one);
document.getElementById("btn_2").addEventListener("click",two);
document.getElementById("btn_3").addEventListener("click",three);
document.getElementById("btn_4").addEventListener("click",four);
document.getElementById("btn_5").addEventListener("click",five);
document.getElementById("btn_6").addEventListener("click",six);
document.getElementById("btn_7").addEventListener("click",seven);
document.getElementById("btn_8").addEventListener("click",eight);
document.getElementById("btn_9").addEventListener("click",nine);
document.getElementById("btn_equ").addEventListener("click",equ);
document.getElementById("btn_0").addEventListener("click",zero);
document.getElementById("btn_dot").addEventListener("click",dot);
document.getElementById("btn_*").addEventListener("click",multiply);
document.getElementById("btn_/").addEventListener("click",divide);
document.getElementById("btn_-").addEventListener("click",subtract);
document.getElementById("btn_+").addEventListener("click",add);
document.getElementById("btn_backspace").addEventListener("click",backspace);

var equation="";

function backspace()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    equation = equation.substr(0, equation.length - 1);
   document.getElementById("display").innerHTML = equation;
}
function one()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "1";
    equation += "1";
}

function two()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "2";
    equation += "2";
}

function three()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "3";
    equation += "3";
}

function four()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "4";
    equation += "4";
}

function five()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "5";
    equation += "5";
}

function six()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "6";
    equation += "6";
}

function seven()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "7";
    equation += "7";
}

function eight()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "8";
    equation += "8";
}

function nine()
{
   if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "9";
   equation += "9";
}

function zero()
{
   if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "0";
    equation += "0";
}

function dot()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += ".";
    equation += ".";
}

function equ()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("result").innerHTML = eval(equation);
    document.getElementById("display").innerHTML = "Developed by vvijayk1999";
    equation = "";
}

function divide()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "/";
    equation += "/";   
}

function multiply()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "x";
    equation += "*";
}

function subtract()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "-";
    equation += "-";
}

function add()
{
    if(document.getElementById("display").innerHTML == "Developed by vvijayk1999")
        document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += "+";
   equation += "+";
}