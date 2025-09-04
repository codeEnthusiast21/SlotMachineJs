//Deposit the money
//Determine the number of lines to bet on
//collect a bet amount per line
//

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ")
        const number = parseFloat(depositAmount)

        if (isNaN(number) || number <= 0) console.log("Invalid deposit amount , try again");
        else return number
    }

}
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on(1-3): ")
        const numberOfLines = parseFloat(lines)

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) console.log("Invalid number of lines  , try again");
        else return numberOfLines
    }

}

const getBet = (balance,lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ")
        const numberBet = parseFloat(bet)

        if (isNaN(numberBet) || numberBet <= 0|| numberBet>balance/lines) console.log("Invalid bet amount , try again");
        else return numberBet;
    }

}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines);
