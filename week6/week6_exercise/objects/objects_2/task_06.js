/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

const courses = [
    { courseName: 'HTML & CSS', instructor:'Margit', studentsEnrolled: 35},
    { courseName: 'JavaScript', instructor:'Martin', studentsEnrolled: 40},
    { courseName: 'UI Design', instructor:'Elina', studentsEnrolled: 30},
    { courseName: 'REACT', instructor:'Margit Tennosar', studentsEnrolled: 33},
    { courseName: 'PHP', instructor:'Santhosh', studentsEnrolled: 28}
]

courses.filter(course => {
    if (course.studentsEnrolled > 30){
    console.log(course);
}
})