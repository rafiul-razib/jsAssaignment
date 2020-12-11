// var marks = [45,67,34,78,98,16,26];

// var sum = 0;

// for (var i= 0; i< marks.length; i++){
//     var element = marks[i];
//     sum= sum + element;
// }

// console.log("The sum of the array is", sum)

function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i< numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }

    return sum;
}

var marks = [45,67,34,78,98,16,26];

var result = getArraySum(marks);

console.log(result);
