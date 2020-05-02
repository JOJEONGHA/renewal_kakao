$(function(){
    let mimg = $(".main_cont .main_wrap .int_cont .int_wrap > a > .img_wrap"),
        lbtn = $(".main_cont .main_wrap .int_cont .int_wrap .lbtn"),
        rbtn = $(".main_cont .main_wrap .int_cont .int_wrap .rbtn"),
        amount = 4;

    lbtn.click(function(){
        mimg.each(function(index,ele){
            mclc(index,ele,1,amount);
        })
    })
    rbtn.click(function(){
        mimg.each(function(index,ele){
            mclc(index,ele,-1,amount);
        })
    })
})

function mclc(index,ele,dir,amount){
    let class_txt = $(ele).attr("class"),
        order = class_txt.indexOf("dp");
    
    let num = class_txt.substr(order+2,1);
    num = Number(num);
    $(ele).removeClass("dp" + num);

    num += dir;
    if(num < 0)
        num = amount-1;
    else if(num > (amount-1))
        num = 0;

    $(ele).addClass("dp" + num);
}

