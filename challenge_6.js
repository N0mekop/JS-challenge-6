'use strict';

const dauphinsScore = [44, 23, 71];
const koalasScore = [65, 54, 49];

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dauphinsScoreAverage = calcAverage(
    dauphinsScore[0],
    dauphinsScore[1],
    dauphinsScore[2]
);

const koalasScoreAverage = calcAverage(
    koalasScore[0],
    koalasScore[1],
    koalasScore[2]
);

function checkWinner() {
    if (dauphinsScoreAverage > koalasScoreAverage) {
        return `L'équipe des Dauphins gagne (${dauphinsScoreAverage} vs ${koalasScoreAverage})`;
    } else {
        return `L'équipe des Koalas gagne (${koalasScoreAverage} vs ${dauphinsScoreAverage})`;
    }
}

console.log(checkWinner());