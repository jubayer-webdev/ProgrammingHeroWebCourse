console.log('connected script.js');

let totalSeatCount = 0;
let phoneNumber = '';

//*generates all id
const seatAlpha = 'ABCDEFGHIJ';
let allSeatId = [];
for (let i = 0; i < seatAlpha.length; ++i) {
    allSeatId.push(seatAlpha[i] + 1);
    allSeatId.push(seatAlpha[i] + 2);
    allSeatId.push(seatAlpha[i] + 3);
    allSeatId.push(seatAlpha[i] + 4);
}

console.log(allSeatId);

//*addEventListener to all seats
for (let i = 0; i < allSeatId.length; i++) {
    const seatId = allSeatId[i];
    const element = document.getElementById(seatId);

    element.addEventListener('click', function () {

        if (totalSeatCount >= 4) {
            return alert(`You can't buy more than 4 tickets at a time`);
        }
        //*count the seat
        totalSeatCount++;
        setTotalSeatNumber();
        //?apply-button enable
        if (totalSeatCount >= 4) {
            const applyBtnElement = document.getElementById('apply-btn');
            applyBtnElement.classList.remove('btn-disabled');
        }


        setBackgroundColorById(seatId);
        setTitleContainerValue(seatId);
        setBtnDisableClass(seatId);

        const totalElement = document.getElementById('total-price');
        setTotal(totalElement, totalSeatCount * 550);
        const grandElement = document.getElementById('grand-total');
        setTotal(grandElement, totalSeatCount * 550);

        removeBtnDisableClass();
    });
}

//? next button enable
const phoneNumberInput = document.getElementById('phone-number');
phoneNumberInput.addEventListener('keypress', function (event) {
    const keyValue = parseInt(event.key);
    //*dbg the typeof of event.key
    console.log('typeof keyValue = ', typeof keyValue);
    console.log('isNaN(keyValue) = ', isNaN(keyValue));
    //!to check the key value is a number or not
    if (typeof keyValue === 'number' && !isNaN(keyValue)) {
        phoneNumber = event.key;
    }
    console.log('phoneNumber = ', phoneNumber.length);
    if (totalSeatCount > 0 && phoneNumber.length > 0) {
        const nextBtn = document.getElementById('next-button');
        nextBtn.classList.remove('btn-disabled');
    }
});


//!DRY (Don't Repeat Yourself)
//? NEW15 or COUPLE20 ------- apply button 
const applyBtnElement = document.getElementById('apply-btn');
applyBtnElement.addEventListener('click', function () {
    const couponValue = document.getElementById('apply-btn-input-field').value;
    //* help from M5Conceptual 1 ; 38:15 Minute
    //*find out the input value and make to toUpperCase();
    const couponCode = couponValue.split(" ").join("").toUpperCase();
    console.log('couponCode = ', couponCode);

    //if input coupon is invalid
    if (couponCode !== 'NEW15' && couponCode !== 'COUPLE20') {
        return alert('You give a invalid coupon!!');
    }

    //*here totalSeatCount will always be 4
    const grandElement = document.getElementById('grand-total');
    const offerElement = document.getElementById('offer-price');
    const totalTaka = totalSeatCount * 550;
    const applyBtnContainer = document.getElementById('apply-btn-container');
    const offerContainer = document.getElementById('offer-container');

    let offerValue = 0;
    if (couponCode === 'NEW15') {
        offerValue = (totalTaka * 0.15).toFixed(2);
    }
    else if (couponCode === 'COUPLE20') {
        offerValue = (totalTaka * 0.2).toFixed(2);
    }
    // Grand Total:
    setTotal(grandElement, totalTaka - offerValue);
    // offer value
    setTotal(offerElement, offerValue);
    //hidden the apply-button and show the offer price
    applyBtnContainer.classList.add('hidden');
    offerContainer.classList.remove('hidden');
});
