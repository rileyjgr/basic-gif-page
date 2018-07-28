//Cats
$("#cat-button").on("click", function() {

  //api key with gif type
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Jouf48SlZuDz7W7ODP6bYA6q5ZBEDcGV&tag=cat";

  //
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  //
  .then(function(response) {

    //
    var imageUrl = response.data.image_original_url;

    //
    var catImage = $("<img>");

    //
    catImage.attr("src", imageUrl);
    catImage.attr("alt", "cat image");

    //
    $("#images1").prepend(catImage);
  });
});

//Pepe
$("#pepe-button").on("click", function() {

  //api key with gif type
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Jouf48SlZuDz7W7ODP6bYA6q5ZBEDcGV&tag=pepe";

  //
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  //
  .then(function(response) {

    //
    var imageUrl = response.data.image_original_url;

    //
    var catImage = $("<img>");

    //
    catImage.attr("src", imageUrl);
    catImage.attr("alt", "cat image");

    //
    $("#images2").prepend(catImage);
  });
});

//Chess
$("#chess-button").on("click", function() {

  //api key with gif type
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Jouf48SlZuDz7W7ODP6bYA6q5ZBEDcGV&tag=chess";

  //
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  //
  .then(function(response) {

    //
    var imageUrl = response.data.image_original_url;

    //
    var chessImage = $("<img>");

    //
    chessImage.attr("src", imageUrl);
    chessImage.attr("alt", "chess image");

    //
    $("#images3").prepend(chessImage);
  });
});

//Dogs
$("#dog-button").on("click", function() {

  //api key with gif type
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Jouf48SlZuDz7W7ODP6bYA6q5ZBEDcGV&tag=dog";

  //
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  //
  .then(function(response) {

    //
    var imageUrl = response.data.image_original_url;

    //
    var dogImage = $("<img>");

    //
    dogImage.attr("src", imageUrl);
    dogImage.attr("alt", "dog image");

    //
    $("#images4").prepend(dogImage);
  });
});
/* let goSearch = () => {
  $('#search-button').on('submit', function() {
    var tag_Id= $(this).children('input[name=tag_Id]').val();


  });
}

//user input
$("#userInput).on("click", function() {

  //api key with gif type
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Jouf48SlZuDz7W7ODP6bYA6q5ZBEDcGV&tag=" + goSearch;

  //
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  //
  .then(function(response) {

    //
    var imageUrl = response.data.image_original_url;

    //
    var searchImage = $("<img>");

    //
    searchImage.attr("src", imageUrl);
    searchImage.attr("alt", "user image");

    //
    $("#images5").prepend(searchImage);
  });
});
 */
