const text = `you wish you were batman`;

const lettersToConvert = ['A', 'E', 'G', 'I', 'O', 'S', 'T'];
const numbers          = [ 4,   3,   6,   1,   0,   5,   7];

const textToTranslate = text.toUpperCase();
let translation = ``;

// ES6-style array iteration
// equivalent of python for-loop
for (let letter of textToTranslate) {
    //check to see if the current letter is in `lettersToConvert'
    let index = lettersToConvert.indexOf(letter);
    // if(lettersToConvert.indexOf(letter) !== -1) {
    if (index !== -1) {
    //if so, grab the index
        let index = lettersToConvert.indexOf(letter);
    //use the index to grad the corresponding item from `numbers`
        translation = translation + numbers[index];

    //else, just use the original letter
    } else {
        translation = translation + letter;
    }
    //console.log(lettersToConvert.indexOf(letter));

}


console.log(translation);

