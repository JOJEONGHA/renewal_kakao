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
    // text 설정
    // 1. dp1 해당 클래스 ty 뒤 숫자 찾기
    // 2. 해당 숫자에 맞는 json text 찾기
    // 3. text tag 찾기
    // 4. tag에 글자 설정 및 animation 리셋
    if(num == 1){
        let ty_order = class_txt.indexOf("ty");
        ty_order = class_txt.substr(ty_order+2,1);

        let pmtag = $(".main_cont .main_wrap .int_cont .int_wrap > a > .txt_wrap"), 
            mtag = pmtag.children(".txt_tit"),
            mtxt = obj.main_txt["page" + ty_order];
        mtag.html(mtxt);

        mtag.removeClasss("on");
        void mtag.offsetWidth;
        mtag.addClasss("on");
        // var clone_tag = mtag.cloneNode(true);
        // pmtag.replaceChild(clone_tag, mtag);
    }
}

