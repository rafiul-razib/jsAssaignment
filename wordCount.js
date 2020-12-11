var speech = "a quick  brown fox jumps over the lazy dog";

var count = 0;

for (var i = 0; i< speech.length; i++){
    var char = speech[i];
    
    if(char == " " && speech[i-1] != " "){
        count++
    }
}
count++

console.log(count);