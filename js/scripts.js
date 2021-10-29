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

function getResponseCard(inputNumber, messages) {
  let card = "<div class=\"card\"><div class=\"card-body\"><h5 class=\"card-title\">To " +
    inputNumber + "</h5><p class=\"card-text\">";
  for (i = 0; i < messages.length; i++) {
    card = card.concat(messages[i]);
    if (i != messages.length - 1) {
      card = card.concat(", ");
    }    
  }
  card = card.concat("</p><button class=\"btn btn-outline-danger btn-sm\" type=\"button\">Remove</button>");
  return card.concat("</div></div>");
}

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    const inputNumber = parseInt($("#numberInput").val());
    if (inputNumber >= 0) {
      const messages = getMessages(inputNumber);
      $("#outputs").append(getResponseCard(inputNumber, messages));
      $("#outputs").find("button").first().click(function() {
        $(this).closest(".card").remove();
      });
    } else {
      outputList.append("<li>Number must be positive</li>");
    }
  });
});