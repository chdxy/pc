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

/*�ֲ�ͼ*/
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', //  ����
    loop: true, //  ѭ���ֲ�
    autoplay:true,
    speed: 3000,
    //effect: 'cube',
    paginationClickable:true,//�˲�������Ϊtrueʱ�������ҳ����ָʾ���ҳ�������Swiper�л���
    mousewheelControl: true, //�Ƿ���������Swiper�л���
    //����Ϊtrueʱ����ʹ�������ֿ���slide������

    // �����Ҫ��ҳ��
    pagination: '.swiper-pagination',

    // �����Ҫǰ�����˰�ť
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

/*    <!--��Ƶ-->*/
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


