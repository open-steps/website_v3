(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-66821417-1', 'auto');
ga('send', 'pageview');

var currentBgImageIndex = 0;

(function($) {
    
  var changeBgImage = function(){
    currentBgImageIndex = getRandomInt(0, 13);  
    $("#past").backstretch("res/bg/bg"+currentBgImageIndex+".jpg"); 
  }
  
  changeBgImage();  
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  var linkLabels = ['Articles','Directory','Events','Media','Resources','Wiki'];
  
  $("a:visible[id*='link']").each(function (i, el) {
    $(this).on('click',function(){
      ga('send', 'event', 'button', 'click', 'link buttons', linkLabels[i] );
    });    
  });
  
  // setInterval(function () {    
  //   changeBgImage();
  // }, 5000);

})(jQuery);
