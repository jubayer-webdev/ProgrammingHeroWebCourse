function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem   = getInputValueById('pentagon-apothem');

    const area = 0.5 * perimeter * apothem;
    // console.log(area);
    setInnerTextById('pentagon-area', area)
}
// common function
// function getInputValueById(inputFieldId){
//     const inputField = document.getElementById(inputFieldId);
//     const inputValueText = inputField.value;
//     const inputValue = parseFloat(inputValueText);
//     return inputValue;
// }

// function setInnerTextById(elementId, area){
//     const element = document.getElementById(elementId);
//     element.innerHTML = area;
// }