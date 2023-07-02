
/*
* Title: Main Module  
* Description: This module is responsible for parsing quotes from filesystem and return it as an array.
* Author: Tanjed Atono 
* Date: 2023/07/03
*
*/

//Dependencies
const quoteModule = require('./lib/quote')
const mathModule = require('./lib/math')

//App object - Module scaffolding 
const app = {}


//Configration
app.config = {
    timeBetweenQuotes : 2000
}

app.getQuote = () => {
    if (typeof app.quotes === 'undefined') app.quotes = quoteModule.getQuotes() 
    return app.quotes[mathModule.getRandomNumber(0, app.quotes.length - 1)]
}

app.showRandomQuotes = function () {
    setInterval(() => console.log(app.getQuote()), app.config.timeBetweenQuotes)
}

app.showRandomQuotes()