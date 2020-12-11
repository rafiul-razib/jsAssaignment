function reverseString(hello){
    var reverse = ""
    for(var i = 0; i<hello.length; i++){
        var char = hello[i];
        reverse = char + reverse;
    }
    return reverse;
}


var hello = "Hello Bangladesh"

var result = reverseString (hello);

console.log(result);