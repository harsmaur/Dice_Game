var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6+1);
var randomNumber2 = Math.random();
var randomNumber2 = Math.floor(randomNumber2*6+1);

//string from dice1 to dice 6
var imgs1 = "images/dice"+randomNumber1+".png";
var imgs2 = "images/dice"+randomNumber2+".png";

//selecting the html element with querySelector
document.querySelector(".dice .img1").setAttribute("src", imgs1);
document.querySelector(".dice .img2").setAttribute("src", imgs2);


 if(randomNumber1 > randomNumber2 ){
   document.querySelector("h1").innerHTML = " ⛳Player 1 Won";
 }
 else if(randomNumber2 > randomNumber1 ){
   document.querySelector(".container h1").innerHTML = " Player 2 Won⛳";

 }
 else if(randomNumber2 === randomNumber1){
   document.querySelector(".container h1").innerHTML = "It's A draw";

 }
