class JamBuddy {
  constructor() {
    this.semitone = [
      "A",
      ["A#","Bb"],
      "B",
      "C",
      ["C#","Db"],
      "D",
      ["D#","Eb"],
      "E",
      "F",
      ["F#","Gb"],
      "G",
      ["G#","Ab"]
    ];
    this.selectedNotes = [];
  }

  selectNotes() {
    let newArray =
    this.semitone.map(function(value){
      if(value.length==2){
        for(let i = 1; i<=1;i++){
          var randomised = Math.floor(Math.random() * 2);
           return value = value[randomised]
        }
      }else{
        return value
      }
    })
      for (let i = 1; i <= 2; i++) {
        var randomised = Math.floor(Math.random() * this.semitone.length);
        this.selectedNotes.push(newArray[randomised]);
    
    }
     

   return document.getElementById(
      "selectedNotes"
    ).innerHTML = this.selectedNotes;
  }

  checkAnswer() {
    for (var i = 0; i < this.semitone.length; i++) {
      if (this.semitone[i][0] === this.selectedNotes[0] || this.semitone[i][1] === this.selectedNotes[0]) {
          var index1 = i;
      } 
      if (this.semitone[i][0] === this.selectedNotes[1] || this.semitone[i][1] === this.selectedNotes[1]) {
        var index2 = i;
    } 
  }
    let correctAnswer = Math.abs(
       index1-index2
    );
    
      
    
    let val = document.getElementById("answer").value;
    if (val == ""|| document.getElementById("selectedNotes").innerHTML == "") {
      return document.getElementById("response").innerHTML =
        "Please select notes and enter your answer!!";
    }
    if (val == correctAnswer) {
      return document.getElementById("response").innerHTML =
        "You got it right. Well Done"
    } else {
      return document.getElementById("response").innerHTML =
        "Wrong answer!! Try again the correct answer is: " + correctAnswer;
    }
  }
}

var buddy = new JamBuddy();
module.exports = JamBuddy;
