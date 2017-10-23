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
    let navTopsmall=$('.navTop-small');
    let nsw=window.innerWidth;
    navTopsmall.click(function(){
        let navlw=navl.offsetLeft;
        if(navlw<=0){
            navl.style.left=0;
            navcloser.style.opacity=1;
        }
        if(navlw==0){
            navl.style.left='-540px';
            navcloser.style.opacity=0;
        }
    });
    ///产品展示
    // let indexcaselis=$('.index-case li');
    let caseimg=$('.case-Img li .cI>img')
    $('.index-case li',this).hover(function(){
        $('.mask',this).stop()
        $('.mask',this).animate({opacity:1})
        $('.index-case li',this).mouseenter(function(){
            console.log(1)
            // console.log($('.cI').find('img'))
            $('.cI>img').each(function(){
            $(this).addClass('fangda')
            })

        })
    },function(){
        $('.mask',this).stop()
        $('.mask',this).animate({opacity:0}).mouseleave(function(){
            console.log(2)
            $('.cI').find('img').removeClass('fangda')
            })

    });
    // $('.mask',this).hover(function(){
    //     console.log(1)
    //     $('.case-Img li .cI').css('transform','scale(1.1,1.1)')
    // },function(){
    //     console.log(2)
    //     $('.case-Img li .cI').css('transform','scale(1,1)')
    // });
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
        let indexvideo=$('.index-video');
        let indexabout=$('.index-about');
        let indexbottomcontact=$('.index-bottomcontact ul');
        let indexcase=$('.index-case .case-Img li');
        let allis=$('.about-left li');
        let h3=$('h3');
        console.log(indexcase)
    window.onscroll=function(){  
        let scrolltop1=document.body.scrollTop;
        if(scrolltop1>=100){
            navTop.css({position:'fixed',left:0,top:0,zIndex:99});
            navTopsmall.css({position:'fixed',left:0,top:0,zIndex:99});
        }
        if(!flag){
            return;
        }

        let scrolltop=document.body.scrollTop;
        beautifulArr.forEach((index,element)=>{
            if(scrolltop+ch>=index){
                $('.navb span').each(function(index,element){
                    element.style.color='#808080';
                });
                navb[element].style.color='#000';
                
            }
        })
        if(scrolltop+ch>=1000){
            indexcase.css({transform:'translateY(0)'})
            h3.eq(0).css({transform:'translateY(0)'})
        }
        if(scrolltop+ch>=1500){
            // indexvideo.css({transform:'translateY(0)'})
            h3.eq(1).css({transform:'translateY(0)'})
        }
        if(scrolltop+ch>=1800){
            indexabout.css({transform:'translateY(0)'})

        }
        if(scrolltop+ch>=2000){
            // allis.css({transform:'translateY(0)'})
            allis.each(function(index){
               $(this).delay(index*2000).css({transform:'translateY(0)'})
            })
        }
        if(scrolltop+ch>=2500){
            indexbottomcontact.css({transform:'translateY(0)'})
            h3.eq(2).css({transform:'translateY(0)'})
        }
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
    let now = num = 0;
    function move(){
          num++;
       if(num==bilis.length){
            num=0;
        }
        bilis.eq(num).css({opacity:0});
        bilis.eq(num).stop()
        bilis.eq(num).animate({opacity:1,zIndex:1});
        bilis.eq(now).animate({opacity:0});
        now=num;
         
        
    }
    ///左边按钮
    $('.banner-main').mouseover(function(){
        clearInterval(t)
    })
    $('.banner-main').mouseout(function(){
        t=setInterval(move,2500);
    })
    imgleft.click(function(){
        
        num--;
       if(num<0){
            num=bilis.length-1;
        }

        bilis.eq(num).css({opacity:0});
        bilis.eq(num).stop()
        bilis.eq(num).animate({opacity:1});
        bilis.eq(now).animate({opacity:0});
        now=num;
    });
       
    ///右边按钮
    imgright.click(function(){
        move();
    })

})

