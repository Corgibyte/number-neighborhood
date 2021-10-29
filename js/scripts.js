function numberInterpreter(number) {
  const numString = number.toString();
  let includesOne = numString.includes("1");
  let includesTwo = numString.includes("2");
  let includesThree = numString.includes("3");

  if (!includesOne && !includesTwo && !includesThree) {
    return numString;
  } else if (includesThree) {
    return "Won't you be my neighbor?"
  } else if (includesTwo) {
    return "Boop!";
  } else {
    return "Beep!";
  }
}

function getMessages(number) {
  let messages = [];
  for (let i = 0; i <= number; i++) {
    messages.push(numberInterpreter(i));
  }
  return messages;
}