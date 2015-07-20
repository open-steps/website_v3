(function($) {

  var sitemap_open = false;

  $('#timeline .item').on('click', function() {
    $(this).class('.item');
  });

  $('#sitemap-open').on('click', function() {
    $("#sitemap").slideDown("slow", function() {
      console.log("sitemap opened");
      $("#past").hide();
      $("#present").hide();
      $("#friends").hide();
      $("#beyond").hide();
    });
  });

  $('#sitemap-close').on('click', function() {
    $("#past").show();
    $("#present").show();
    $("#friends").show();
    $("#beyond").show();
    $("#sitemap").slideUp("slow", function() {
      console.log("sitemap closed");
    });
  });

})(jQuery); // end of jQuery name space
