//chenjiajun 
//2014/09/02

//page init
$(document).ready(function() {
	setPageHeight();
});

$(window).resize(function(){
	setPageHeight();
});

function setPageHeight() {
	//set page width and height
	var clientHeight = $(window).height();
	var pageHeight = clientHeight - $(".header").height() - 50;
	if(pageHeight <500){
		pageHeight = 500;
	}
	$(".page,.showPage").height(pageHeight);
}