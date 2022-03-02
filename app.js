function quantityUpdate(product,price,isIncreasing){
    const productInput = document.getElementById(product + '-quantity');
    let productNumber = parseInt(productInput.value);
    if(isIncreasing){
        productNumber = productNumber + 1;
    }else if(productNumber > 1){
        productNumber = productNumber - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
}
//total
function calculateTotal(){
    //phone
    const phoneTotal = parseInt(document.getElementById('phone-total').innerText);
    //case
    const caseTotal = parseInt(document.getElementById('case-total').innerText);
    //sub-total 
    const subTotal = phoneTotal + caseTotal;
    document.getElementById('sub-total').innerText = subTotal;
    //tax
    const tax = (subTotal * 5) / 100;
    document.getElementById('tax').innerText = tax;
    //total
    document.getElementById('total').innerText = subTotal + tax;
}
calculateTotal();

//phone
document.getElementById('phone-plus').addEventListener('click',()=>{
    quantityUpdate('phone',1219,true);
});
document.getElementById('phone-minus').addEventListener('click',()=>{
    quantityUpdate('phone',1219,false);
});
//case
document.getElementById('case-plus').addEventListener('click',()=>{
    quantityUpdate('case',59,true);
});
document.getElementById('case-minus').addEventListener('click',()=>{
    quantityUpdate('case',59,false);
});