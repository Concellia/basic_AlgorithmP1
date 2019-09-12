
let JamBuddy = require("../semitone");
describe("Jambuddy",function(){
    let jambuddy;
    beforeEach(function(){
    jambuddy = new JamBuddy();

    })
    it("jambuddy should be defined", function(){
        
        expect(jambuddy).toBeDefined();
    })

})

describe("Selectnotes()",function(){
    let jambuddy;
    beforeEach(function(){
    jambuddy = new JamBuddy();

    })
    it("select notes function should be defined", function(){
        
        expect(jambuddy.selectNotes).toBeDefined();
    })

    it("select note function should return an array", function(){
        
        expect(jambuddy.selectNotes()).toEqual(jasmine.any(Array));
    })
    
    it("should return the length of the selected notes array", function(){
   let result = jambuddy.selectNotes()
   expect(result.length).toBe(2)
        
           })

})

describe("Check answer()",function(){
    let jambuddy;
    beforeEach(function(){
    jambuddy = new JamBuddy();

    })
    it("check answer function should be defined", function(){
        
        expect(jambuddy.checkAnswer()).toBeDefined();
    })

    it("check answer function should take in an input", function(){
        
        expect(jambuddy.checkAnswer()).not.toBeNull();
    })

    it("check answer function should return true or false", function(){
        
        expect(jambuddy.checkAnswer()).toEqual(jasmine.any(Boolean));
    })

})
