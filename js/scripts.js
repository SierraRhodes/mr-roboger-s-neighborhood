function beepBoop(num) {
let numbers = [];
for (let i = 0; i <= num; i++) {
  numbers.push(i);
}
return numbers;
}

function beepBoop(num) {
  const targets = [1];
  let numbers = [];
  for (let i = 0; i <= num; i++) {
    if (targets.includes(i)) {
      numbers.push("beep"); 
    } else { 
      numbers.push(i);
    }
  }
  return numbers;
}