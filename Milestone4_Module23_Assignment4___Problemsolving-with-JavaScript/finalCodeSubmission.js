//Problem-01  Help The Zoo Manager
function calculateMoney(ticketSale) {
    if(ticketSale < 0){
        return `Invalid Number...Please give a positive number(0 <= number).`;
    }

    const perTicketPrice = 120;
    const totalTaka = ticketSale * perTicketPrice;
    const fixedCost = 900;
    const remainTaka = totalTaka - fixedCost;
    return remainTaka;
}
//Problem-02  Good Name , Bad Name
function checkName(name) {
    if (typeof name !== 'string') {
        return `invalid`;
    }

    const givenName = name.toLowerCase();

    let nameQuality = 'Bad Name';
    if (givenName.endsWith('a') || givenName.endsWith('e') || givenName.endsWith('i') || givenName.endsWith('o') || givenName.endsWith('u') || givenName.endsWith('w') || givenName.endsWith('y')) {
        nameQuality = 'Good Name';
    }
    return nameQuality;
}
//Problem-03  Virus in my Array
function deleteInvalids(array) {
    if (Array.isArray(array) === false) {
        return `Please provide a valid array...`;
    }

    let validArray = [];
    for (const element of array) {
        if (typeof element === 'number' && !Number.isNaN(element)) {
            validArray.push(element);
        }
    }
    return validArray;
}
//Problem-04  Make A Great Password
function password(obj) {
    if(!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName') || obj.birthYear.toString().length !== 4){
        return `invalid`
    }

    let newPassword = obj.siteName + '#' + obj.name + '@' + obj.birthYear;
    newPassword = newPassword.charAt(0).toUpperCase() + newPassword.slice(1);

    return newPassword;
}
//Problem-05  Monthly Savings of a Freelancer
function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) === false) {
        return `invalid input`;
    }
    if(typeof livingCost !== 'number'){
        return `invalid input`;
    }

    let totalTaka = 0;
    for(const payment of arr){
        let currentPayment = payment;
        if(currentPayment > 2999){
            currentPayment = currentPayment - (currentPayment / 5);
        }
        totalTaka += currentPayment;
    }

    const savingsTaka = totalTaka - livingCost;
    if(savingsTaka < 0)return `earn more`;
    return savingsTaka;
}