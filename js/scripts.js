function beepBoop(num) {
  const count = [];
  for (let i = 0; i <= num; i++) {
    let neighbor = i.toString();
    if(neighbor.includes("2")) {
      count.push("Boop!")
    } 
    else if(neighbor.includes("1")) {
      count.push("Beep!")
    }
    else {
      count.push(i);
    }
  }
  return count;
}