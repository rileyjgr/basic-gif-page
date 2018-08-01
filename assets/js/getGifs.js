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
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Jouf48SlZuDz7W7ODP6bYA6q5ZBEDcGV&tag=chess";

  $.ajax({
    url: queryURL,
    method: "GET"
  })


  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var chessImage = $("<img>");

    chessImage.attr("src", imageUrl);
    chessImage.attr("alt", "chess image");

    $("#images3").prepend(chessImage);
  });
});

//Dogs
$("#dog-button").on("click", function() {

  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Jouf48SlZuDz7W7ODP6bYA6q5ZBEDcGV&tag=dog";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var dogImage = $("<img>");

    dogImage.attr("src", imageUrl);
    dogImage.attr("alt", "dog image");

    $("#images4").prepend(dogImage);
  });
});

//Dogs
$("#dog-button").on("click", function() {

  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Jouf48SlZuDz7W7ODP6bYA6q5ZBEDcGV&tag=dog";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var dogImage = $("<img>");

    dogImage.attr("src", imageUrl);
    dogImage.attr("alt", "dog image");

    $("#images4").prepend(dogImage);
  });
});


let goSearch = () => {
  $('#search-input').on('submit', function() {
    var tag_Id= $(this).children('input[name=userInput]').val();
    var tag_Item= $(this).find('input[name="input-button"]').text();

  });
}

//Random gif
$("#random-button").on("click", function() {

  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Jouf48SlZuDz7W7ODP6bYA6q5ZBEDcGV&tag=random";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var randomImage = $("<img>");

    randomImage.attr("src", imageUrl);
    randomImage.attr("alt", "random image");

    $("#images5").prepend(randomImage);
  });
});

//top of the week
$("#hot-button").on("click", function() {

  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Jouf48SlZuDz7W7ODP6bYA6q5ZBEDcGV&tag=top-week";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var topImage = $("<img>");

    topImage.attr("src", imageUrl);
    topImage.attr("alt", "top image");

    $("#images6").prepend(topImage);
  });
});

//top of the week
$("#wtf-button").on("click", function() {

  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Jouf48SlZuDz7W7ODP6bYA6q5ZBEDcGV&tag=wtf";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {

    var imageUrl = response.data.image_original_url;

    var wtfImage = $("<img>");

    wtfImage.attr("src", imageUrl);
    wtfImage.attr("alt", "wtf image");

    $("#images7").prepend(wtfImage);
  });
});


// this works but its lazy
const clearPage = () => {
  let clearButton = document.getElementById('clear-button');
  location.reload();
}


/* const input = () => {
  let searchText = document.getElementById('test');
} */

const goSearch = () => {
  let search = document.getElementById("searchForm")
  $(document).ready(function() {

  event.preventDefault();

  var $form = $(this),
      term = $form.find('input[name="s"]').val(),
      url = $form.attr('action');

  var fmurl = "https://api.giphy.com/v1/gifs/random?api_key=Jouf48SlZuDz7W7ODP6bYA6q5ZBEDcGV&tag=" +fmurl;

    $.getJSON(fmurl, function(data) {
      var html = '';
      $.each(data.results.trackmatches.track, function(i, item) {
          html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>" + "<img>" + item.artwork + "</img>";
      });
      $('#results').append(html);
      console.log(fmurl);
  });
  });
}
]
