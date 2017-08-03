/**
 * Created by dllo on 17/8/3.
 */
    //更多内容
    $(".more_green_div").on("click",function () {
        $(".more").hide();
        $(".my_hr").show();
    });

//滚轮事件
$(document).on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
        (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

    if (delta > 0) {
        // 向上滚
        $("#top").slideDown(1000);
        if($(window).scrollTop()<800){
            $("#click_top").hide();
        }
    } else if (delta < 0) {
        // 向下滚
//            console.log("wheeldown");
        if($(window).scrollTop()>100){
            $("#top").slideUp(1000);
        }
        if($(window).scrollTop()>500){
            $("#click_top").show();
        }

    }
});

//点top置顶
$("#click_top").on("click",function () {
    $(document.body).scrollTop(0);
})



