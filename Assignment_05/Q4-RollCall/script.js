let totalCalled = 0

for (let index = 1; index <= 20; index++) {
  if (index === 13) {
    continue
  }
  
  if (index === 18) {
    break

  }
  console.log("Calling roll number" + " " + index);
  totalCalled++;
}

