/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    source: 'Helen Keller',
    year: 1903
  },
  {
    quote:"Our lives aren't just measured in years, they're measured in the lives of the people we touch around us." ,
    source: 'Peeta Mellark',
    citation:'The Hunger Games: Catching Fire',
    year: 2013
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    source: "Charles R. Swindoll"
  },
  {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    source: "Thomas A. Edison",
    year: 1879
  },
  {
    quote: "If you can't change reality, change your perception of it.",
    source: "Audre Lorde",
    citation: "Zami: A New Spelling of My Name",
    year: 1982
  }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  const randomNum = Math.floor(Math.random()*quotes.length)+1;
  const randomQuote = quotes[randomNum];
  return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote(){
  const randomQuote = getRandomQuote();
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);