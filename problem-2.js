

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

const output = validOtp("abc-4544")
console.log(output);