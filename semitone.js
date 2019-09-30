class JamBuddy {
  constructor() {
    this.semitone = [
      "A",
      ["A#", "Bb"],
      "B",
      "C",
      ["C#", "Db"],
      "D",
      ["D#", "Eb"],
      "E",
      "F",
      ["F#", "Gb"],
      "G",
      ["G#", "Ab"]
    ];
    this.selectedNotes = [];
    this.streak = 0;
  }
  reveal() {
    let semitoneNotes = [
      "A",
      "A#",
      "Bb",
      "B",
      "C",
      "C#",
      "Db",
      "D",
      "D#",
      "Eb",
      "E",
      "F",
      "F#",
      "Gb",
      "G",
      "G#",
      "Ab"
    ];
    let explanationDiv = [];
    let displayedNotes = document
      .getElementById("selectedNotes")
      .innerHTML.split(",");
    for (let i = 0; i < semitoneNotes.length; i++) {
      if (
        displayedNotes[displayedNotes.length - 2] == semitoneNotes[i] ||
        displayedNotes[displayedNotes.length - 1] == semitoneNotes[i]
      ) {
        explanationDiv.push(
          semitoneNotes[i]
            .toString()
            .fontcolor("red")
            .fontsize("5px")
            .bold()
        );
      } else {
        explanationDiv.push(semitoneNotes[i]);
      }
    }

    return (document.getElementById(
      "reveal-answer"
    ).innerHTML = explanationDiv);
  }

  correctAnswer() {
    let displayedNotes = document
      .getElementById("selectedNotes")
      .innerHTML.split(",");
    for (var i = 0; i < this.semitone.length; i++) {
      if (
        this.semitone[i][0] === displayedNotes[0] ||
        this.semitone[i][1] === displayedNotes[0]
      ) {
        var index1 = i;
      }
      if (
        this.semitone[i][0] === displayedNotes[1] ||
        this.semitone[i][1] === displayedNotes[1]
      ) {
        var index2 = i;
      }
    }
    let correctAnswer = Math.abs(index1 - index2);
    return (document.getElementById("correct").innerHTML =
      "The Answer is: " + correctAnswer);
  }
  selectNotes() {
    let newArray = this.semitone.map(function(value) {
      if (value.length == 2) {
        for (let i = 1; i <= 1; i++) {
          var randomised = Math.floor(Math.random() * 2);
          return (value = value[randomised]);
        }
      } else {
        return value;
      }
    });
    for (let i = 1; i <= 2; i++) {
      var randomised = Math.floor(Math.random() * this.semitone.length);
      this.selectedNotes.push(newArray[randomised]);
    }

    return (document.getElementById(
      "selectedNotes"
    ).innerHTML = this.selectedNotes.slice(-2));
  }

  hide() {
    document.getElementById("reveal").style.display = "none";
    document.getElementById("correct").style.display = "none";
    document.getElementById("reveal-answer").style.display = "none";
  }

  checkAnswer() {
    for (var i = 0; i < this.semitone.length; i++) {
      if (
        this.semitone[i][0] ===
          this.selectedNotes[this.selectedNotes.length - 2] ||
        this.semitone[i][1] ===
          this.selectedNotes[this.selectedNotes.length - 2]
      ) {
        var index1 = i;
      }
      if (
        this.semitone[i][0] ===
          this.selectedNotes[this.selectedNotes.length - 1] ||
        this.semitone[i][1] ===
          this.selectedNotes[this.selectedNotes.length - 1]
      ) {
        var index2 = i;
      }
    }
    let correctAnswer = Math.abs(index1 - index2);

    let inputAnswer = document.getElementById("answer").value;
    if (
      inputAnswer == "" ||
      document.getElementById("selectedNotes").innerHTML == ""
    ) {
      return (document.getElementById("response").innerHTML =
        "Please select notes and enter your answer!!");
    }

    if (inputAnswer == correctAnswer) {
      document.getElementById("reveal-answer").style.display = "block";
      document.getElementById("response").innerHTML =
        "You got it right. Well Done";
      this.streak++;
      console.log(this.streak);
    } else {
      document.getElementById("response").innerHTML =
        "Wrong answer!! Try again the correct answer is: " + correctAnswer;
    }
    document.getElementById("count").innerText = this.streak;
  }
}

function restart() {
  location.reload();
}

var buddy = new JamBuddy();
function start() {
  buddy.selectNotes();
}

module.exports = JamBuddy;
