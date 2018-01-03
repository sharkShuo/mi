$(function () {
    // 顶部导航部分
    var navLis = $('.top_ul li');
    navLis.eq(1).mouseover(function () {
        $('.hide_nav').stop(true).slideDown(500);
    });
    navLis.eq(1).mouseout(function () {
        $('.hide_nav').stop(true).slideUp(500);
    });

    function slide(i) {
        navLis.eq(i).mouseover(function () {
            $('.hide_nav' + i).stop(true).slideDown(500);
        });
        navLis.eq(i).mouseout(function () {
            $('.hide_nav' + i).stop(true).slideUp(500);
        });
    }

    slide(2);
    slide(3);
    slide(4);
    slide(5);
    slide(6);

    // 输入框部分
    var input = $('.top_ul input');
    var search = $('.search');
    var btn = $('.top_ul button')
    input.focus(function () {
        search.stop(true).fadeIn(500);
        btn.addClass('active');
    })
    input.blur(function () {
        search.stop(true).fadeOut(500);
        btn.removeClass('active');
    })

    // 小米明星单品部分
    var lbtn = $('.lbtn');
    var rbtn = $('.rbtn');
    var font = $('.font');
    var fontLis = $('.font li');
    var starBox = $('.star');

    lbtn.click(function () {
        lbtn.css('color', '#666');
        rbtn.css('color', '#bbb');
        starBox.animate({
            left: 0,
            right: 0
        }, 500);
    })
    rbtn.click(function () {
        rbtn.css('color', '#666');
        lbtn.css('color', '#bbb');
        // 向右1230即向左-1230
        starBox.stop(true).animate({
            right: '1230px',
            left: '-1230px'
        }, 500);
    })

    // 大轮播图
    var play = $('.playimg');
    var banner = $('.banner');
    var leftArr = $('.larr');
    var rightArr = $('.rarr');
    var cater = $('.cater');

    // 小圆点
    var ols = $('.botol li');

    banner.mouseover(function () {
        leftArr.show();
        rightArr.show();
    });
    banner.mouseout(function () {
        leftArr.hide();
        rightArr.hide();
    })
    var caterLis = $('.cater li')
    lisWidth = $('.cater li').width();
    cater.width = lisWidth * caterLis.length + 'px';
    console.log(lisWidth);
    var index = 0;
    var count = 0;
    ols.eq(0).css('backgroundColor', 'orangered');


    leftArr.click(function () {
        if (index <= 0) {
            // 实现无缝轮播
            index = caterLis.length - 1;
            $('.cater').css('left', -index * lisWidth + 'px');
        }
        index--;
        // 这里要对.cater使用动画，因为它的长度才是1000%,而要对cater的父元素.play使用overflow:hidden,而且宽度为一个图片的宽度，
        // 这样才不会有bug
        cater.stop(true).animate({
            left: index * -lisWidth + 'px',
            right: index * lisWidth + 'px'
        }, 500);
          // 同步小圆点
          if(count <= 0){
              count = caterLis.length - 1;
          }  
          count --;
          for(var i = 0; i < caterLis.length; i ++){
              ols.eq(i).css('backgroundColor', 'rgba(108, 108, 108, 0.6)');
          }
          ols.eq(count).css('backgroundColor', 'orangered');

    });
    rightArr.click(function () {
        // 实现无缝轮播
        if (index >= caterLis.length - 1) {
            index = 0;
            $('.cater').css('left', 0);
        }
        index++;
        cater.stop(true).animate({
            right: index * lisWidth + 'px',
            left: index * -lisWidth + 'px'
        }, 500);

        // 同步小圆点
        count ++;
        if(count >= caterLis.length - 1){
            count = 0;
        }  
        for(var i = 0; i < caterLis.length; i ++){
            ols.eq(i).css('backgroundColor', 'rgba(108, 108, 108, 0.6)');
        }
        ols.eq(count).css('backgroundColor', 'orangered');
    })

});