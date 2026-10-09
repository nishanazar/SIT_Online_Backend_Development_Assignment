
const employees = [
    { name: 'Ali', department: 'IT', salary: 80000 },
    { name: 'Sara', department: 'HR', salary: 70000 },
    { name: 'Ahmed', department: 'IT', salary: 95000 },
    { name: 'Ayesha', department: 'Finance', salary: 85000 }
];


const itEmployees = employees.filter(employee => employee.department === 'IT');
console.log("IT Department Employees:", itEmployees);

const highSalaryEmployee = employees.find(employee => employee.salary > 90000);
console.log("First Employee With Salary Greater Than 90000:", highSalaryEmployee);


const employeeNames = employees.map(employee => employee.name);
console.log("Employee Names:", employeeNames);


const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Total Salary:", totalSalary);