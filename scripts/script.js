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
        //* update total-seat
        setTotal('total-select-seat', totalSeatCount);
        //* update remain-seat
        setTotal('remain-seat', 40 - totalSeatCount);
        //?apply-button enable
        if (totalSeatCount >= 4) {
            removeBtnDisableClass('apply-btn');
        }


        setBackgroundColorById(seatId);
        setTitleContainerValue(seatId);
        setBtnDisableClass(seatId);

        setTotal('total-price', totalSeatCount * 550);
        setTotal('grand-total', totalSeatCount * 550);

        //?Phone number in the input field
        console.log('pnoneNumber.length = ', phoneNumber.length);
        if (phoneNumber.length != 0) {
            removeBtnDisableClass('next-button');
        }
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
        removeBtnDisableClass('next-button');
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
    setTotal('grand-total', totalTaka - offerValue);
    // offer value
    setTotal('offer-price', offerValue);
    //hidden the apply-button and show the offer price
    applyBtnContainer.classList.add('hidden');
    offerContainer.classList.remove('hidden');
});

//*Modal
const nextBtnElement = document.getElementById('next-button');
nextBtnElement.addEventListener('click', function (event) {
    event.preventDefault();
    my_modal_5.showModal();
});

//*reset value through refresh the page
const modalContinueBtnElement = document.getElementById('modal-continue-btn');
modalContinueBtnElement.addEventListener('click', function () {
    document.location.reload();
});