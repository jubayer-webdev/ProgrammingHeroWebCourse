// !My File

const loadPhone = async (searchText = 13, isShowAll) => {

    // const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);

    const data = await res.json();
    // console.log(data);
    const phones = data.data;

    //! Calling The displayPhones function.
    displayPhones(phones, isShowAll);

}


const displayPhones = (phones, showAllClicked) => {
    // console.log(`in displayPhones function phones = `, phones);

    //! 1 get the place where we will add our cards
    const phoneContainer = document.getElementById('phone-container');
    //! clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    //! display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container');
    //! here (&& !showAllClicked) is added to hide the button when it is clicked
    if (phones.length > 12 && !showAllClicked) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }
    // console.log('is show all', isShowAll)
    //! display only first 12 phones if "Show All" button is not clicked
    if (!showAllClicked) {
        phones = phones.slice(0, 12);
    }
    // //! by me: to hide "Show All" button when it is clicked
    // else{
    //     console.log(`in displayPhones function logic added by me`);
    //     showAllContainer.classList.add('hidden');
    // }


    phones.forEach(phone => {
        // console.log(`in forEach in displayPhones Function phone = `, phone);
        // ! 2 create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        //! 3: set inner html
        //! https://daisyui.com/components/card/
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
        //! 4 append child
        phoneContainer.appendChild(phoneCard);
    });

    //! hide loading spinner
    toggleLoadingSpinner(false);
}

//! For The Modals
//! The id came from displayPhones function.
const handleShowDetail = async (id) => {
    // console.log('clicked show details', id)
    //! load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;

    showPhoneDetails(phone);
}

const showPhoneDetails = (phone) => {
    console.log(phone);
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');

    showDetailContainer.innerHTML = `
        <img src="${phone.image}" alt="" />
        <p><span>Storage:</span>${phone?.mainFeatures?.storage}</p>
        <p><span>GPS:</span>${phone?.others?.GPS || 'No GPS available'}</p>
        <-- ! This is ternary operator -->
        <p><span>GPS:</span>${phone.others?.GPS ? phone.others.GPS : 'No GPS available in this device'}</p>
    `;

    //! show the modal
    show_details_modal.showModal();
}

//! handle search button (THE MAIN FUNCTION)
const handleSearch = (showAllClicked) => {
    //!start to show the LoadingSpinner
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(`in handleSearch function searchText = ${searchText}`);
    loadPhone(searchText, showAllClicked);
}

//! toggleLoadingSpinner
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}

//! handle show all
const handleShowAll = () => {
    handleSearch(true);
}

//! This return Promise
console.log(loadPhone()); //calling the function for first timing display