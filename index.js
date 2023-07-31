function distanceFromHqInBlocks(someValue) {
    const hq = 42; // Scuber's headquarters block
    return Math.abs(someValue - hq); // Using Math.abs() to get the absolute value of the difference
  }
  
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // Each block is 264 feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocksTraveled = Math.abs(destination - start);
    return blocksTraveled * 264; // Each block is 264 feet
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

// Fare calculation based on distance
if (distanceInFeet <= 400) {
    return 0; // First 400 feet are free
  } else if (distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02; // 2 cents per foot for the distance between 400 and 2000 feet
  } else if (distanceInFeet < 2500) {
    return 25; // Flat fare for a distance between 2000 and 2500 feet
  } else {
    return 'cannot travel that far'; // Scuber does not allow rides over 2500 feet
  }
}
