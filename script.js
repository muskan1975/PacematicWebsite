var  timer= new Date("feb 21, 2024 10:00:00").getTime();
var x = setInterval(function(){
var now = new Date().getTime();
var diff = timer - now ;
var days = Math.floor(diff /(1000*60*60*24));
console.log(days);
var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
console.log(hours);
var minutes =Math.floor((diff % (1000 *60*60)) /(1000*60));
console.log(minutes);
var seconds =Math.floor((diff %(1000 *60)) / 1000);
console.log(seconds);
document.getElementById("tm-btn1").innerHTML = days 
document.getElementById("tm-btn2").innerHTML = hours 
document.getElementById("tm-btn3").innerHTML = minutes 
document.getElementById("tm-btn4").innerHTML = seconds
document.getElementById("tm-btn5").innerHTML = days 
document.getElementById("tm-btn6").innerHTML = hours 
document.getElementById("tm-btn7").innerHTML = minutes 
document.getElementById("tm-btn8").innerHTML = seconds
document.getElementById("tm-btn9").innerHTML = days 
document.getElementById("tm-btn10").innerHTML = hours 
document.getElementById("tm-btn11").innerHTML = minutes 
document.getElementById("tm-btn12").innerHTML = seconds
document.getElementById("tm-btn13").innerHTML = days 
document.getElementById("tm-btn14").innerHTML = hours 
document.getElementById("tm-btn15").innerHTML = minutes 
document.getElementById("tm-btn16").innerHTML = seconds
},1000);



var  timer= new Date("feb 21, 2024 10:00:00").getTime();
var x = setInterval(function(){
var now = new Date().getTime();
var diff = timer - now ;
var days = Math.floor(diff /(1000*60*60*24));
console.log(days);
var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
console.log(hours);
var minutes =Math.floor((diff % (1000 *60*60)) /(1000*60));
console.log(minutes);
var seconds =Math.floor((diff %(1000 *60)) / 1000);
console.log(seconds);

document.getElementById("tm-btn17").innerHTML = days 
 document.getElementById("tm-btn18").innerHTML = hours 
 document.getElementById("tm-btn19").innerHTML = minutes 
 document.getElementById("tm-btn20").innerHTML = seconds
 document.getElementById("tm-btn21").innerHTML = days 
 document.getElementById("tm-btn22").innerHTML = hours 
 document.getElementById("tm-btn23").innerHTML = minutes 
document.getElementById("tm-btn24").innerHTML = seconds
document.getElementById("tm-btn25").innerHTML = days 
 document.getElementById("tm-btn26").innerHTML = hours 
 document.getElementById("tm-btn27").innerHTML = minutes 
document.getElementById("tm-btn28").innerHTML = seconds
},1000);