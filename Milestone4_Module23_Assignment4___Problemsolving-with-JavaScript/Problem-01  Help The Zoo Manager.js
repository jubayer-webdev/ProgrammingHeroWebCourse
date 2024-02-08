/*function signature/sample */
function calculateMoney(ticketSale) {
    // You have to write your code here
    if(ticketSale < 0){
        return `Invalid Number...Please give a positive number(0 <= number).`;
    }

    const perTicketPrice = 120;
    const totalTaka = ticketSale * perTicketPrice;
    const fixedCost = 900;
    const remainTaka = totalTaka - fixedCost;
    return remainTaka;
} 

console.log(`1 remainTaka = ${calculateMoney(10)}`);
console.log(`2 remainTaka = ${calculateMoney(1055)}`);
console.log(`3 remainTaka = ${calculateMoney(93)}`);
console.log(`4 remainTaka = ${calculateMoney(-130)}`);
console.log(`5 remainTaka = ${calculateMoney(0)}`);
console.log(`6 remainTaka = ${calculateMoney(2)}`);