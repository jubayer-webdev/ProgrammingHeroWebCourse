
//! option 1
// function calculateParallelogramArea() {
//     // get base of the parallelogram
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);

//     // get height of the parallelogram
//     const heightInput = document.getElementById('parallelogram-height');
//     const heightText = heightInput.value;
//     const height = parseFloat(heightText);

//     // calculate parallelogram area
//     const area = base * height;

//     // display parallelogram area
//     const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//     parallelogramAreaSpan.innerHTML = area;
// }

//! option 2
function calculateParallelogramArea(){
    const base   = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');

    const area = base * height;
    setInnerTextById('parallelogram-area', area)
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