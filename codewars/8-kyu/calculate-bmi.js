/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/


//My Solution
function bmi(weight, height) {
  let bmiValue = weight / height **2
  //** 2, JavaScript will square the height

  if (bmiValue <= 18.5){
    return "Underweight"
  }else if (bmiValue <= 25.0){
    return "Normal"
  }else if (bmiValue <= 30.0){
    return "Overweight"
  }else{
    return "Obese";
  }
}

//Different Solution

//Solution#1
function bmi(weight, height) {
 let bmi = weight / (height * height);
 switch(true){
   case bmi <= 18.5:
     return "Underweight";
   case bmi <= 25.0:
     return "Normal";
   case bmi <= 30.0:
     return "Overweight";
   case bmi > 30:
     return "Obese";
  }
}

//Solution#2
function bmi(weight, height) {
  const $ = weight / height**2;
  return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
}