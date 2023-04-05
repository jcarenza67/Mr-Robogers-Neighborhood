function beepBoopLoop(num) {
  let results = [];
  for (let i = 0; i < num.length; i++) {
    let neighbor = num[i].toString();
    let result = "";
    if (neighbor.includes("3")) {
      result = "Won't you be my neighbor?";
    } else if (neighbor.includes("2")) {
      result = "Boop!";
    } else if (neighbor.includes("1")) {
      result = "Beep!";
    } else {
      result = neighbor;
    }
    results.push(result);
  }
  return results;
}




window.addEventListener("load", function() {
  const submitBtn = document.getElementById("submit");
  const inputField = document.getElementById("input");
  const resultDiv = document.getElementById("beMine");

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const inputString = inputField.value;
    const inputArray = inputString.split(',').map(Number); 
    const resultsArray = beepBoopLoop(inputArray);
    const resultString = resultsArray.join(', '); 

    resultDiv.textContent = resultString;
  });
});