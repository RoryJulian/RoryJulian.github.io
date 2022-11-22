//alert ("Welcome to the Rock, Paper, Scissors game. Input your selection below and see if you can beat the computer!");

function check(){
var choice = document.getElementById("formAnswer").value;
if(choice=="Rock"){
    document.getElementById("gameDiv").innerHTML="Uh oh, you lose! The computer chose Paper.";
    }   

    else if(choice=="Paper"){
    document.getElementById("gameDiv").innerHTML="It's a tie! The computer chose Paper.";
    }
    else if(choice=="Scissors"){
    document.getElementById("gameDiv").innerHTML="Congratulations, you won! The computer chose Paper.";
    }
    else {alert("invalid input, please either input Rock, Paper or Scissors!")
    }
}
