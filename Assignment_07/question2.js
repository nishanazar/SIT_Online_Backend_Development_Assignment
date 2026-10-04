const prices = [1200, 450, 3000, 750, 1500, 250];

// 1. Lowest se highest
const lowToHigh = prices.slice().sort((a, b) => a - b);
console.log('Lowest to Highest:', lowToHigh);

// 2. Highest se lowest
const highToLow = prices.slice().sort((a, b) => b - a);
console.log('Highest to Lowest:', highToLow);

// 3. Original list aur reversed list
console.log('Original List:', prices);
const reversedPrices = prices.slice().reverse();
console.log('Reversed List:', reversedPrices);

// 4. Random order (promotional display ke liye)
const randomOrder = prices.slice().sort(() => Math.random() - 0.5);
console.log('Random Order:', randomOrder);