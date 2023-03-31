function beepBoop(num) {
  if (num % 3 === 0 && num !== 0) {
    return "Won't you be my neighbor?";
  } else {
    return num;
  }
}






window.addEventListener("load", function() {
  const submitBtn = document.getElementById("submit");
  const inputField = document.getElementById("input");
  const resultDiv = document.getElementById("beMine");

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const inputString = inputField.value;
    const result = beepBoop(parseInt(inputString));

    resultDiv.textContent = result;
  });
});