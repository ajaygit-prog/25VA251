// Array of student objects
const students = [
    { id: 1, name: "Ajay", age: 20, marks: 85 },
    { id: 2, name: "Rahul", age: 21, marks: 72 },
    { id: 3, name: "Priya", age: 19, marks: 91 },
    { id: 4, name: "Neha", age: 20, marks: 65 }
];

// Display all student records using loop
console.log("All Students:");
for (let student of students) {
    console.log(student);
}

// Filter students with marks >= 75
const topStudents = students.filter(student => student.marks >= 75);

console.log("\nStudents with Marks >= 75:");
topStudents.forEach(student => {
    console.log(student);
});

// Count total students
const totalStudents = students.length;
console.log("\nTotal Students:", totalStudents);

// Count students who passed (marks >= 40)
const passedCount = students.filter(student => student.marks >= 40).length;
console.log("Passed Students:", passedCount);