function bmiCalculator(weight,height){
    return weight * (weight / height );
}

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);