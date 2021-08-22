//memory
function memory(mPrice) {
    const memory = document.getElementById('ext-memory');
    memory.innerText = mPrice;

    calculateTotal();


}

//ssd
function ssd(sPrice) {
    const ssd = document.getElementById('ext-storage');
    ssd.innerText = sPrice;
    calculateTotal();

}
//shipping
function shipping(shipCost) {
    const ssd = document.getElementById('delivery-charge');
    ssd.innerText = shipCost;
    calculateTotal();

}

// calculation 
function calculateTotal() {

    const productInput = document.getElementById('ext-memory');
    const price1 = parseInt(productInput.innerText);
    const productInput2 = document.getElementById('ext-storage');
    const price2 = parseInt(productInput2.innerText);
    const productInput3 = document.getElementById('delivery-charge');
    const price3 = parseInt(productInput3.innerText);

    const subTotal = price1 + price2 + price3 + 1299;
    document.getElementById('total-price').innerText = subTotal;
    document.getElementById('sub-total').innerText = subTotal;



}






//memory
document.getElementById('16-gb').addEventListener('click', function () {

    memory(180);



})
document.getElementById('8-gb').addEventListener('click', function () {

    memory(0);


})


///ssddd
document.getElementById('256-gb').addEventListener('click', function () {

    ssd(0);


})
document.getElementById('512-gb').addEventListener('click', function () {

    ssd(100);


})
document.getElementById('1024-gb').addEventListener('click', function () {

    ssd(180);


})

// delivery
document.getElementById('25-day').addEventListener('click', function () {

    shipping(0);


})
document.getElementById('21-day').addEventListener('click', function () {

    shipping(20);


})

// coupon code promo 

