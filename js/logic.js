(function($) {
 $('#timeline .item').on('click', function() {
  $(this).class('.item');
 });

 $('.sitemap').on('click', function() {
  console.log("sitemap");
  $("#sitemap").slideDown("fast", function() {
   // Animation complete.
  });
 });

})(jQuery); // end of jQuery name space
