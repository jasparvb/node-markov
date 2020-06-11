/** Tests for markov chain generator */

const { MarkovMachine } = require("./markov");

let mm = new MarkovMachine("the cat in the hat");

describe("Markov tests", function() {

  test('makeChains', function() {
    mm.makeChains("the cat in the hat");
    expect(mm.chains.get("hat")).toEqual([null]);
    expect(mm.chains.get("the")).toEqual(["cat", "hat"]);
  });

  test('makeText', function() {
    mm.makeChains("the cat in the hat");
    let text = mm.makeText();
    expect(text).toEqual(expect.any(String));
  });
});
