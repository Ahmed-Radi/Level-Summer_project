$(document).ready(function(){
	
	$("span").hide();
	$(".JQa").click(function()
		{
			$(".a").toggle(4000);
			$(".JQa").hide(4000);
		});
	$(".JQb").click(function()
		{
			$(".b").toggle(4000);
			$(".JQb").hide(4000);
		});
	$(".JQc").click(function()
		{
			$(".c").toggle(4000);
			$(".JQc").hide(4000);
		});
		/***************************/
	$(".a").click(function()
		{
			$(".JQa").toggle(4000);
			$(".a").hide(4000);
		});
	$(".b").click(function()
		{
			$(".JQb").toggle(4000);
			$(".b").hide(4000);
		});
	$(".c").click(function()
		{
			$(".JQc").toggle(4000);
			$(".c").hide(4000);
		});
			/************************/
			
	$(".sha").click(function()
		{
			$(".sh_a").toggle(3000);
			$(".sha").toggle(3000);
			$(".shh1").css("color","#eb5255");
		});
	$(".shb").click(function()
		{
			$(".sh_b").toggle(2000);
			$(".shb").toggle(2000);
			$(".shh2").css("color","#eb5255");
		});
	$(".shc").click(function()
		{
			$(".sh_c").toggle(2000);
			$(".shc").toggle(2000);
			$(".shh3").css("color","#eb5255");
			
		});
		/***************************/
		
	$(".sh_a").click(function()
		{
			$(".sha").show(3000);
			$(".sh_a").hide(3000);
			$(".shh1").css("color","#000");
		});
	$(".sh_b").click(function()
		{
			$(".shb").show(2000);
			$(".sh_b").hide(2000);
			$(".shh2").css("color","#000");
		});
	$(".sh_c").click(function()
		{
			$(".shc").show(2000);
			$(".sh_c").hide(2000);
			$(".shh3").css("color","#000");
		});
		/*Slider Show Section*/
	$(function () {

	  var timer;
	  $(".images img :gt(0)").hide();
	  $(".images").mouseenter(function(){
		if (timer) {clearInterval(timer)}
	  })
	  .mouseleave(function(){
		timer =   setInterval(function(){
		$(".images :first-child").fadeOut(2000).next('img').fadeIn()
		.end().appendTo(".images");
	  },5000);
	  }).mouseleave();
	});
/*Slider Show Section*/
});






