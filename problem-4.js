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

// function gonoVote(array) {
//   if (!Array.isArray(array)) {
//     return "Invalid";
//   }

//   let haCount = 0;
//   let naCount = 0;

//   for (let vote of array) {
//     if (vote === "ha") {
//       haCount++;
//     } else if (vote === "na") {
//       naCount++;
//     }
//   }

//   if (haCount > naCount) {
//     return true;
//   } else if (haCount === naCount) {
//     return "equal";
//   } else {
//     return false;
//   }
// }

const output =gonoVote(["ha", "ha", "ha", "na"]);
console.log(output);