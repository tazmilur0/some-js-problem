function newPrice(currentPrice,discount){

    if(typeof currentPrice !=='number' || typeof discount !=='number' || discount <0 || discount>100){
        return "Invalid";
    }

    const discountAmount = (currentPrice*discount) /100;
    const price =currentPrice - discountAmount;
    return price.toFixed(3);
}

const output =newPrice(2000,17.17);
console.log(output);