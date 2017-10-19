$(function(){
    ///侧导航
    // let navmenu=document.querySelector('.nav-menu');
    let navl=document.querySelector('.nav-l');
    let navcloser=document.querySelector('.nav-closer');
    $('.nav-menu').click(function(){
        let navlw=navl.offsetLeft;
        if(navlw<=0){
            navl.style.left=0;
            navcloser.style.opacity=1;
        }
        if(navlw==0){
            navl.style.left='-540px';
            navcloser.style.opacity=0;
        }
        // $('.nav-l').toggle('slow');
    })
    $('.nav-closer').click(function(){
        navl.style.left='-540px';
        this.style.opacity=0;
    });

    ////nav  按钮
    let navTopsmall=document.querySelector('.navTop-small');
    let nsw=window.innerWidth;
    $('.navTop-small').click(function(){
        navl.style.left=0;
        navcloser.style.opacity=1;
    });
    ///楼层跳转
    let navb=document.querySelectorAll('.navb span');
    let ch=innerHeight;
    let flag=true;
    let beautifulArr=[];
    $('.csorr').each(function(index,element){
        beautifulArr.push(element.offsetTop)
    });
    $('.navb span').each(function(index,element){
        $(this).click(function(){
            $('.navb span').each(function(index,element){
                element.style.color='#808080';
            });
            // flag=false;
            element.style.color='#000';
            $('body').animate({scrollTop:beautifulArr[index]},function(){
                // flag=true;
            });
        });
        ///第一个
         $('.nav-btn li:first-of-type span').click(function(){
            // flag=false;
            // element.style.color='#000';
            $('body').animate({scrollTop:beautifulArr[0]},function(){
                // flag=true;
            });
        });
         ///最后一个
         $('.nav-btn li:last-of-type span').click(function(){
            // flag=false;
            // element.style.color='#000';
            $('body').animate({scrollTop:beautifulArr[beautifulArr.length-1]},function(){
                // flag=true;
            });
        });
        $(this).mouseover(function(){
            $(this).css({color:'#000'});
        });
        $(this).mouseout(function(){
            $(this).css({color:'#808080'});
        })
    });
    let navTop=$('.navTop');
    window.onscroll=function(){
        let scrolltop1=document.body.scrollTop;
        if(scrolltop1>=100){
            navTop.css({position:'fixed',left:0,top:0,zIndex:99});
        }
        if(!flag){
            return;
        }
        let scrolltop=document.body.scrollTop;
        beautifulArr.forEach((index,element)=>{
            if(scrolltop+ch>=index+50){
                $('.navb span').each(function(index,element){
                    element.style.color='#808080';
                });
                navb[element].style.color='#000';
            }
        })
    };


    ///banner轮播图
    let banner=$('.banner');
    let bannerimg=$('.banner-img');
    let bilis= $('.banner-img > li');
    let t;
    t=setInterval(move,2500);
    //左右按钮
    let imgleft=$('.bm-left');
    let imgright=$('.bm-right');
    let bw=bilis.width();
    let now=num=0;
    function move(){
         $('.bm-right',banner).triggerHandler('click')
        
    }
    ///左边按钮
    
    $('.bm-left').click(function(){
        num--;
       if(num<0){
            num=bilis.length-1;
        }
        bilis.eq(num).css({left:-bw});
        bilis.eq(num).animate({left:0});
        bilis.eq(now).animate({left:bw+1000});
        now=num;
    });
       
    ///右边按钮
    $('.bm-right').click(function(){
         num++;
       if(num==bilis.length){
            num=0;
        }
        bilis.eq(num).css({left:bw});
        bilis.eq(num).animate({left:0});
        bilis.eq(now).animate({left:-bw-1000});
        now=num;
    })
    
});

