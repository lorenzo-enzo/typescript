/**
 * A company evaluates employees every month.
 * If an employee's performance score is 80 or above, they receive a performance bonus.
 * Otherwise, they do not receive a bonus.
 * Employee information:
 * | Information       | Value         |
 * | ----------------- | ------------- |
 * | Employee Name     | Dimas Pratama |
 * | Performance Score | 78            |
 * 
 * Tasks:
 * 1. Declare the variables.
 * 2. Use an if...else statement.
 * 3. Display the evaluation result. If eligible will display "Bonus Approved", 
 * otherwise display "Bonus not approved"
 */

// 1. Declare the variables
const employeeName: string = "Dimas Pratama";
const performanceScore: number = 78;

// 2. Use an if...else statement
if (performanceScore >= 80) {
    // 3. Display the evaluation result
    console.log(`Employee: ${employeeName}`);
    console.log("Result: Bonus Approved");
} else {
    // 3. Display the evaluation result
    console.log(`Employee: ${employeeName}`);
    console.log("Result: Bonus not approved");
}


