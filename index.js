
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
const http = require('http')

//App object - Module scaffolding 
const app = {}


//Configration
app.config = {
    timeBetweenQuotes : 2000
}

app.getQuote = (butify = false) => {
    if (typeof app.quotes === 'undefined') app.quotes = quoteModule.getQuotes()
    let quote = app.quotes[mathModule.getRandomNumber(0, app.quotes.length - 1)];
    if(butify) {
        quote = quote.split('-')
        let quoteBody = quote[0] || ''
        let quoter = quote[1] || ''

        return (
        `<div style ='width:50%;margin:0 auto'>
            <h1> ${quoteBody} </h1>
            <h4 style='color:gray'> - ${quoter} </h4>
        </div>`
        )
    } 
    return quote 
}

app.showRandomQuotes = function () {
    setInterval(() => console.log(app.getQuote()), app.config.timeBetweenQuotes)
}


const server = http.createServer((req, res) => {
    res.write(app.getQuote(true))
    res.end()    
})

server.listen(3030)
console.log('SERVER STARTED');
