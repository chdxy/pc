/* var $tean=$("#tean");
 var $team=$("#team");
 console.log($team);
 $tean.mousemove(function(){
     $team.show();
 })*/

$("#tean").mousemove(function(){
    $("#team").css("display","block")
});
$("#team").mouseleave(function(){
    $("#team").css("display","none")
});

/*contenr*/

/*轮播图*/
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', //  方向
    loop: true, //  循环轮播
    autoplay:true,
    speed: 3000,
    //effect: 'cube',
    paginationClickable:true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
    mousewheelControl: true, //是否开启鼠标控制Swiper切换。
    //设置为true时，能使用鼠标滚轮控制slide滑动。

    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

});


<!--new-title-right-->
$("#subarea").mousedown(function(){
    $("#subarea-east").css("display","block")
      $("#alliance-east").css("display","none")
      $("#alliance-westward").css("display","none")
      $("#subarea-westward").css("display","none")

});
$("#alliance").mousedown(function(){
      $("#alliance-east").css("display","block")
    $("#subarea-east").css("display","none")
    $("#subarea-westward").css("display","none")
    $("#alliance-westward").css("display","none")
});
$("#westward").mousedown(function(){
      $("#alliance-westward").css("display","block")
    $("#subarea-east").css("display","none")
    $("#subarea-westward").css("display","none")
    $("#alliance-east").css("display","none")
});
$("#east").mousedown(function(){
      $("#alliance-east").css("display","block")
    $("#subarea-east").css("display","none")
    $("#subarea-westward").css("display","none")
    $("#alliance-westward").css("display","none")
});

/*    <!--视频-->*/
$("#game").mousedown(function(){
    $("#game-content").css("display","block")
    $("#optimum-content").css("display","none")
    $("#special-content").css("display","none")
})
$("#optimum").mousedown(function(){
    $("#optimum-content").css("display","block")
    $("#game-content").css("display","none")
    $("#special-content").css("display","none")
})
$("#special").mousedown(function(){
    $("#special-content").css("display","block")
    $("#game-content").css("display","none")
    $("#optimum-content").css("display","none")
});


