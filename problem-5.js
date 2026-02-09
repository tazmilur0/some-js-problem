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

const output =analyzeText("I am a little honest person")

;
console.log(output);
