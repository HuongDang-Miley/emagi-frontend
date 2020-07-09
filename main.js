const emagiSearch = require('./emagi-search.js')
const emagify = require('./emagify.js')
const randomElement = require('./emagi-random.js')
const symbols = require('./emagi-symbols.js')
const feelings = require('./emagi-feelings.js')
const food = require('./emagi-food.js')

// store user input into a variable. Eliminate the index 0 and 1
const userInput = process.argv.slice(2)

// When type "search" get search function
if (userInput[0] === 'search') {
    // print item vertically without bracket
    for (const item of emagiSearch(userInput[1])) {
        console.log(item)
    }
}

// When type "convert", get emagify function
if (userInput[0] === 'convert') {
    console.log(emagify(userInput).join(' '))
}

// When type random, get randomElement function
if (userInput[0] === 'random') {
    console.log(randomElement(symbols))
}


// When there's no input, gives instructions to use the app
if (userInput[0] === undefined) {
    const message = 
    `\n
    You haven't enter yet. \n
    1. To search for symbol: type 'search' + name of symbol.\n
    2. To convert text to symbol: Type "convert" + your text. \n
    3. To get random symbol: type "random" \n
    \n`
    console.log(message)
}

// STRETCH GOAL:  When type 'madlibs'. In the sentence follow it, replace "food" with a random food symbol, replace "emotion" with a random feeling symbol.
if (userInput[0] === 'madlibs') {
    let result = []
    for (const item of userInput) {
        if (item.includes('food')) {
            result.push(randomElement(food))
        } else if (item.includes('emotion')) {
            result.push(randomElement(feelings))
        } else {
            result.push(item)
        }
    }
    console.log(result.join(' '))
}




     
