/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

const students = [
    { name: "Sonia", scores: [90, 85, 88, 92], averageScore: null },
    { name: "Pragadhish", scores: [78, 81, 85, 80], averageScore: null },
    { name: "Devesh", scores: [95, 92, 98, 100], averageScore: null },
    { name: "Prabagarane", scores: [60, 65, 70, 72], averageScore: null },
    { name: "Suganya", scores: [90, 95, 90, 92], averageScore: null },
]

const updateAverageScore=() =>{
    let i=0;
    while(i<students.length){
        let total =0;
        for (let j=0; j<students[i].scores.length; j++){
            total += students[i].scores[j];
        }
        //console.log(total)
        let average = total/students[i].scores.length;
        console.log('Averagescore of',students[i].name, 'is:',average);
        i++;
    }
}
//updateAverageScore();

function updateAverageScore1(students){
 students.forEach(student => {
    const totalScore = student.scores.reduce((sum,score)=> sum + score,0);
    let average = totalScore / student.scores.length;
    student.averageScore = average; 
});
console.log(students)
}
updateAverageScore1(students);