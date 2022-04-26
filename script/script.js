$(document).ready(function(){
    $("header > nav > .menu > li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $("ul.sub").stop().slideUp();
    },3000);//이미지슬라이드

});//ready