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
    for(let i = 0; i < this.words.length - 1; i++) {
      let bigram = `${this.words[i]} ${this.words[i+1]}`;
      if(!wordChains.has(bigram)) {
        wordChains.set(bigram, []);
      }
      wordChains.get(bigram).push(this.words[i+2] || null);
    }
    this.chains = wordChains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Array.from(this.chains.keys());
    let idx = Math.floor(Math.random() * keys.length);
    let currentWord = keys[idx];
    let text = [];
    while(text.length < numWords && currentWord !== null) {
      let [word1, word2] = currentWord.split(" ");
      let randomChain = Math.floor(Math.random() * this.chains.get(currentWord).length);
      text.push(word1);
      currentWord = word2 + " " + this.chains.get(currentWord)[randomChain];
    }
    return text.join(" ");
  }
}

module.exports = {
  MarkovMachine: MarkovMachine
};
