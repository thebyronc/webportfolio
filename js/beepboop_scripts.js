var countNumbers = function(inputName, inputNumber) {
  var results = ["", "", "", ""];
  var userName = "Dave";
  if (inputName != "") {
    var userName = inputName;
  } else {
    console.log("I guess I'm calling you Dave.");
  }
  if (parseInt(inputNumber) === 0) {
    results[0] = "Beep!";
    results[1] = "img/bot_l.png";
    results[2] = "BEEP!"
  } else if (parseInt(inputNumber) % 3 === 0) {
    results[0] = "I'm sorry, " + userName + ". I'm afraid I can't do that.";
    results[1] = "img/bot_s.png";
  } else if (inputNumber.match(/0/)) {
    results[0] = "Beep!";
    results[1] = "img/bot_l.png";
    results[2] = "BEEP!"
  } else if (inputNumber.match(/1/)) {
    results[0] = "Boop!";
    results[1] = "img/bot_r.png";
    results[3] = "BOOP!"
  } else {
    var numberPrints = [];
    for (i = 0; i <= parseInt(inputNumber); i++) {
      numberPrints[i] = " " + i;
    }
    results[0] = numberPrints.slice();
    results[1] = "img/bot_n.png";
  }
  return results;
}

// front end
$(document).ready(function() {

  $("#formBeepBoop").submit(function(event) {
    event.preventDefault();

    var inputName = $("#inputName").val();
    var inputNumber = $("#inputNumber").val();

    var result = countNumbers(inputName, inputNumber);
    $("#beepBoopOutput").text(result[0]);
    $("#bot_left").text(result[2]);
    $("#bot_right").text(result[3]);

    document.getElementById("friendlybot").src=result[1];
  });

  $("#wipe").click(function() {
    $("#beepBoopOutput").text("");
    $("#bot_left").text("");
    $("#bot_right").text("");
    document.getElementById("friendlybot").src="img/bot_n.png";
  });

});
