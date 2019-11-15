$(document).ready(function() {
  $("#class-tab-list a.side-nav-item").on("click", function(){
    var preId = $("#class-tab-list a.side-nav-item.active").data("href");
    var curId = $(this).data("href");
    $("#class-tab-list a.side-nav-item").removeClass('active');
    $(this).addClass('active');
  
    $(preId).fadeOut('fast', function() {
      $(curId).fadeIn('fast', function() {
        
      });
    });
  });
}); 

