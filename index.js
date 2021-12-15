// Your code here
function saturdayFun(string){
    if (typeof string === 'undefined'){
        return "This Saturday, I want to roller-skate!";
    }
    else{
    return `This Saturday, I want to ${string}!`;
    }
}
function mondayWork(string){
    if (typeof string === 'undefined'){
        return "This Monday, I will go to the office.";
    }
    else{
    return `This Monday, I will ${string}.`;
    }
}

function wrapAdjective(string){
       return function (special){
        return `You are ${string}${special}${string}!`;
    }
}

wrapAdjective("*")("a hard worker");

const Calculator = {
    add: function(num1, num2){
        return num1 + num2;
    },
    subtract: function (num1, num2){
        return num1 - num2;
    },
    multiply: function (num1, num2){
        return num1 * num2;
    },
    divide: function (num1, num2){
        return num1 / num2;
    }
}

Calculator.add(1,3);
Calculator.subtract(1,3);
Calculator.multiply(1,3);
Calculator.divide(10,5);

const arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
]

function actionApplyer(a,array){
    if (array&&a===0){
        
        console.log(`start ${a}`);
        return a;
    }
    else{
      
       for (let i=0; i<array.length; i++){
            a = array[i](a);
        }
        let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
        console.log(message);
        return a;
        
       
    
    
    }    
}
actionApplyer(13,arrayOfTransforms);