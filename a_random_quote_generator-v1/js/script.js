/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Quotes array consists of 5 objects with at minimum (2) properties: quote & source and at maximum (5) properties: quote, source, citation, year, and tag
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
    year: 2013,
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    source: "Charles R. Swindoll"
  },
  {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    source: "Thomas A. Edison",
    year: 1879,
    tags: 'Science'
  },
  {
    quote: "If you can't change reality, change your perception of it.",
    source: "Audre Lorde",
    citation: "Zami: A New Spelling of My Name",
    year: 1982,
    tags: 'Politics'
  }
];

/***
 * `getRandomQuote` function
 * this function creates a random number between 0 and 5(the length of our quotes object), then selects a random object within our quotes array
***/

function getRandomQuote(arr){
  const randomNum = Math.floor(Math.random()*arr.length)+1;
  const randomQuoteObject = arr[randomNum];
  return randomQuoteObject;
}
/**
 * `randomColor` function
 * 
 */
function selectRandomColor(){
  const color = Math.floor(Math.random()*256);
  return color;
  }


/***
 * `printQuote` function
 * this function calls the getRandomQuote() function to obtain a random object from the quotes array that we then used to retrieve the values of the object i.e. the values of the quote, source, citation (if applicable), year(if applicable), and tags(if applicable) properties and appending them to our html variable. We then push the template literal stored in that html variable into our 'quote-box' div in our index.html document
***/
  function printQuote(){
  const randomRGB = `rgb(${selectRandomColor()}, ${selectRandomColor()}, ${selectRandomColor()})`;
  const randomQuoteObject = getRandomQuote(quotes);
  let html = `
    <p class="quote"> ${randomQuoteObject.quote} </p>
    <p class="source">${randomQuoteObject.source}
  `;
  if(randomQuoteObject.citation){
    html+=`<span class="citation">${randomQuoteObject.citation}</span>`;
  }
  if(randomQuoteObject.year){
    html+=`<span class="year">${randomQuoteObject.year}</span>`;
  }
  if(randomQuoteObject.tags){
    html+=`<span class="tags">, ${randomQuoteObject.tags}</span>`;
  }
  html+=`</p>`;
  document.getElementById('quote-box').innerHTML = html; 
  document.querySelector('body').style.backgroundColor = randomRGB;
}

function timer (){
  setInterval(printQuote, 10000);
}
timer();




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);