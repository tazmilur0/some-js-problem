//Problem-01: New Price for Eid Sale
function newPrice(currentPrice,discount){
    if(typeof currentPrice !=='number' || typeof discount !=='number' || discount <0 || discount>100){
        return "Invalid";
    }
    const discountAmount =(currentPrice*discount) /100;
    const price =currentPrice - discountAmount;
    return price.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift
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

//Problem-03: BCS Final Score Calculator
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

//Problem-04: Upcoming Gono Vote
function gonoVote(array){
if(!Array.isArray(array)){
    return "Invalid";
}

let haVot =0;
let naVot =0;

for(let vote of array){

    if(vote === "ha"){
    haVot++;
    }
    else if(vote === "na"){
    naVot++;
    }
}

if(haVot>naVot){
    return true;

}
else if(haVot === naVot){
    return "equal";
}
else{
    return false;
}


}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str){
  if(typeof str !== "string"){
    return "Invalid";
  }

if(str.trim().length === 0){
  return "Invalid";
}

const token =str.split(" ").join("").length;

const words = str.split(" ");

let largeword = " ";

for(let word of words){
  if(word.length >largeword.length){
    largeword = word;
  }
}

return {
  longwords:largeword,
  token:token
};

}

