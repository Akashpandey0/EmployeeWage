const IS_ABSENT=0
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck == IS_ABSENT){
    console.log("Employee is Absent");
    return ;
}
else {
    console.log("Employee is Present");
}

//Uc2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHrs =0;
empCheck=Math.floor(Math.random()*10)%3;
// switch (empCheck){
//     case IS_PART_TIME:
//         empHrs=PART_TIME_HOURS;
//         break;
//     case IS_FULL_TIME:
//         empHrs=FULL_TIME_HOURS;
//         break;
//     default:
//         empHrs=0;
// }
// let empWage=empHrs*WAGE_PER_HOUR;
// console.log("Emp Wage: "+empWage);

//UC3
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
empHrs=0;
empCheck=Math.floor(Math.random()*10)%3;
empHrs = getWorkingHours(empCheck);
empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Wage: "+empWage);

//UC4
const NUM_OF_WORKING_DAYS=20;
empHrs=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=getWorkingHours(empCheck);
}
empWage=empHrs*WAGE_PER_HOUR;
console.log("Total Hrs "+empHrs+" Emp Wage: "+empWage);

//UC5
const MAX_HRS_IN_MONTH=160;
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkingHours(empCheck);
}
empWage=totalEmpHrs*WAGE_PER_HOUR;
console.log("UC5-Total Days:"+totalWorkingDays+" Total hrs:"+totalEmpHrs +" Emp Wage:"+empWage);

//UC-6 storing the daily wage in an array and also calculating totalWage

function getWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

const maxWorkingHrs = 160;
const maxWorkingDays = 20;

totalEmpHrs = 0;
totalWorkingDays = 0;
let dailyWages = new Array();

numberOfTotalDays = 0;

while(totalEmpHrs <= maxWorkingHrs && numberOfTotalDays < maxWorkingDays){
    
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;

    dailyWages.push(getWage(empHrs));

    numberOfTotalDays++;

}

empWage = totalEmpHrs*WAGE_PER_HOUR;
console.log("Total working days are : "+numberOfTotalDays+", Total working hours are : "+totalEmpHrs+", Wage of Employee is : "+empWage);