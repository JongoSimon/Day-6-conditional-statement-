

let number = 10;
console.log(number > 0)
if (number > 0){
    console.log("The number is Positive!");
} else if (number < 0) {
    console.log("The number is Negative.")
} else {
    console.log("The number is zero.")
 }



 let score = 92;

 //? checking for a single condition
 if (score >=90) {
    console.log("Grade: A");
 }

 //?

 if(score >= 90) {
    console.log("Grade: A");
 } else {
    console.log("Grade: Not A");
 }


 //? Allows Multiple Conditions in SEQUENCE

 if(score >= 90 ) {
    console.log("Grade: A"); 
 }  else if(score >= 80) {
    console.log("Grade: B")
 }  else if(score >= 70) {
    console.log("Grade: C")
 }  else if(score >= 60) {
    console.log("Grade: D")
 }  else {
    console.log("Grade: F");
 }

 //? Nested Condition

 if(score >= 90) {
    if(score === 100) {
        console.log("Grade: A+ with honors")
    } else {
        console.log("Grade: A")
    }
 } else {
    console.log("Grade: Below A");
 }

 //? Yernary Operator = if/else statements

 let grade = score >= 90 ? 'A' : 'Not A';
 console.log('Grade:', grade);

 //? Switch Statement 

 let grades = 'B';

 switch (grade) {
    case 'A':
        console.log("Excellent !");
        break;
    case 'B':
        console.log("Good job!");
        break;
    case 'C':
        console.log("Needs Improvement.");
        break;
    default:
        console.log("Fail.");    
 }