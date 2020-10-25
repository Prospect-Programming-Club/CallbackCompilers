var ChemDataBase = {
    atomnames: []
}
class ChemProblem{
    constructor(category , difficulty){
        this.category = category;
        this.difficulty=difficulty;
    }
    generate(){
        
    }
}

var mathResult = {
    question: "",
    answer: 0
}

class MathProblem {

    constructor(category , difficulty){
        this.category = category;
        this.difficulty = difficulty;
    }

    generate(){

        if (category == "arithmetic") {
            var randLeftNum;
            var randRightNum;
            if (difficulty === "easy") {
                var randOp = Math.floor(Math.random() * 2) + 1;
                var randLeftNum;
                var randRightNum;
                if (randOp === 1) {// addition
                    randLeftNum = Math.floor(Math.random() * 51);
                    randRightNum = Math.floor(Math.random() * 51);
                    mathResult.answer = randLeftNum + randRightNum;
                    mathResult.question = randLeftNum + " + " + randRightNum;
                } else if (randOp === 2) {// subtraction
                    randLeftNum = Math.floor(Math.random() * 51);
                    randRightNum = Math.floor(Math.random() * 51);
                    mathResult.answer = randLeftNum - randRightNum;
                    mathResult.question = randLeftNum + " - " + randRightNum;
                } 
            } else if (difficulty === "medium") {
                var randOp = Math.floor(Math.random() * 2) + 1;
                var randLeftNum;
                var randRightNum;
                if (randOp === 1) {// multiplication
                    randLeftNum = Math.floor(Math.random() * 13);
                    randRightNum = Math.floor(Math.random() * 13);
                    mathResult.answer = randLeftNum * randRightNum;
                    mathResult.question = randLeftNum + " * " + randRightNum;
                } else if (randOp === 2) {// division
                    randLeftNum = Math.floor(Math.random() * 13);
                    randRightNum = Math.floor(Math.random() * 13);
                    while (randRightNum === 0) { // don't divide by zero
                        randRightNum = Math.floor(Math.random() * 13);
                    }
                    mathResult.answer = randLeftNum / randRightNum;
                    mathResult.question = randLeftNum + " ÷ " + randRightNum;
                }
            } else if (difficulty === "hard") {
                var randOp1 = Math.floor(Math.random() * 4) + 1;
                var randOp2 = Math.floor(Math.random() * 4) + 1;
                var randNum1 = Math.floor(Math.random() * 13);
                var randExp1 = Math.floor(Math.random() * 4);
                var randNum2 = Math.floor(Math.random() * 13);
                var randExp2 = Math.floor(Math.random() * 4);
                var randNum3 = Math.floor(Math.random() * 13);
                var randExp3 = Math.floor(Math.random() * 4);
                var answer1;
                var question1;
                if (randOp1 === 1) {
                    answer1 = Math.pow(randNum1, randExp1) + Math.pow(randNum2, randExp2);
                    question1 = randNum1 + "^" + randExp1 + " + " + randNum2 + "^" + randExp2;
                } else if (randOp1 === 2) {
                    answer1 = Math.pow(randNum1, randExp1) - Math.pow(randNum2, randExp2);
                    question1 = randNum1 + "^" + randExp1 + " - " + randNum2 + "^" + randExp2;
                } else if (randOp1 === 3) {
                    answer1 = Math.pow(randNum1, randExp1) * Math.pow(randNum2, randExp2);
                    question1 = randNum1 + "^" + randExp1 + " * " + randNum2 + "^" + randExp2;
                } else if (randOp1 === 4) {
                    answer1 = Math.pow(randNum1, randExp1) / Math.pow(randNum2, randExp2);
                    question1 = randNum1 + "^" + randExp1 + " ÷ " + randNum2 + "^" + randExp2;
                }
                if (randOp2 === 1) {
                    mathResult.answer = answer1 + Math.pow(randNum3, randExp3);
                    mathResult.question = question1 + " + " + randNum3 + "^" + randExp3;
                } else if (randOp2 === 2) {
                    mathResult.answer = answer1 - Math.pow(randNum3, randExp3);
                    mathResult.question = question1 + " - " + randNum3 + "^" + randExp3;
                } else if (randOp2 === 3) {
                    mathResult.answer = answer1 * Math.pow(randNum3, randExp3);
                    mathResult.question = question1 + " * " + randNum3 + "^" + randExp3;
                } else if (randOp2 === 4) {
                    mathResult.answer = answer1 / Math.pow(randNum3, randExp3);
                    mathResult.question = question1 + " ÷ " + randNum3 + "^" + randExp3;
                }

            }
        } else if (category === "algebra") {
            if (difficulty === "easy") {

            } else if (difficulty === "medium") {
                
            } else if (difficulty === "hard") {

            }
        }
    }
}