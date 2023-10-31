


var friends = ["bryan", "korbin", "austin", "sunny", "steven"];


for (var c = 0; c < friends.length; c++) {
    
    for (var i = 99; i > 0; i--) {
        if(i != 1)
        console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[c] + " strikes one out, clears it all out, " + i + " lines of code in the file");
        else
        console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[c] + " strikes one out, clears it all out, no more lines of code in the file");
    }
}