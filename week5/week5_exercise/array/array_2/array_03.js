// Exercise 3: Log array items with their types using mixedValues array
const mixedValues = [42, 'Hello', true, { name: 'Fox' }, null, undefined];

/*
Iterate over the mixedValues array, logging each item, its index, and data type.
Expected outcome:
"Item: 42, Index: 0, Type: number"
...
"Item: undefined, Index: 5, Type: undefined"
*/
// Write your code here

const mixedArray1 = mixedValues.forEach(item => console.log(`Item: ${item}, Index:${mixedValues.indexOf(item)}, Type: ${typeof(item)}`));

const mixedArray = () => {
    let i = 0;
    while (i < mixedValues.length){
        console.log(`Item: ${mixedValues[i]}, Index: ${[i]}, Type: ${typeof(mixedValues[i])}`);
        i++;
    }
}
//mixedArray();

