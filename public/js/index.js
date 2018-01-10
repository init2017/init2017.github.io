$("#first").click(function () {
  $("img").animate({
    marginRight: "85%"
    }, 8000, function() {
  });
  $('#second').mouseover(function(){
    $("img").animate({
      marginRight: "0"
      }, 8000, function() {
    });
  });
});