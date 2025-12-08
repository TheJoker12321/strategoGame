function createPlayer(name) {
    return {
        name: name,
        numberSoldier: Math.floor(Math.random() * 10)
    }
}

function createAI(numberSoldier) {
    return {
        name: "AI",
        numberSoldier: numberSoldier
    }
}
function logPlayer(numberSoldierPlayer, numberSoldierAI) {
    return {
        won: numberSoldierPlayer > numberSoldierAI ? "player won" : "AI won and game over",
        message: numberSoldierPlayer > numberSoldierAI ? `${numberSoldierPlayer} > ${numberSoldierAI}` : `${numberSoldierAI} > ${numberSoldierPlayer}`
    }
}

console.log(logPlayer(4, 6));
