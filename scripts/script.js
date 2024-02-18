console.log('connected script.js');

let totalSeatCount = 0;
let phoneNumber = '';

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

    element.addEventListener('click', function () {

        if (totalSeatCount >= 4) {
            return alert(`You can't buy more than 4 tickets at a time`);
        }
        //count the seat
        totalSeatCount++;
        setTotalSeatNumber();
        //?appy button enable
        if (totalSeatCount >= 4) {
            const applyBtnElement = document.getElementById('apply-btn');
            applyBtnElement.classList.remove('btn-disabled');
        }


        setBackgroundColorById(seatId);
        setTitleContainerValue(seatId);
        setBtnDisableClass(seatId);
        setTotalPriceValue();
        setTotalGrantPriceValue();

        removeBtnDisableClass();
    });
}

//? next button enable
const phoneNumberInput = document.getElementById('phone-number');
phoneNumberInput.addEventListener('keypress', function (event) {
    const keyValue = parseInt(event.key);
    console.log('typeof keyValue = ', typeof keyValue);
    console.log('isNaN(keyValue) = ', isNaN(keyValue));
    //!to check the keypress key is a number or not
    if (typeof keyValue === 'number' && !isNaN(keyValue)) {
        phoneNumber = event.key;
    }
    console.log('phoneNumber = ', phoneNumber.length);
    if (totalSeatCount > 0 && phoneNumber.length > 0) {
        const nextBtn = document.getElementById('next-button');
        nextBtn.classList.remove('btn-disabled');
    }
});
