//Business Logic 
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
    if (iString.includes(targets2[0]) && iString.includes(targets[0])) {
      numbers.push("Boop!");
    } else if (iString.includes(targets2[0]) && iString.includes(targets3[0])) {
      numbers.push("Won't you be my neighbor?");
    } else if (iString.includes(targets[0]) && iString.includes(targets3[0])) {
      numbers.push("Won't you be my neighbor?");
    } else if (targets.some(target =>iString.includes(target))) {
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

// UI Logic 

function handleForm(event) {
  event.preventDefault();
  const userInput = parseInt(document.getElementById("floatingInput").value);
  const results = beepBoop(userInput);
  document.getElementById("results").innerHTML = results.join(", ");
  document.getElementById("generator").reset();
} 

window.addEventListener("load", function() {
   const form = document.querySelector("form")
   const boxes = document.querySelectorAll(".box");
   boxes.forEach(box => {
    const randomLeft = Math.floor(Math.random() * window.innerWidth);
    const randomTop = Math.floor(Math.random() * window.innerHeight);
    box.style.left = `${randomLeft}px`;
    box.style.top = `${randomTop}px`;
form.addEventListener("submit", handleForm)
   });
});
