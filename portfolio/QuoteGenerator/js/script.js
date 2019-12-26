new WOW().init();
$(document).ready(function(){
  getQuote();
    $('.nextButton').on('click',function(){
        getQuote();

    });
  });
function getQuote() {
  var cb = Math.round(new Date().getTime() / 1000);
  url="https://quotesondesign.com/wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1";
  $.getJSON(url, function(json) {
    
$('#quote').html('<p> <i class="fa fa-quote-left" aria-hidden="true"></i> '+json[0].content.rendered.replace('</p>','').replace('<p>','')+' <i class=" fa fa-quote-right" aria-hidden="true"></i></p>');
$('#title').html(json[0].title)
  });
}
