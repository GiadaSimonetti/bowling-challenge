$(document).ready(function(){

  var bowling = new Bowling;

  $("#btn-name").click(function() {
    event.preventDefault();
    var name = $("#player-name").val();
    $("#display-player-name").html("Hi, " + name + "!");
  });

  // $("#display" + bowling.currentFrame + "frame").css("font-weight", "bold");
  // $("#display" + bowling.currentFrame + "frame").css("color", "#a54630");

    $("#btn-1-roll").click(function() {
      event.preventDefault();
      var kdpFirstRoll = $("#KDP-1-roll").val();
      $("#" + bowling.currentFrame + "f1r-KDP").html(kdpFirstRoll);
      bowling.firstRoll(kdpFirstRoll);
      $("#" + bowling.currentFrame + "f1r-SCORE").html( );
    });

    $("#btn-2-roll").click(function() {
      event.preventDefault();
      var kdpSecondRoll = $("#KDP-2-roll").val();
      $("#" + bowling.currentFrame + "f2r-KDP").html(kdpSecondRoll);
      bowling.secondRoll(kdpSecondRoll);
      bowling.addTotalFrameScore();
      bowling.gameScore();
      $("#" + bowling.currentFrame + "f2r-SCORE").html(bowling.totalScore);
      bowling.incrementFrame();
    });


});
