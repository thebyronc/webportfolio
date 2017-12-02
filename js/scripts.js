var makeVisible = function() {
  $(".courses a").hide();
  $(".courses").fadeIn();
  $(".results").fadeIn();
  $(".intro").fadeIn();
}

$(document).ready(function() {
  $("#trackQuestions").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var q1Input = parseInt($("input:radio[name=question1]:checked").val());
    var q2Input = parseInt($("input:radio[name=question2]:checked").val());
    var q3Input = parseInt($("input:radio[name=question3]:checked").val());
    var q4Input = parseInt($("input:radio[name=question4]:checked").val());
    var q5Input = parseInt($("input:radio[name=question5]:checked").val());

    var combinedInput = q1Input + q2Input + q3Input + q4Input + q5Input;

    if (q5Input === 5) {
      $("#output").text("Hello " + nameInput + ", we highly recommended that you take the PHP/Drupal course from Epicodus. Based on your responses, taking this course will allow you to focus on backend coding.");
      makeVisible();
      $("#couresrec").text("PHP/Drupal");
      $(".phpdrupal").fadeIn();
    } else if (combinedInput <= 14) {
      $("#output").text("Hello " + nameInput + ", we recommended that you take the CSS/Design course from Epicodus. Based on your responses, taking this course will allow you to focus on developing for a web interface.");
      $("#couresrec").text("CSS/Design");
      makeVisible();
      $(".cssdesign").fadeIn();
    } else if (combinedInput >= 16) {
      $("#output").text("Hello " + nameInput + ", we recommended that you take the Java/Android course from Epicodus. Based on your responses, taking this course will allow you to focus on developing for a mobile interface.");
      $("#couresrec").text("Java/Android");
      makeVisible();
      $(".javaandroid").fadeIn();
    } else if (combinedInput === 15) {
      $("#output").text("Hello " + nameInput + ", you seem to not have a particular interest in either mobile development or desktop development. We suggest the PHP/Drupal course from Epicodus.");
      $("#couresrect").text("PHP/Drupal");
      makeVisible();
      $(".phpdrupal").fadeIn();
    } else {
      console.log("Reached end of branch, check for possible errors.")
    }
  });
});
