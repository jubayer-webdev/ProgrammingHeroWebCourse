const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product, quantity);

    //!if there is no value in product or quantity
    if (!product || !quantity) return;

    //!calling the displayProduct
    displayProduct(product, quantity);
    //!to save product,quantity on localStorage
    saveProductToLocalStorage(product, quantity);
}

//!to show the product, quantity in web page dynamically
const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

//!for getting the previous cart data
const getStoredShoppingCart = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if (storedCart) {
        //!convert JSON to object
        cart = JSON.parse(storedCart);
    }
    return cart;
}

//!to set product,quantity on localStorage
const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    console.log(`JSON.stringify(cart) = ${cartStringified}`);

    //!set on localStorage
    localStorage.setItem('cart', cartStringified);
}

//!to show localStorage data on reload, or another tab in same browser
const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    console.log('savedCart = ', savedCart);
    console.log(`savedCart = ${savedCart}`);
    for (const product in savedCart) {
        const quantity = savedCart[product];
        console.log(product, quantity);
        //!show on web page when reload or another tab
        displayProduct(product, quantity);
    }
}
//!calling the function on reload, or another tab in same browser
displayProductsFromLocalStorage();