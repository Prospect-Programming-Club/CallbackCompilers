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
            if(this.dificulty==1){this.problemIndex=0}
            if(this.dificulty==2){this.problemIndex=1}
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
                //second question
                
            }
        }
    }
}
class MathProblem{
    constructor(category , difficulty){

    }
}