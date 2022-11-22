function sing(){
    for(i=99; i>=0; i--){
        if(i>2){
            document.getElementById("button").innerHTML+= i+ " bottles of beer on the wall, " +i+" bottles of beer. You take one down and pass it around, " +(i-1)+" bottles of beer on the wall.";
        }
        else if(i==2){
            document.getElementById("button").innerHTML+= i+" bottles of beer on the wall, "+i+" bottles of beer. You take one down and pass it around. 1 bottle of beer on the wall.";
        }
        else if(i==1){
            document.getElementById("button").innerHTML+= i+" bottle of beer on the wall, "+i+" bottle of beer. You take one down and pass it around. No more bottles of beer on the wall.";
           }
           else if(i==0){
            document.getElementById("button").innerHTML+= "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
           }
    } 
}