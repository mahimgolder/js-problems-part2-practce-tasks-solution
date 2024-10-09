// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk

// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

// solution //
function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
    const perLaptopPrice = 35000; 
    const perTabletPrice = 15000;
    const perMobilePrice = 20000;

    const totalLaptopPrice = laptopQuantity * perLaptopPrice; 
    const totalTabletPrice = tabletQuantity * perTabletPrice;
    const totalMobilePrice = mobileQuantity * perMobilePrice;

    const totalPrice = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    return totalPrice;
}
const totalBudget = calculateElectronicsBudget(1, 1, 3);
console.log(totalBudget);
