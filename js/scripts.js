function beepBoop(num) {
  let strNum = num.toString();
  let result = "";

  if (strNum.includes("3")) {
    result = "Won't you be my neighbor?";
  } else if (strNum.includes("2")) {
    result = "Boop!";
  } else {
    result = strNum;
  }

  return result;
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