$('html, body').hide();
$(document).ready(function(){
	if(window.location.hash){
		console.log(window.location.hash)
		$('html, body').scrollTop(0).show();
		$('html, body').animate({
		    'scrollTop': $(window.location.hash).offset().top - 50
		}, 900, 'swing');
	}
	else{
		$('html, body').show();
	}
	
	$('a[href*="#"][href!="#"]').on('click',function (e) {
	    if(this.pathname == window.location.pathname) e.preventDefault();
	    if(!this.classList.contains('staff-member') && !this.classList.contains('search_box')){
		    var target = this.hash;
		    var $target = $(target);
		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top - 50
		    }, 900, 'swing');
		}
	});
});
// var jump=function(e)
// {
//    if (e){
//        e.preventDefault();
//        var target = $(this).attr("href");
//    }else{
//        var target = location.hash;
//    }

//    $('html,body').animate(
//    {
//        scrollTop: $(target).offset().top
//    },2000,function()
//    {
//        location.hash = target;
//    });

// }

// $('html, body').hide();

// $(document).ready(function()
// {
//     $('a[href^=#]').bind("click", jump);

//     if (location.hash){
//         setTimeout(function(){
//             $('html, body').scrollTop(0).show();
//             jump();
//         }, 0);
//     }else{
//         $('html, body').show();
//     }
// });
// $(document).ready(function() {
// 	console.log(window.location.hash)
// });