
// Step 1: sab se pehla user se prompt len ga Day,month aur year ka.


const userbirthDay = parseInt(prompt("Enter your birth day (1-31):"), 10);
const userBirthMonthInput = prompt("Enter your birth month (e.g., 'Jan', 'January', or '01'):");
const userbirthYear = parseInt(prompt("Enter your birth year (e.g., 1990):"), 10);

// Step 2:aik variable banaya aur birthmonth ka phir userBirthMonthInput ko lowercase kr diya
//kyun ka agar user capital words bhe likha ga tw wo usa lowercase me kr de ga.
let birthMonth;
birthMonthInputLower = userBirthMonthInput.toLowerCase();

if (birthMonthInputLower === 'january' || birthMonthInputLower === 'jan' || birthMonthInputLower === '01' || birthMonthInputLower === '1') {
    birthMonth = 0; // January
} else if (birthMonthInputLower === 'february' || birthMonthInputLower === 'feb' || birthMonthInputLower === '02' || birthMonthInputLower === '2') {
    birthMonth = 1; // February
} else if (birthMonthInputLower === 'march' || birthMonthInputLower === 'mar' || birthMonthInputLower === '03' || birthMonthInputLower === '3') {
    birthMonth = 2; // March
} else if (birthMonthInputLower === 'april' || birthMonthInputLower === 'apr' || birthMonthInputLower === '04' || birthMonthInputLower === '4') {
    birthMonth = 3; // April
} else if (birthMonthInputLower === 'may' || birthMonthInputLower === '05' || birthMonthInputLower === '5') {
    birthMonth = 4; // May
} else if (birthMonthInputLower === 'june' || birthMonthInputLower === 'jun' || birthMonthInputLower === '06' || birthMonthInputLower === '6') {
    birthMonth = 5; // June
} else if (birthMonthInputLower === 'july' || birthMonthInputLower === 'jul' || birthMonthInputLower === '07' || birthMonthInputLower === '7') {
    birthMonth = 6; // July
} else if (birthMonthInputLower === 'august' || birthMonthInputLower === 'aug' || birthMonthInputLower === '08' || birthMonthInputLower === '8') {
    birthMonth = 7; // August
} else if (birthMonthInputLower === 'september' || birthMonthInputLower === 'sep' || birthMonthInputLower === 'sept' || birthMonthInputLower === '09' || birthMonthInputLower === '9') {
    birthMonth = 8; // September
} else if (birthMonthInputLower === 'october' || birthMonthInputLower === 'oct' || birthMonthInputLower === '10') {
    birthMonth = 9; // October
} else if (birthMonthInputLower === 'november' || birthMonthInputLower === 'nov' || birthMonthInputLower === '11') {
    birthMonth = 10; // November
} else if (birthMonthInputLower === 'december' || birthMonthInputLower === 'dec' || birthMonthInputLower === '12') {
    birthMonth = 11; // December
} else {
    alert("Invalid month input");

}

const today = new Date();
const userBirthDate = new Date(userbirthYear, birthMonth, userbirthDay);

// idhar user ke years,months,aur days ka difference nikala ha 
let userageYears = today.getFullYear() - userBirthDate.getFullYear();
let userageMonths = today.getMonth() - userBirthDate.getMonth();
let userageDays = today.getDate() - userBirthDate.getDate();

// agar birth day day is mahinay nhi aya tw ya is liya ha 
if (userageDays < 0) {
    userageMonths -= 1;
    const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
    userageDays += daysInLastMonth;
}

// agar birth month is saal nhi aya tw ya is liya ha 
if (userageMonths < 0) {
    userageYears -= 1;
    userageMonths += 12;
}

// Step 4: finally ya result show hoga 
swal(`Your Age is ${userageYears} years, ${userageMonths} months, and ${userageDays} days!`);
