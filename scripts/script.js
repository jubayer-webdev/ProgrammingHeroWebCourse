console.log('conted');

const seatAlpha = 'ABCDEFGHIJ';
let allSeatId = [];
for (let i = 0; i < seatAlpha.length; ++i) {
    allSeatId.push(seatAlpha[i] + 1);
    allSeatId.push(seatAlpha[i] + 2);
    allSeatId.push(seatAlpha[i] + 3);
    allSeatId.push(seatAlpha[i] + 4);
}

console.log(allSeatId);

for (let i = 0; i < allSeatId.length; i++) {
    const seatId = allSeatId[i];
    const element = document.getElementById(seatId);
    console.log(element);

    element.addEventListener('click', function () {
        setBackgroundColorById(seatId);
    });
}