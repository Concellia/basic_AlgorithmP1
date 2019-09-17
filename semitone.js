class JamBuddy {
  constructor() {
    this.semitone = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#"
    ];
    this.selectedNotes = [];
  }

  selectNotes() {

    for (let i = 1; i <= 2; i++) {
      var randomised = Math.floor(Math.random() * this.semitone.length);
      this.selectedNotes.push(this.semitone[randomised]);
    }

    return document.getElementById(
      "selectedNotes"
    ).innerHTML = this.selectedNotes;
  }

  checkAnswer() {
    let correctAnswer = Math.abs(
      this.semitone.indexOf(this.selectedNotes[0]) -
        this.semitone.indexOf(this.selectedNotes[1])
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
