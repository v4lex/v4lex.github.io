$(document).ready(function() {

if($.cookie("ody-theme") == 1){
	$(".hero-jumbo").css({background:'linear-gradient(242deg, #F65656, #393CF2) 0% 0% / 200% '});
	$(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
}

if($.cookie("ody-theme") == 2){


	$(".hero-jumbo").css({background:'linear-gradient(242deg, #8454a8, #98587d,#af5c4c) 0% 0% / 200% '});
	$(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
}

if($.cookie("ody-theme") == 3){
	

	$(".hero-jumbo").css({background:'linear-gradient(242deg, #534548, #da0628) 0% 0% / 200% '});
	$(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
}

if(!$.cookie("ody-theme")){
	$(".hero-jumbo").css({background:'linear-gradient(242deg, #F65656, #393CF2) 0% 0% / 200% '});
	$(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
}



$("#classic").on('click',function(){

	$.cookie("ody-theme", 1);
	$(".hero-jumbo").css({background:'linear-gradient(242deg, #F65656, #393CF2) 0% 0% / 200% '});
	$(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});


 });

 $("#Sugarfree").on('click',function(){

	$.cookie("ody-theme", 2);

	$(".hero-jumbo").css({background:'linear-gradient(242deg, #58B5C1, #CFCFCF) 0% 0% / 200% '});
	$(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
 });

 $("#Mango").on('click',function(){

	$.cookie("ody-theme", 3);

	$(".hero-jumbo").css({background:'linear-gradient(242deg, #00FFFF, #FFA201) 0% 0% / 200% '});
	$(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
 });
 

	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		//i.e. apply safari class via jquery
		$(".navbar").addClass("fancy");
	}

	if ($("#hero-container").length > 0) {
		window.addEventListener("scroll", function() {
			if ($(window).scrollTop() > $("#hero-container").height()) {
				$("body").addClass("page-scrolled");
				$(".navbar").removeClass("clearbg");
			} else {
				$("body").removeClass("page-scrolled");
				$(".navbar").addClass("clearbg");
			}
		}, { passive: true });
	}
	console.log(window.location.pathname);

	$(".none_shall_know").on('click',function(){



	   $(".hero-jumbo").css({'background-image': 'url("https://pbs.twimg.com/media/EQh9D61X0AURDK_.jpg")'});
	   $(".hero-jumbo").css({'background-repeat': 'repeat'});
	   $(".hero-jumbo").css({'background-size': '200px'});
	   
	});
   
});








