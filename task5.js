// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
// Function to find salary of each employee
function calculateSalary(employee){
    const yearlySalary = employee.starting + (employee.increment * employee.experience);
    const monthlySalary = yearlySalary / 12;
    return monthlySalary;
} 

// প্রতিটি কর্মচারীর মোট মাসিক বেতন যোগ করা 
function calculateTotalSalary(employees){
    let totalSalary = 0;
    for(let i = 0; i < employees.length; i++){
        totalSalary = totalSalary + calculateSalary(employees[i]);
    }
    return totalSalary;
}
// মোট মাসিক বেতন দেখানো
const totalSalary = calculateTotalSalary(employees);
console.log('Total monthly salary is:', totalSalary.toFixed(2))


_________THE END _________


