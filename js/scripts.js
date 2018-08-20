$(document).ready(function() {
  $("form#toDoList").submit(function(event) {
    event.preventDefault();
    $("#show-task").show();

    var inputtedTask = $("input#task").val();

    $("#taskItem").append("<div class='form-check'><input class='form-check-input' type='checkbox' id='defaultCheck1'><label id='removeCheck'>" + inputtedTask + "</label></div>");
  });

  $(".btn-success").click(function(event) {
    event.preventDefault();

    $("input.form-check-input:checked").parent().hide();

    // var jQueryObject = $("input.form-check-input:checked");
    // var jQueryParentObject;
    // console.log(jQueryObject);
    // jQueryObject.hide();

  })
});
