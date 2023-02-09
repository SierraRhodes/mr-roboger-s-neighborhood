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
      numbers.push("Beep!"); 
    } else { 
      numbers.push(i);
    }
  }
  return numbers;
}




function beepBoop(num) {
  const targets = [1];
  const targets2 = [2];
  let numbers = [];
  for (let i = 0; i <= num; i++) {
    if (targets.includes(i)) {
      numbers.push("Beep!"); 
    } else { 
      numbers.push(i);
    }
   if (targets2.includes(i)) {
      numbers.push("Boop!");
  } else {
    numbers.push(i);
  }

  return numbers;
}
}
