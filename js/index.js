$(function(){
    ///侧导航
    let navmenu=document.querySelector('.nav-menu');
    let navl=document.querySelector('.nav-l');
    let navcloser=document.querySelector('.nav-closer');
    navmenu.onclick=function(){
        let navlw=navl.offsetLeft;
        if(navlw<=0){
            navl.style.left=0;
            navcloser.style.opacity=1;
        }
        if(navlw==0){
            navl.style.left='-540px';
            navcloser.style.opacity=0;
        }
    };
    navcloser.onclick=function(){
        navl.style.left='-540px';
        navcloser.style.opacity=0;
    };

    ////nav  按钮
    let navTopsmall=document.querySelector('.navTop-small');
    let nsw=window.innerWidth;
    console.log(nsw)
    navTopsmall.onclick=function(){
        navl.style.left=0;
        navcloser.style.opacity=1;
    };

    //     navcloser.onclick=function(){
    //         if(nsw<=768){
    //         navl.style.left='-600px';
    //         navcloser.style.opacity=0;
    //     }
    // };

    ///banner左右按钮
    let bmleft=document.querySelector('.bm-left');
    let bmright=document.querySelector('.bm-right');
    let bmlefti=document.querySelector('.bm-left>i');
    let bmrighti=document.querySelector('.bm-right>i');
    // bmleft.onmouseover=function(){
    //     bmlefti.style.marginLeft='14px';
    // }
    // bmright.onmouseover=function(){
    //     bmrighti.style.marginLeft='12px';
    // }
    // bmleft.onmouseout=function(){
    //     bmlefti.style.marginLeft='35px';
    // }
    // bmright.onmouseout=function(){
    //     bmrighti.style.marginLeft='-11px';
    // }
    ///楼层跳转
    let csorr=document.querySelectorAll('.csorr');
    let navb=document.querySelectorAll('.navb span');

    let ch=innerHeight;
    let flag=true;
    let beautifulArr=[];
    csorr.forEach(element=>{
        beautifulArr.push(element.offsetTop)
    })
    navb.forEach((element,index)=>{
        element.onclick=function(){
            for(let i=0;i<navb.length;i++){
                navb[i].style.color='#808080';
            }
            flag=false;
            element.style.color='#000';
            animate(document.body,{scrollTop:beautifulArr[index]},function(){
                flag=true;
            })
        }
        element.onmouseover=function(){
            element.style.color='#000';
        }
        element.onmouseout=function(){
            element.style.color='#808080';
        }
    })
    let navTop=document.querySelector('.navTop');
    window.onscroll=function(){
        let scrolltop1=document.body.scrollTop;
        if(scrolltop1>=100){
            navTop.style.position='fixed';
            navTop.style.left=0;
            navTop.style.top=0;
            navTop.style.zIndex=99;
        }
        if(!flag){
            return;
        }
        let scrolltop=document.body.scrollTop;
        beautifulArr.forEach((value,index)=>{
            if(scrolltop+ch>=value+50){
                for(let i=0;i<navb.length;i++){
                    navb[i].style.color='#808080';
                }
                navb[index].style.color='#000';
            }
        })
    }


    ///banner轮播图
    let banner=$('.banner');
    let bannerimg=document.getElementsByClassName('banner-img')[0];
    let bilis=bannerimg.getElementsByTagName('li');
    // let bannerbtn=document.getElementsByClassName('banner-btn')[0];
    // let bblis=bannerbtn.getElementsByTagName('li');
    let t;
    t=setInterval(move,3500);
    // let now=0;
    let num=0;
    function move(){
        num++;
        if(num==bilis.length){
            num=0;
        }
        for(let i=0;i<bilis.length;i++){
            // bblis[i].style.background= '#98979B';
            bilis[i].style.opacity=0;
        }
        bilis[num].style.opacity=1;
        // bblis[num].style.background= '#fff';
    }
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(move,3000);
    }
    //左右按钮
    let imgleft=$('.bm-left',banner)[0];
    let imgright=$('.bm-right',banner)[0];
    imgleft.onclick=function(){
        num--;
        if(num<0){
            num=bilis.length-1;
        }
        for(let i=0;i<bilis.length;i++){
            // bbli[i].style.background= 'rgba(0,0,0,0.4)';
            // bbli[i].style.border='2px solid rgba(255,255,255,0.5)';
            bilis[i].style.opacity=0;
        }
        // bbli[num].style.background= 'rgba(159,162,166,0.5)';
        // bbli[num].style.border='2px solid rgba(255,255,255,0.8)';
        bilis[num].style.opacity=1;
    }

    imgright.onclick=function(){
        move();
    }
});

