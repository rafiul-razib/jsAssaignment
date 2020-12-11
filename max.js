var business= 350;
var job= 200;
var foreign= 450;

// var maximum= Math.max(business, job, foreign);

// console.log(maximum);

if(business> job){
    if(business> foreign){
        console.log("You should start a business")
    }
    else{console.log("Go abroad")}
}

else{
    console.log("You better do your job")
}