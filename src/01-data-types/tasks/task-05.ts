/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
    employeeID: string;
    employeeName: string;
    date: string;
    checkInTime: string;
    checkOutTime: string;
    totalWorkingHours: number;
    present: boolean;
};

const attendance1: Attendance = {
    employeeID: "EMP001",
    employeeName: "Alice Johnson",
    date: "2024-06-01",
    checkInTime: "09:00",
    checkOutTime: "17:00",
    totalWorkingHours: 8,
    present: true
};

const attendance2: Attendance = {
    employeeID: "EMP002",
    employeeName: "Bob Smith",
    date: "2024-06-01",
    checkInTime: "09:30",
    checkOutTime: "17:30",
    totalWorkingHours: 8,
    present: true
};

const attendance3: Attendance = {
    employeeID: "EMP003",
    employeeName: "Charlie Brown",
    date: "2024-06-01",
    checkInTime: "10:00",
    checkOutTime: "18:00",
    totalWorkingHours: 8,
    present: true
};

console.log("Attendance 1:", attendance1);
console.log("Attendance 2:", attendance2);
console.log("Attendance 3:", attendance3);