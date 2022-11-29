function go(){
    let results=[];
    let sum=0;
    for (i=0;i<4;i++){
        results[i]=prompt("Please enter your result for Subject "+[i+1]);
    }
    for(i=0;i<results.length;i++){
        document.getElementById('main').innerHTML+=(results[i]+",");
    }
}