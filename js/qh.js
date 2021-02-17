$(function(){
	$("#gghd li").mouseover(function(){
		$(this).addClass("xzz").siblings().removeClass("xzz");

		var index = $(this).index();
			if(index==0){
				$("#xshd").css({"display":"none"});
				$("#xsgg").css({"display":"block"});
			}else{
				$("#xshd").css({"display":"block"});
				$("#xsgg").css({"display":"none"});
			}
})

// 进群链接 

 	$("#href1").click(function(){
		$(this).fadeOut(160);
	})

	setInterval(function(){
		$("#href1").fadeIn(160);
	},6000)



})//最大的函数包含



