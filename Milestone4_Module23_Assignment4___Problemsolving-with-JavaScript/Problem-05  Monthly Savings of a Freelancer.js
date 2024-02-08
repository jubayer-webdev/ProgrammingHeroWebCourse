/*function signature/sample */
function monthlySavings(arr, livingCost) {
    // You have to write your code here
    if (Array.isArray(arr) === false) {
        return `invalid input`;
    }
    //NaN === 'number'
    // if (typeof livingCost !== 'number' && !Number.isNaN(livingCost)) {
    //     return `invalid input`;
    // }
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

console.log(`1 monthlySavings = ${monthlySavings([ 1000 , 2000 , 3000 ] , 5400)}`);
console.log(`2 monthlySavings = ${monthlySavings([ 1000 , 2000 , 2500 ] , 5000)}`);
console.log(`2 monthlySavings = ${monthlySavings([ 900 , 2700 , 3400] , 10000)}`);
console.log(`2 monthlySavings = ${monthlySavings(100, [ 900 , 2700 , 3400])}`);