
//the navigation
$(document).ready(function (){
          goFromTo("#about_anchor","#about");
          goFromTo("#services_anchor","#services");
          goFromTo("#contact_anchor","#contact");

});

function goFromTo(id_1,id_2){
  $(id_1).click(function (){
      $('html, body').animate({
          scrollTop: $(id_2).offset().top
      }, 1000);
  });
}
