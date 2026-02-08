function finalscore(omr){
    if(typeof omr !== "object" || ome === null || Array.isArray(omr)){
       return "Invalid"; 
    }

    const { right, wrong, skip } = omr;

    if(typeof right !== "number" || typeof wrong !== "number" || typeof skip !=="number"){
        return "Invalid";
    }
    else if(right + wrong + skip !==100){
        return "Invalid";
    }
    const totalScore =right -(wrong*0.5);
    return Math.round(totalScore);




}

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








//////
function finalScore(omr){
     if (typeof omr !== 'object' || omr === null || Array.isArray(omr)) {
        return "Invalid";   
    }

  const right = omr.right;
  const wrong = omr.wrong;
  const skip = omr.skip;







}