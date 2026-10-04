// 1. Employee object banao
const employee = {
  id: 101,
  firstName: 'Ali',
  lastName: 'Khan',
  department: 'IT',
  designation: 'Developer',
  salary: 80000
};

// 2. Dot notation se first name aur department
console.log('First Name:', employee.firstName);
console.log('Department:', employee.department);

// 3. Bracket notation se designation aur salary
console.log('Designation:', employee['designation']);
console.log('Salary:', employee['salary']);

// 4. Object banne ke baad nayi property add karo
employee.email = 'ali.khan@company.com';

// 5. Maujooda property ki value change karo
employee.salary = 90000;

// 6. Ek property remove karo
delete employee.designation;

// 7. Final object dikhao
console.log('Final Employee Object:', employee);