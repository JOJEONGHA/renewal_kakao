$(function(){
    $(".main_cont").on("mousewheel DOMMouseScroll",function(e){
        e.preventDefault();
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;
      
        if (delta < 0) {
            $(".main_cont").stop().animate({scrollLeft: $(".main_cont").scrollLeft() + 50}, 0, "linear");
        } else {
            $(".main_cont").stop().animate({scrollLeft: $(".main_cont").scrollLeft() - 50},  0, "linear");
        }
    })
})