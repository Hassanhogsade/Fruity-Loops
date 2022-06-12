let fruits = ["Apple", "Orange", "Banana", 'Pear', "Peach", "Strawberry", "Cherry", "Acai"]

fruits.forEach(fruit => {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] == 'i' || fruit[i] == 'o' || fruit[i] == 'u' || fruit[i] == 'e' || fruit[i] == 'a') {
            vowels = vowels + 1;
        }
        else {
            consonants = consonants + 1;
        }
    }
});

console.log(vowels)
console.log(consonants)

switch (key) {
    case value:

        break;

    default:
        break;
}