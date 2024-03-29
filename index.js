// Helper function to calculate the average of an array of numbers
function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  }
  
  // Example usage
  const numbers = [5, 10, 15, 20];
  const average = calculateAverage(numbers);
  console.log(average); // Output will be 12.5