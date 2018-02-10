$(document).ready(function(){

  var bowling = new Bowling;

  $("#btn-name").click(function() {
    event.preventDefault();
    var name = $("#player-name").val();
    $("#display-player-name").html("Hi, " + name + "!");
  });

  // $("#frames").change(function() {
  //   var frame = $("#frames").val();

    $("#btn-1-roll").click(function() {
      event.preventDefault();
      var kdpFirstRoll = $("#KDP-1-roll").val();
      $("#" + bowling.frame + "f1r-KDP").html(kdpFirstRoll);
      bowling.firstRoll(kdpFirstRoll);
      $("#" + bowling.frame + "f1r-SCORE").html( );
    });

    $("#btn-2-roll").click(function() {
      event.preventDefault();
      var kdpSecondRoll = $("#KDP-2-roll").val();
      $("#" + bowling.frame + "f2r-KDP").html(kdpSecondRoll);
      bowling.secondRoll(kdpSecondRoll);
      bowling.addTotalFrameScore();
      bowling.gameScore();
      $("#" + bowling.frame + "f2r-SCORE").html(bowling.totalScore);
      bowling.incrementFrame();
    });
  // });

});
