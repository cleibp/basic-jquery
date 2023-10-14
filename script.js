$(document).ready(function () {
  var getID = $("#id01"); // pegar por id
  var getTag = $("p"); // pegar pela Tag
  var getClassName = $(".intro"); // pela pela classe
  var querySelect = $("p.intro"); // pelo query selector

  // Set Text Content
  $("#optionA").text("O texto do parágrafo id01 é: " + getID[0].innerHTML);
  $("#optionB").text("O texto do parágrafo de tag p é: " + getTag[2].innerHTML);
  $("#optionC").text(
    "O texto do parágrafo de Class name é: " + getClassName[0].innerHTML
  );
  $("#optionD").text(
    "O texto do parágrafo com tag e classe é: " + querySelect[0].innerHTML
  );

  // set html content
  $("#setHtmlContent").html("<p>Estou usando o Set html!</p>");

  // Get Text Content
  var getText = $("#id01").text();
  $("#textContent").text(getText);

  // Get HTML Content
  var getHtml = $("#id01").html();
  $("#htmlContent").html(getHtml);

  // Get Parent Content
  $("#parentContent").text($("#id01").parent().prop("nodeName"));

  // Show / Hide
  $("#showP").show();
  $("#hideP").hide();

  // CSS
  $("#css").css({
    "font-size": "12px",
    color: "red",
    "text-decoration": "underline",
    "text-transform": "uppercase",
    "text-align": "center",
  });

  // Remove
  $("#rowB").remove();
});
