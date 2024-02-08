/*function signature/sample */
function checkName(name) {
    //write your code here
    if (typeof name !== 'string') {
        return `invalid`;
    }

    //convert the string intoLowerCase
    const givenName = name.toLowerCase();

    let nameQuality = 'Bad Name';
    if (givenName.endsWith('a') || givenName.endsWith('e') || givenName.endsWith('i') || givenName.endsWith('o') || givenName.endsWith('u') || givenName.endsWith('w') || givenName.endsWith('y')) {
        nameQuality = 'Good Name';
    }
    return nameQuality;
}

console.log(`1 nameQuality = ${checkName('Salman')}`);
console.log(`2 nameQuality = ${checkName('RAFEE')}`);
console.log(`3 nameQuality = ${checkName('Jhankar')}`);
console.log(`4 nameQuality = ${checkName(199)}`);
console.log(`5 nameQuality = ${checkName(["Rashed"])}`);