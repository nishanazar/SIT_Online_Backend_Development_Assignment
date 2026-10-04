const students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal'];

// 1. Ayesha class mein hai?
console.log('Ayesha present hai?', students.includes('Ayesha')); // true

// 2. Sara ki pehli position
console.log('Sara pehli dafa index:', students.indexOf('Sara')); // 1

// 3. Sara ki aakhri position
console.log('Sara aakhri dafa index:', students.lastIndexOf('Sara')); // 5

// 4. Pehla student jiska naam A se shuru ho
const firstAStudent = students.find((name) => name.startsWith('A'));
console.log('Pehla A wala student:', firstAStudent); // Ali

// 5. Us ki position
const firstAIndex = students.findIndex((name) => name.startsWith('A'));
console.log('Uski position:', firstAIndex); // 0

// 6. Meri chuni hui condition: naam 4 se zyada letters ka ho
const lastLongName = students.findLast((name) => name.length > 4);
const lastLongIndex = students.findLastIndex((name) => name.length > 4);
console.log('Aakhri lamba naam:', lastLongName); // Bilal
console.log('Uski position:', lastLongIndex);     // 6