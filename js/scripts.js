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

//UI

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    const inputNumber = parseInt($("#numberInput").val());
    if (inputNumber >= 0) {
      const messages = getMessages(inputNumber);
      messages.forEach(function(message) {
        $("#outputList").append("<li>" + message + "</li>");
      });
    } else {
      outputList.append("<li>Number must be positive</li>");
    }
  });
});