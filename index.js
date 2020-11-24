var random1 = (Math.floor(Math.random()*6) + 1);
var randomImage1 = "dice" +random1 + ".png";

function image1() {
  if (randomImage1==="dice1.png") {
    return "images/dice1.png" ;
  }
  else if (randomImage1==="dice2.png") {
    return "images/dice2.png" ;
  }
  else if (randomImage1==="dice3.png") {
    return "images/dice3.png" ;
  }
  else if (randomImage1==="dice4.png") {
    return "images/dice4.png" ;
  }
  else if (randomImage1==="dice5.png") {
    return "images/dice5.png" ;
  }
  else if (randomImage1==="dice6.png") {
    return "images/dice6.png" ;
  }

}

document.querySelector(".img1").setAttribute("src", image1());

var random2 = (Math.floor(Math.random()*6) + 1);
var randomImage2 = "dice" +random2 + ".png";

function image2() {
  if (randomImage2==="dice1.png") {
    return "images/dice1.png" ;
  }
  else if (randomImage2==="dice2.png") {
    return "images/dice2.png" ;
  }
  else if (randomImage2==="dice3.png") {
    return "images/dice3.png" ;
  }
  else if (randomImage2==="dice4.png") {
    return "images/dice4.png" ;
  }
  else if (randomImage2==="dice5.png") {
    return "images/dice5.png" ;
  }
  else if (randomImage2==="dice6.png") {
    return "images/dice6.png" ;
  }

}

document.querySelector(".img2").setAttribute("src", image2());


  if(random1>random2){
  (document.querySelector("h1").innerHTML="😎 Palen Wins!");
  }
  else if(random1<random2) {
  (document.querySelector("h1").innerHTML="Ranjeet Wins! 😎");
  }
  else {
  (document.querySelector("h1").innerHTML="😪😪");
  }
