function createPlayer(name, numberSoldier) {
    return {
        name: name,
        numberSoldier: numberSoldier
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

console.log(createPlayer("hagay", 8));

