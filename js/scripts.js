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
    } else if (targets2.includes(i)) {
      numbers.push("Boop!");
    } else {
      numbers.push(i);
    }
  }
  return numbers;
}

function beepBoop(num) {
  const targets = [1];
  const targets2 = [2];
  const targets3 = [3];
  let numbers = [];
  for (let i = 0; i <= num; i++) {
    if (targets.includes(i)) {
      numbers.push("Beep!");
    } else if (targets2.includes(i)) {
      numbers.push("Boop!");
    } else if (targets3.includes(i)) {
      numbers.push("Won't you be my neighbor?");
    } else {
      numbers.push(i);
    }
  }
  return numbers;
}

function beepBoop(num) {
  const targets = [1];
  const targets2 = [2];
  const targets3 = [3];
  let numbers = [];
  for (let i = 0; i <= num; i++) {
    let iString = i.toString();
    if (targets.some(target =>iString.includes(target))) {
      numbers.push("Beep!");
    } else if (targets2.some(target =>iString.includes(target))) {
      numbers.push("Boop!");
    } else if (targets3.some(target => iString.includes(target))) {
      numbers.push("Won't you be my neighbor?");
    } else {
      numbers.push(i);
    }
  }
  return numbers;
}