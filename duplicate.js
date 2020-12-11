var studentId = [23,52,23,67,26,25,2,56,2,67]

var uniqId= [];


for (var i = 0; i< studentId.length; i++){
    var element = studentId[i];

    var index = uniqId.indexOf(element);

    if (index == -1){
        uniqId.push(element)
    }
}

console.log(uniqId)