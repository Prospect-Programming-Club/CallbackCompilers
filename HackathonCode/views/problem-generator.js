var ChemDataBase = {
    //data
    atomnames: ["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Flourine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Clorine"],
    molarmasses: [1.01,4.00,6.94,9.01,10.81,12.01,14.01,16.00,19.00,20.18,22.99,24.31,26.98,28.09,30.97,32.07,35.45],
    //problem templates, an answers, answers NOT yet converted to accepted type
    atomStringTemplates: [function(atomnum, charge){return "A "+ChemDataBase.atomnames[atomnum]+" atom has a charge of "+charge+".  How many electrons does it have?";},
                function(massnum,n){"A neutral atom has atomic mass "+massnum+"and "+n+" neutrons.  What atom is it?";}],
    atomProblemAnswers: [function(atomnum,charge){return atomnum-charge;},function(massnum,n){return ChemDataBase.atomnames[massnum-n];}],

    unitStringTemplates: [function(number){return "How many particles are there in "+number+" moles of a substance?  Enter your answer divided by 10^23";},
            function(number,atomnum){"How many moles are there of "+number+" grams of "+ChemDataBase.atomnames[atomnum]+"?";}],
    unitProblemAnswers: [function(number){return number*6.02;},function(number,atomnum){return number/ChemDataBase.molarmasses[atomnum];}]

};
function randIndexOf(arr){
    return Math.floor(Math.random()*arr.length);
}
function roundto(number,places){
    return round(Math.pow(10,places)*number) / Math.pow(10,places);
}
var categories = ["arithmetic","algebra","unit","atom"];
class ChemProblem{
    //difficulty 1 or 2
    constructor(category , difficulty){
        this.category = category;
        this.difficulty = difficulty;
        this.problemIndex; this.answer="NO_ANSWER"; this.output="NO_QUESTION";
        this.generate();
    }
    generate(){
        if(this.category=="unit"){
            this.problemIndex = randIndexOf(ChemDataBase.unitStringTemplates);
            if(this.difficulty==1){this.problemIndex=0}
            if(this.difficulty==2){this.problemIndex=1}
            if(this.problemIndex==0){
                //first question
                this.generateUsing(Math.random()*10*this.dificulty);
            }else{
                //second question
                this.generateUsing(Math.random()*8*this.dificulty,randIndexOf(ChemDataBase.atomnames));
            }
        }else if(this.category=="atom"){
            this.problemIndex = randIndexOf(ChemDataBase.unitStringTemplates);
            if(this.problemIndex==0){
                //first question
                this.generateUsing(Math.floor(Math.random()*4*this.dificulty)+1,Math.floor(Math.random*(2*this.difficulty+1))-this.dificulty);
            }else{
                this.generateUsing()
                
            }
        }
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

        if (this.category == "arithmetic") {
            var randLeftNum;
            var randRightNum;
            if (this.difficulty === "easy") {
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
            } else if (this.difficulty === "medium") {
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
            } else if (this.difficulty === "hard") {
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
        } else if (this.category === "algebra") {// TO BE DEVELOPED
            if (this.difficulty === "easy") {

            } else if (this.difficulty === "medium") {
                
            } else if (this.difficulty === "hard") {

            }
        }
    }
}