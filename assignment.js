function feetToMile (feet){
    var mile = feet/5280;
    return mile;
}

var result = feetToMile(16000);
console.log(result);


function woodCalculator(chair, table, bed){
    var woodChair = 1;
    var woodTable = 3;
    var woodBed = 5;

    var woodRequired = chair*woodChair + table*woodTable + bed*woodBed;

    return woodRequired;
}

var hotelFurniture = woodCalculator(2,2,2);

console.log(hotelFurniture);


function brickCalculator (story){
    if(story<= 10){
        var bricksNeeded = story*15*1000;

    }
    else if(story> 10 && story<=20){
        var bricksNeeded = 10*1000*15 + (story-10)*12*1000
    }
    else if(story>20) {
        var bricksNeeded = 10*1000*15 + 10*12*1000 + (story-20)*10*1000
    }

    return bricksNeeded;
}

var result = brickCalculator(35);

console.log(result);