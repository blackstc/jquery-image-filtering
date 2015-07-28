$(document).ready(function() {
	console.log("The document is ready!");
  var homeValues = [1000000000, 50000, 20];
  var homeStrings = ["$1,000,000,000", "$50,000", "$20"];
  var homeImages = ["img/whiteHouse.jpg", "img/newShack.jpg", "img/shack.jpg"];


  for (var i = 0; i < 3; i++) {
    var $newHome = $('.home').first().clone().appendTo('.image-container');

    $newHome.attr("data-price", homeValues[i]);
    $newHome.find("h4").text(homeStrings[i]);
    $newHome.find("img").attr("src", homeImages[i]);
  }
});
