/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */


type Student = {
    studentID: string;
    fullName: string;
    gradeLevel: string;
};

type Course = {
    courseID: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
};

type Registration = {
    student: Student;       
    course: Course;           
    registrationDate: string; 
    isPaymentCompleted: boolean;
};

const registration1: Registration = {
    student: {
        studentID: "ST2026045",
        fullName: "Nadia Putri",
        gradeLevel: "10th Grade"
    },
    course: {
        courseID: "HTML-101",
        courseTitle: "Introduction to HTML",
        instructorName: "Gilbert Bougainvillea",
        totalLearningHours: 18
    },
    registrationDate: "2026-08-28",
    isPaymentCompleted: false
};

const registration2: Registration = {
    student: {
        studentID: "ST2026046",
        fullName: "John Doe",
        gradeLevel: "11th Grade"
    },
    course: {
        courseID: "CSS-101",
        courseTitle: "Introduction to CSS",
        instructorName: "Gilbert Bougainvillea",
        totalLearningHours: 20
    },
    registrationDate: "2026-08-28",
    isPaymentCompleted: true
};

const registration3: Registration = {
    student: {
        studentID: "ST2026047",
        fullName: "John Doee",
        gradeLevel: "11th Grade"
    },
    course: {
        courseID: "JS-101",
        courseTitle: "Introduction to JavaScript",
        instructorName: "Anne Magnolya",
        totalLearningHours: 22
    },
    registrationDate: "2026-08-31",
    isPaymentCompleted: true
};

console.log("Registration 1:", registration1);
console.log("Registration 2:", registration2);
console.log("Registration 3:", registration3);
