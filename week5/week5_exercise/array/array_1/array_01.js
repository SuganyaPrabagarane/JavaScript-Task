/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. Find the index of "Mike" in the array.  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. Find all occurrences of "John" in the array and store their positions in a new array.  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/

let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

let copyOfTeamMembers = teamMembers.slice(0,4);

copyOfTeamMembers.forEach(member => console.log(`Member: ${member}`)); // 1. Display each member
copyOfTeamMembers.shift(); // 2.Remove first element
copyOfTeamMembers.pop(); // 3.Remove last element
copyOfTeamMembers.unshift('Alex'); // 4. Add 'Alex' to front
copyOfTeamMembers.push('Linda'); // 5. Add 'Linda' to the end
console.log('After adding and removing members:',copyOfTeamMembers);

const excludeFirstTwoMember = copyOfTeamMembers.filter((member,index) => { // 6. Create new array exclude first 2 member
    if (index > 1){
        return member;
    }
})

//console.log('After excluding 2 members:',excludeFirstTwoMember)
console.log('Index of Mike:',excludeFirstTwoMember.indexOf('Mike')) // 7. Index of 'Mike'
console.log('Index of Jake:',excludeFirstTwoMember.indexOf('Jake')) // 8. Index of 'Jake'
excludeFirstTwoMember.splice(0,1,'Carol','Bruce');                  // 9. Replace 'Mike' with 'Carol' and 'Bruce'
console.log('After replace names:',excludeFirstTwoMember);

let addOneMember = ['Bob'];
let combineTwoArray = excludeFirstTwoMember.concat(addOneMember); // 10. Combine two array
//console.log(combineTwoArray);

const slicedArray = teamMembers.slice(0,4);                 // 11. Copy the array using Slice
//console.log('Sliced Array:', slicedArray)

let newMembers = ['Tina', 'Dean'];                          // 12. Create newMember with 'Tina' and 'Dean' 
newMembers = [...newMembers,...teamMembers];                // 12. Mergerd teamMembers into newMembers array
console.log('New Members after mergerd with team members:',newMembers);

let indexOfJohn = [];                                       // 13. Occurance of John and store in new array
newMembers.map((name,index) => {
    if (name === 'John'){
        indexOfJohn.push(index)
    }
});
console.log('Occurance of John:', indexOfJohn);

let newMembersToUppercase = newMembers.map(member => member.toUpperCase());  // 14. Change to Uppercase
console.log('Change to upper case:',newMembersToUppercase);

console.log('Sort team members:',teamMembers.sort());                       // 15. Sort teamMembers
console.log('Reverse the team members:', teamMembers.toReversed());         // 16. Reverse teamMembers

console.log('Check array includes John:',teamMembers.includes('John'));      // 17. Check array includes 'John'
console.log(teamMembers.some(name=> name === 'John'));

console.log('Check names in array have more than 3 letters:',teamMembers.every(name => name.length > 2));  // 18. check more than 3 letters




