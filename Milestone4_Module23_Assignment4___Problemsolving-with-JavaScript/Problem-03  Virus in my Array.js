//! pre-requirement----: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

/*function signature/sample */
function deleteInvalids(array) {
    // You have to write your code here
    if (Array.isArray(array) === false) {
        return `Please provide a valid array...`;
    }

    let validArray = [];
    for (const element of array) {
        // console.log(`type of ${element} = ${typeof element}`);
        //NaN === 'number'
        if (typeof element === 'number' && !Number.isNaN(element)) {
            validArray.push(element);
        }
    }
    return validArray;
}

console.log(`1 deleteInvalids = ${deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])}`);
console.log(`2 deleteInvalids = ${deleteInvalids(["1", {num:2}, NaN])}`);
console.log('2 deleteInvalids =',deleteInvalids(["1", {num:2}, NaN]));
console.log(`3 deleteInvalids = ${deleteInvalids([ 1 , 2 , -3 ])}`);
console.log(`4 deleteInvalids = ${deleteInvalids({num: [ 1 , 2 , 3 ]})}`);



const a = [];
console.log('\na =', a);
console.log(`a = ${a}`);