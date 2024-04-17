const inquirer = require('inquirer');
const fs = require ('fs');
const {Circle} = require('./lib/shapes.js')
//run npm install first

function init() {
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Which three characters would you like your logo to display?',
      name: 'userLetters',
    },
    {
        type: 'input',
        message: 'What color would you like the text to be?',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Please choose a shape:',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'userShape'
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'shapeColor',
    },
  ]).then(function(results) {
      //  .then( (results) => {})
    console.log(results)
    });
}

init();
