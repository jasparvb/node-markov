/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let wordChains = new Map();
    for(let i = 0; i < this.words.length; i++) {
      if(!wordChains.has(this.words[i])) {
        wordChains.set(this.words[i], []);
      }
      wordChains.get(this.words[i]).push(this.words[i+1]);
    }
    this.chains = wordChains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    
  }
}

let mm = new MarkovMachine("the cat in the hat is cool becuase I said so, again")
