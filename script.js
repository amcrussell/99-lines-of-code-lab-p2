


var friends = ["Bryan", "Korbin", "Austin", "Sunny", "Steven"];


addEventListener('click', function(){

    if(this.event.target.className != 'button')
        return;

        let friendDiv = document.createElement('div');
        let friendName = document.createElement('h3');
        let friendNameContents = document.createTextNode(friends[c]);

    for (var c = 0; c < friends.length; c++) {

        

        friendName.appendChild(friendNameContents);
        friendDiv.appendChild(friendName);
    
        for (var i = 99; i > 0; i--) {
            var songLyricP = document.createElement('p')
            if(i != 1)
            var songLyric = document.createTextNode(i + " lines of code in the file, " + i + " lines of code; " + friends[c] + " strikes one out, clears it all out, " + i + " lines of code in the file");
            else
            var songLyric = document.createTextNode(i + " lines of code in the file, " + i + " lines of code; " + friends[c] + " strikes one out, clears it all out, no more lines of code in the file");
            
            songLyricP.appendChild(songLyric);
            friendDiv.appendChild(songLyricP);
        }
    }

    this.document.body.appendChild(friendDiv);
});

