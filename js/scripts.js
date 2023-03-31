function beepBoop(num) {
  const count = [];
  for (let i = 0; i <= num; i++) {
    let neighbor = i.toString();
    if(neighbor.includes("3")) {
      count.push("Won't you be my neighbor?")
    } 
    else if(neighbor.includes("2")) {
      count.push("Boop!")
    }
    else if(neighbor.includes("1")) {
      count.push("Beep!")
    }
    else {
      count.push(i);
    }
  }
  return count.join("");
}

window.addEventListener("load", function() {
  const submitBtn = document.getElementById("submit");
  const inputField = document.getElementById("input");
  const resultDiv = document.getElementById("beMine");

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const inputString = inputField.value;
    const result = beepBoop(inputString);

    resultDiv.textContent = result;
  });
});