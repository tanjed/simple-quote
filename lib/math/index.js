
/*
* Title: Math Module  
* Description: This module is responsible for all custom mathmatical calculations.
* Author: Tanjed Atono 
* Date: 2023/07/03
*
*/

//App object - Module scaffolding 
const math = {}

//Get randomNumber
math.getRandomNumber = (min, max) => {
    min = typeof min === 'number' ? min : 0;
    max = typeof max === 'number' ? max : 0;
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//Export library
module.exports = math