$(document).ready(function(){

  $("#news-filter a.filter-item").on("click", function(){
    var curId = $(this).attr("href");
    $("#news-filter a.filter-item").removeClass("active");
    $(this).addClass('active');
    if($(this).data('filter') == 'all') {
      $("#bulltein-board>div.col-12").fadeIn('fast');
    } else {
      $("#bulltein-board>div.col-12."+$(this).data('filter')).fadeIn('fast');
      $("#bulltein-board>div.col-12:not(."+$(this).data('filter')+")").fadeOut('fast');
    }
  });
});


function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
/*關閉側欄，恢復原始側欄寬度，主體左跨度、背景透明度*/
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
	document.body.style.backgroundColor = "white";
}