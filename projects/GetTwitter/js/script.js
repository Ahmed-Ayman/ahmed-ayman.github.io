
  $(document).ready(function() {
    // first off : the results div will be waiting for an input.
    $('#results').text('kindly click the search Icon and enter the userName to display the corresponding tweets');
    $('#results').css("color","green","font-weight","bold");

    //getting  twitter api cardentials and using Codebird library to authenticate.
    var cb = new Codebird;
    cb.setConsumerKey("UqdmI7Pa5X28YLIaogx9NdwxN", "Lg1ryTa0E7hjZETJMhx0hd89xYcz9lgA3eLxXOQXU0gIiOo2Hp");
    cb.setToken("3429429593-4IHkCMF9Fvh197IRls0jreBOD4atxTYZVptDlHq", "sLqYjk8OUGmTFWBxCbYzuxLbZRgJuLLVMJjO4pvcWRVpW");

  /**
  * on search anchor clicked :
       - the overlay will be displayed
       - the tweets div will not be visible.
  */
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search_overlay').addClass('open');
        $('#search_overlay > input[name="screenName"]').focus();
        $('.container').hide();
    });
    //after closing the overlay:
    // - if the text field is null -> you gotta give me a userName
    // - else -> start using the APi and look for the user.
    $('#search_overlay, #search button.close').on('click keyup', function(event) {
          if (event.target == this || event.target.className == 'close' || event.keyCode == 27 || event.keyCode == 13) {
              $(this).removeClass('open');
              $('.container').show();
              var screenName = $('input[name="screenName"]').val();
              if (screenName == "") {
                $('#results').text('kindly enter the userName to display the corresponding tweets');
                $('#results').css("color","red");
              }else {
                twitterSearch(screenName);
              }
          }
      });
    //the core searching function that calls the API and comes back with
    //JSON.
    function twitterSearch(screenName){
      cb.__call(
        "statuses_userTimeline", {
          "screen_name":screenName,
          "count": 5
        },
        function(tweets, rate, err) {

          if (tweets.length>0) { //there are tweets!
            $('#results').text('');
            $('#results').css('color','black');
            for (var i = 0 ; i < tweets.length ; i++) {
              var imageURL =tweets[i].user.profile_image_url;
              var name = tweets[i].user.name;
              var screenName= tweets[i].user.screen_name;
              var profileURL = "https://twitter.com/"+screenName;
              //I want just the day
              var creation_date = tweets[i].created_at; //eg,. Thu Sep 21 03:06:07 +0000 2017"
              creation_date = creation_date.split(' ') // ["Thu", "Sep", "21", "03:06:07", "+0000", "2017"]
              creation_date = creation_date[0]+' ' + creation_date[1] + ' ' + creation_date[2];
              var id = tweets[i].id;
              var text = tweets[i].text;
              $('#results').append(
              '<div class="row tweet"><li class="col-md-12">' +
              '<a href='+profileURL+'><img class = "image" src = '+imageURL+'/> </a>'+
              '<h3 class="title">  <a href='+profileURL+'> '+name+'</a> </h3>'+
              '<h5 class="screen_name"> @'+screenName +'</h5>'+
              '<h6 class="creation_date">'+ creation_date +'</h6>'+
              '<br> <p class="tweet_content">'+text+
              '</p> '+addBottomElements(screenName,id)+
              '</li><hr></div>');
            }
          }else {
            $('#results').text('user not found or there is no tweets yet!');
            $('#results').css("color","red");
          }

        //  $('#remaining').html('<p>Remaining API calls: ' + rate.remaining + '</p>');
          //show results in console for debugging
          //console.log(tweets);
          //console.log(rate);
          //console.log(err);
        }
      );
      //adding the like and retweet element for each node aka (tweet).
      function addBottomElements(screenName,tweet_id){
          var href = 'https://twitter.com/'+screenName+'/status/'+tweet_id;
          var likeButton = "<a href="+href+"><i class='fa fa-twitter fa-2x' aria-hidden='true'></i>";
          var retweet = "<a href="+href+"><i class='fa fa-retweet fa-2x' aria-hidden='true'></i>";
          var row = "<div class = 'container'> <div class='row text-center'>"+likeButton + retweet+" </div></div>";
            return row;
      }
    }

  });
