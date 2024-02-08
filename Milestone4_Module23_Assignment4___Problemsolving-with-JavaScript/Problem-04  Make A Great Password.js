/**
 * *! pre-requirement ---: 
   //!https://www.freecodecamp.org/news/how-to-check-if-a-property-exists-in-a-javascript-object/

   //! https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
*/


/*function signature/sample */
function password(obj) {
    //write your code here
    
    // if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
    //     return `invalid`
    // }

    if(!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName') || obj.birthYear.toString().length !== 4){
        return `invalid`
    }

    let newPassword = obj.siteName + '#' + obj.name + '@' + obj.birthYear;
    newPassword = newPassword.charAt(0).toUpperCase() + newPassword.slice(1);

    return newPassword;
}

const obj = {
    name: 'kolimuddin',
    // birthYear: 1999,
    siteName: 'google'
};
console.log(obj.birthYear);

const obj1 = { name: "kolimuddin" , birthYear: 1999 , siteName: "google" };
console.log(`1 password = ${password(obj1)}`);

const obj2 = { name: "rahat" , birthYear: 2002, siteName: "Facebook" };
console.log(`2 password = ${password(obj2)}`);

const obj3 = { name: "toky" , birthYear: 200, siteName: "Facebook" };
console.log(`2 password = ${password(obj3)}`);

const obj4 = { name: "maisha" , birthYear: 2002 }
console.log(`2 password = ${password(obj4)}`);