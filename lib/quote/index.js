
/*
* Title: Quote Module  
* Description: This module is responsible for parsing quotes from filesystem and return it as an array.
* Author: Tanjed Atono 
* Date: 2023/07/03
*
*/

//Dependencies
const fs = require('fs')

//App object - Module scaffolding 
const quotes = {}

//Get all quotes and parse
quotes.getQuotes = () => {
    return fs.readFileSync(__dirname + '/quotes.txt', 'utf-8').split(/\r?\n/)
}

//Export library
module.exports = quotes