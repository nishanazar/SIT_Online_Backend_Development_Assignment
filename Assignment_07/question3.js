const marks = [78, 45, 92, 66, 88, 54, 91, 73];

// 1. Doosra array banao aur dono ko combine karo
const secondGroupMarks = [60, 85, 70, 95];
const combinedMarks = marks.concat(secondGroupMarks);
console.log('Combined Marks:', combinedMarks);

// 2. Chhoti list: combined marks ke index 2 se 5 tak (5 shamil nahi)
const selectedMarks = combinedMarks.slice(2, 5);
console.log('Selected Portion:', selectedMarks);

// 3. Beech ka ek mark change karo (index 5 ka mark 54 hai, usko 58 kar do)
combinedMarks.splice(5, 1, 58);
console.log('After Changing Middle Mark:', combinedMarks);

// 4. Total marks
console.log('Total Marks Stored:', combinedMarks.length);

// 5. Sort karo (lowest se highest)
combinedMarks.sort((a, b) => a - b);
console.log('Sorted Marks:', combinedMarks);

// 6. Ulta karo (highest se lowest)
combinedMarks.reverse();
console.log('Reversed Marks:', combinedMarks);

// 7. Arrow function jo array le kar final result dikhaye
const showFinalResult = (marksList) => {
  console.log('Final Result:', marksList);
  console.log('Highest Mark:', marksList[0]);
  console.log('Lowest Mark:', marksList[marksList.length - 1]);
};

showFinalResult(combinedMarks);