//here i created an variable which contains an array of fruits
let fruits = ["Apple", "Orange", "Banana", 'Pear', "Peach", "Strawberry", "Cherry", "Acai"]
//we iterate through the array fruits 
for (const fruit in fruits) {
    //here we created 2 new variables called vowels and consonants
    let vowels = 0
    let consonants = 0

    // here we are going through all the letters of that fruit
    for (let i = 0; i < fruits[fruit].length; i++) {
        //here we outlined the vowels and made sure they are lower case so it dont confuse the upper case vowels.
        if (vowelChecker(fruits[fruit][i])) {
            vowels = vowels + 1;
        }
        // if the letter is not a vowel it will add 1 to the consonants
        else {
            consonants = consonants + 1;
        }
    }

    // we will break the sentence into the beginning the vowelsPart and the consonantsPart

    let beginner = 'A'

    // this will check through the vowels of the first letter, if its a vowel it will add an n to A
    if (vowelChecker(fruits[fruit][0])) {
        beginner = beginner + 'n'
    }


    let vowelsPart = `${vowels} vowel`
    //this will check if vowels is not 1 then it will add a s to the work vowel
    if (vowels != 1) {
        vowelsPart = vowelsPart + 's'
    }

    let consonantsPart = `${consonants} consonant`
    //this will check if constant is not 1 then it will add a s to the work consonant
    if (consonants != 1) {
        consonantsPart = consonantsPart + 's'
    }

    // we will print the out of each fruits and how many vowels and consonents its got

    console.log(`${beginner} ${fruits[fruit]} has ${vowelsPart} and ${consonantsPart} `)
}
// this vowell check will take a letter and run it through to see if its vowel, and return true otherwise false.
function vowelChecker(letter) {
    if (letter.toLowerCase() == 'i' || letter.toLowerCase() == 'o' || letter.toLowerCase() == 'u' || letter.toLowerCase() == 'e' || letter.toLowerCase() == 'a') {
        return true
    } else {
        return false
    }
}