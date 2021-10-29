function numberInterpreter(number, translations) {
  const numString = number.toString();

  for (let i = 9; i >= 0; i--) {
    if (numString.includes(i.toString()) && translations[i][0]) {
      return translations[i][1];
    }
  }
  return numString;
}

function getMessages(number, translations) {
  let messages = [];
  for (let i = 0; i <= number; i++) {
    messages.push(numberInterpreter(i, translations));
  }
  return messages;
}

//UI

function getResponseCard(inputNumber, messages, translations) {
  const cardTitle = "<div class=\"card\"><div class=\"card-body\"><h5 class=\"card-title\">To: " 
  + inputNumber + "</h5>";
  const cardSubtitle = "<h6 class=\"card-subtitle\">Dialect [" + translations + "]</h6>";
  let card = (cardTitle + cardSubtitle).concat("<p class=\"card-text\">");
  for (i = 0; i < messages.length; i++) {
    card = card.concat(messages[i]);
    if (i != messages.length - 1) {
      card = card.concat(", ");
    }    
  }
  card = card.concat("</p><button class=\"btn btn-danger btn-sm\" type=\"button\">Remove</button>");
  return card.concat("</div></div>");
}

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    const inputNumber = parseInt($("#numberInput").val());
    const translations = [$("#dialect1").val(), $("#dialect2").val(), $("#dialect3").val()];
    const messages = getMessages(inputNumber, translations);
    $("#outputs").prepend(getResponseCard(inputNumber, messages,translations));
    $("#outputs").find("button").first().click(function() {
      $(this).closest(".card").remove();
    });
  });
});