/** Command-line tool to generate Markov text. */

const fs = require('fs');
const axios = require('axios');
const process = require('process');
const argv = process.argv;
const { MarkovMachine } = require("./markov");

function readText(path) {
    fs.readFile(path, "utf8", function(err, data) {
        if (err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        } else {
            makeOutput(data);
        }
    });
}

async function readUrl(url) {
    try {
        let response = await axios.get(url);
        makeOutput(response.data);
    }
    catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

function makeOutput(data) {
    let mm = new MarkovMachine(data);
    let text = mm.makeText();
    console.log(text);
}


if(argv[2] === "file") readText(argv[3]);
if(argv[2] === "url") readUrl(argv[3]);