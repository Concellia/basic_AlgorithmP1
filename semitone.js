class JamBuddy{
    constructor(){
        this.semitone = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#']
        this.selectedNotes = []
    }

    selectNotes(){
        for(let i = 1;i<=2;i++){
            var randomised = Math.floor(Math.random()*this.semitone.length)
            this.selectedNotes.push(this.semitone[randomised])

        }

        return this.selectedNotes
    }
    checkAnswer(answer){
        let correctAnswer = Math.abs(this.semitone.indexOf(this.selectedNotes[0])-this.semitone.indexOf(this.selectedNotes[1]))
        if(answer===correctAnswer){
            return true
        }else{
            return false
        }
    
    }
}

var buddy = new JamBuddy()
console.log(buddy.selectNotes())
console.log(buddy.checkAnswer(5))

module.exports = JamBuddy;