
//Problem 1:
function newPrice(currentPrice,discount){

    if(typeof currentPrice !=='number' || typeof discount !=='number' || discount <0 || discount>100){
        return "Invalid";
    }

    const discountAmount = (currentPrice*discount) /100;
    const price = currentPrice - discountAmount;
    return price.toFixed(3);
}

//Problem 2:

function validOtp(otp){
    if(typeof otp !== 'string'){
        return "Invalid";
    }
    else if(otp.length !==8){
        return false;
    }
    else if(otp.startsWith("ph-")){
        return true;
    }

    return true;
    
}

// Problem 3:
function finalScore(omr) {
    if (typeof omr !== 'object' || omr === null || Array.isArray(omr)) {
        return "Invalid";
    }

    const { right, wrong, skip } = omr;

    if (typeof right !== 'number' || typeof wrong !== 'number' || typeof skip !== 'number') {
        return "Invalid";
    }

    if ((right + wrong + skip) !== 100) {
        return "Invalid";
    }

    const totalScore = right  - (wrong * 0.5);
    return Math.round(totalScore);
}

problem 4: