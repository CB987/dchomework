const text = `you wish you were batman`;

const lettersToConvert = ['A', 'E', 'G', 'I', 'O', 'S', 'T'];
const numbers          = [ 4,   3,   6,   1,   0,   5,   7];

const textToTranslate = text;
// let translation = ``;

// a function that accepts a letter as an argument
// it will return either the translation or the original lettersToConvert.

//python: def translate(letter):
function translate(letter) {
    const upperLetter = letter.toUpperCase();
    const lettersToNumbers = {
        'A': '4',
        'E': '3',
        'G': '6',
        'I': '1',
        'O': '0',
        'S': '5',
        'T': '7'
    };

    const replacement = lettersToNumbers[upperLetter];
    // if (replacement) {
    //     return replacement;
    // } else {
    //     return letter;

    // return replacement if it's truthy else return letter:
    return replacement || letter;
    // aka "short circuit evaluation"
    }
function translateSentence(sentence) {
    let translation = ``;
    for (let character of sentence) {
        translation = translation + translate(character);
    }   
    return translation;
}
console.log(translateSentence(textToTranslate));