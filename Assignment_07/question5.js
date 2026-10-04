// 1. Pehla employee (Q4 wala object, ab methods ke saath)
const employee1 = {
  id: 101,
  firstName: 'Ali',
  lastName: 'Khan',
  department: 'IT',
  salary: 90000,
  email: 'ali.khan@company.com',

  // Method 1: poora naam
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },

  // Method 2: ID aur department wala sentence
  getInfo() {
    return 'Employee ID ' + this.id + ' works in the ' + this.department + ' department.';
  }
};

// 2. Dono methods call karo aur result dikhao
console.log('Full Name:', employee1.getFullName());
console.log('Info:', employee1.getInfo());

// 3. Doosra employee (similar properties aur methods)
const employee2 = {
  id: 102,
  firstName: 'Sara',
  lastName: 'Ahmed',
  department: 'HR',
  salary: 85000,
  email: 'sara.ahmed@company.com',

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },

  getInfo() {
    return 'Employee ID ' + this.id + ' works in the ' + this.department + ' department.';
  }
};

// 4. Doosre employee ke methods bhi call karo
console.log('Full Name:', employee2.getFullName());
console.log('Info:', employee2.getInfo());