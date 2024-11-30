function isPrime(num) {
  if (num < 2) return false; // מספרים קטנים מ-2 אינם ראשוניים
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // אם המספר מתחלק ב-i, הוא לא ראשוני
  }
  return true; // אם לא נמצאו מחלקים, המספר ראשוני
}

for (let num = 2; num < 237; num++) {
  if (isPrime(num)) {
    console.log(num); // הדפס את המספר אם הוא ראשוני
  }
}

