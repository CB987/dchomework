const text = `you wish you were batman`;

const lettersToNumbers = {
    'A': '4',
    'E': '3',
    'G': '6',
    'I': '1',
    'O': '0',
    'S': '5',
    'T': '7'
}
// const lettersToConvert = ['A', 'E', 'G', 'I', 'O', 'S', 'T']
//object in JS is basically same as python dictionary
const textToTranslate = text.toUpperCase();
let translation = ``;
// let's loop through the string to translate


for (let letter of textToTranslate) {
    //if the letter is a key in our "dictionary"
    //and its value is not "falsey": flase, null, undefined, 0, NaN ...
const replacement = lettersToNumbers[letter];

    if (lettersToNumbers[letter]) {
        console.log(`changes to ${lettersToNumbers[letter]}`);
        translation = translation + replacement;
    } else {
        console.log(`stays the same`);
        translation = translation + letter;
    }
    //use the translation, otherwise just use the
    
    // original letter


}
console.log(translation);