function calculateRhombusArea(){
    const diag1 = getInputValueById('rhombus-diagonal-1');
    const diag2 = getInputValueById('rhombus-diagonal-2');

    const area = 0.5 * diag1 * diag2;
     console.log(area);
    setInnerTextById('rhombus-area', area)
}