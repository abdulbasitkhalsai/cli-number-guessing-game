#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber);
const answer = await inquirer.prompt(
    {
        type: "number",
        name: "userGuessedNumber",
        message: "Guess a number between 1-6"
    }
);

if (answer.userGuessedNumber === randomNumber) {
    console.log("Congrulations, You guessed a right number");
} else { 
    console.log(`Sorry, You guessed wrong number. Correct answer is ${randomNumber}`);
}
