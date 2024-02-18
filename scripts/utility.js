console.log('connected utility.js');

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    console.log('element = ', element);
    //! এটা দিলে bg-[#F7F8F8] এবং bg-[#1DD100] থাকার কারনে সবুজ হয় না;
    // element.classList.add('bg-[#1DD100]');
    element.style.backgroundColor = '#1DD100';
}

//* create and set the clicked seat on chart
function setTitleContainerValue(elementId) {
    const parent = document.getElementById('title-container');

    const newDiv = document.createElement('div');

    const newParagraph1 = document.createElement('p');
    newParagraph1.innerHTML = `<p>${elementId}</p>`;
    newDiv.appendChild(newParagraph1);
    const newParagraph2 = document.createElement('p');
    newParagraph2.innerHTML = `<p>Economy<p>`;
    newDiv.appendChild(newParagraph2);
    const newParagraph3 = document.createElement('p');
    newParagraph3.innerHTML = `<p>550<p>`;
    newDiv.appendChild(newParagraph3);

    //*to show them side by side
    newDiv.classList.add('flex', 'justify-between')

    parent.appendChild(newDiv);
}

//! prevent to buy a specific seat in more than one times
function setBtnDisableClass(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('btn-disabled');
}
//* to set the total-price or total-grand-price or offer-price
function setTotal(element, totalTaka) {
    element.innerText = totalTaka;
}

//* update total-seat
function setTotalSeatNumber() {
    const element = document.getElementById('total-select-seat');
    console.log(element);
    element.innerText = totalSeatCount;
}
//* check the phone number to remove btn-disabled class
function removeBtnDisableClass() {
    //?Phone number in the input field
    console.log('in function removeBtnDisableClass pnoneNumber.length = ', phoneNumber.length);
    if (phoneNumber.length != 0) {
        const nextBtn = document.getElementById('next-button');
        nextBtn.classList.remove('btn-disabled');
    }
}