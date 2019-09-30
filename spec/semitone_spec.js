var jsdom = require("jsdom");
var fs = require("fs");
let JamBuddy = require("../semitone");
describe("Jambuddy", function() {
  let jambuddy;
  beforeEach(function() {
    const index = fs.readFileSync("./index.html", "utf-8");
    const { JSDOM } = jsdom;
    const { document } = new JSDOM(index).window;
    global.document = document;
    jambuddy = new JamBuddy();
  });
  it("jambuddy should be defined", function() {
    expect(jambuddy).toBeDefined();
  });
  it("select notes function should be defined", function() {
    expect(jambuddy.selectNotes()).toBeDefined();
  });

  it("select note function should return an array", function() {
    expect(jambuddy.selectNotes()).toEqual(jasmine.any(Array));
  });

  it("should return the length of the selected notes array", function() {
    let result = jambuddy.selectNotes();
    expect(result.length).toBe(2);
  });
  it("check answer function should be defined", function() {
    expect(jambuddy.checkAnswer()).toBeDefined();
  });

  it("check answer function should take in an input", function() {
    expect(jambuddy.checkAnswer()).not.toBeNull();
  });

  it("check answer function should return true or false", function() {
    expect(jambuddy.checkAnswer()).toEqual(jasmine.any(String));
  });

  it("should be able to display the array of the semitone", function() {
    expect(jambuddy.reveal()).toEqual([
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
    ]);
  });

  it("should be able to display the answer", function() {
    expect(global.document.getElementById("correct").innerHTML).toBe("");
    jambuddy.correctAnswer();
    expect(global.document.getElementById("correct").innerHTML).toContain(
      "The Answer is: NaN"
    );
  });

  it("should be able to hide the explanation button", function() {
    expect(global.document.getElementById("reveal").style.display).toBe("");
    expect(global.document.getElementById("correct").style.display).toBe("");
    expect(global.document.getElementById("reveal-answer").style.display).toBe(
      ""
    );
    jambuddy.hide();

    expect(global.document.getElementById("reveal").style.display).toBe("none");
    expect(global.document.getElementById("correct").style.display).toBe(
      "none"
    );
    expect(global.document.getElementById("reveal-answer").style.display).toBe(
      "none"
    );
  });
});
