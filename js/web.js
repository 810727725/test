$(function(){
       $('.sidebar > .nav-icon > span').click(function(){
	      $(this).parent().find('.nav-item').slideToggle();
	   });
	   //2级菜单
	   $('.nav-item div').click(function(){
	      $('*').children('.two').removeClass('blue');
          $(this).addClass('blue').siblings().removeClass('blue');
		  if($(this).hasClass('two')){
			   $('.sidebar-right').show();
			   $('.navbar-inner').show().removeClass('navbar-inner-left');
			  $('.sidebar-nav').eq($('.nav-item div.two').index(this)).show().siblings('.sidebar-nav').hide();
			  if($('.sidebar-right').is(":hidden")){
			$('.viewFramework-product').css('left','150px');
			}else{
			$('.viewFramework-product').css('left','350px');
			}   
		  //$("#tab-content > ul").eq($('#tab-title span').index(this)).show().siblings().hide();
		  }else{
			 $('.sidebar-right').hide(); 
			 $('.viewFramework-product').css('left','150px');
		  }
	   });
	   //3级菜单
	  $('.sidebar-nav li.dropdown').click(function(){
        $(this).find('i').toggleClass('fa-sort-up');
		$(this).children('ul').toggle();
	   });
	    $('.dropdown ul').click(function(){
		return false;
	   });
	   //4级菜单
	   $('.dropdown ul li').click(function(){
		   $(this).css('background','#fff').siblings().css('background','');
	   });
	   //隐藏按钮切换
	   $('.navbar-inner').click(function(){
	    $('.sidebar-right').toggle();
		$(this).toggleClass('navbar-inner-left');
		$(this).children('span').toggleClass('fa-dedent');
			 if($('.sidebar-right').is(":hidden")){
		$('.viewFramework-product').css('left','150px');
		}else{
		$('.viewFramework-product').css('left','350px');
		}   
	   });
	   //隐藏3级菜单
	   if($('.sidebar-right').is(":hidden")){
		$('.viewFramework-product').css('left','150px');
		}
		
      //热词选择
	  $('.hot-words-content a').click(function(){
		   //$(this).each(function(){
		 $(this).toggleClass('bjred');
		   if($(this).hasClass('bjred')){
		    $('.reci').append('<span>'+$(this).text()+'<i>&#215;</i></span>');
			 var index = $('.hot-words-content a').index(this);
			  alert($('.hot-words-content a').eq(index).text());
			// alert(index);
		 }
	 });
	  
	  $('.reci i').click(function(){
		  $(this).parent().css('display','none');
	  });
	  
	  //条件筛选
	  $('#tjsx').click(function(){
		  $('.filter').show();
	  });
	 //tab切换
	 $('.tabBar span').first().addClass('current')
	 $('.tabCon').eq(0).show();
	  $('.tabBar span').hover(function(){
		  $(this).addClass('current').siblings().removeClass('current');
		  var index=$('.tabBar span').index(this);
		   $('.tabCon').hide();
		  $('.tabCon').eq(index).show();
	  });
      //清单选择
     $('.select_list_body a').click(function(){
		 $(this).addClass('red');
		 if($(this).hasClass('red')){ 
		  $('.select_bar').append('<span>'+$(this).text()+'</span>');
		 }else{
			//$('.select_bar').find($(this).text()).remove();
			$('.select_bar').children('span').eq($(this).index()).remove();
			//$("span",this.parentNode).remove();
		 }


	 });

     //时间控件
     laydate({
                elem: '#J-xl'
            });
			 laydate({
                elem: '#J-xl-2'
            });
  });

//圆角TAG标签
function selectTag(showContent,selfObj){
    // 操作标签
    var tag = document.getElementById("tags").getElementsByTagName("li");
    var taglength = tag.length;
    for(i=0; i<taglength; i++){
        tag[i].className = "";
    }
    selfObj.parentNode.className = "selectTag";
    // 操作内容
    for(i=0; j=document.getElementById("tagContent"+i); i++){
        j.style.display = "none";
    }
    document.getElementById(showContent).style.display = "block";
}
//档案资料
function infor(){
    $('.bg_dialog').show();
    $('#infor').show();
}
function jilu(){
    $('.bg_dialog').show();
    $('#jilu').show();
}
function mes(){
    $('.bg_dialog').show();
    $('#mes').show();
}
function hide(){
    $('.bg_dialog').hide();
    $('#mes').hide();
    $('#jilu').hide();
    $('#infor').hide();
}