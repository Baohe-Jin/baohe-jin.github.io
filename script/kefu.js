function setCookie(objName, objValue, objHours) {
    var str = objName + "=" + escape(objValue);
    if (objHours > 0) {
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
}
function getCookie(objName) {
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);
    }
    return "";
}
function reMoveCookie(name){
	setCookie(name,1,-1);
}
$(function(){	
	if(getCookie('openState') == 'false'){			
		$('#widgets_wrap').addClass('widgets_small');
		$('.widgets_top span').addClass('widgets_hide');
		$('.widgets_top i').text('展开');
	}else if(getCookie('openState') == 'true'){			
		$('#widgets_wrap').removeClass('widgets_small');
		$('.widgets_top span').removeClass('widgets_hide');
		$('.widgets_top i').text('收起');			
	}
	$('.widgets_top').click(function(){	
		if(getCookie('openState') == 'false'){
			setCookie("openState","true",7);
		}else if(getCookie('openState') == 'true'){
			setCookie("openState","false",7);
		}else{
			setCookie("openState","true",7);
		}
		var $_text = $(this).children('i').text();
		$('#widgets_wrap').toggleClass('widgets_small');
		$(this).children('span').toggleClass('widgets_hide');
		if($_text == '收起'){
			$(this).children('i').text('展开');
		}else{
			$(this).children('i').text('收起');
		}
	});
	$('#widgets_backtop').click(function(){
		$('html,body').animate({scrollTop:0},500);
	});
	$('#weixin').hover(function(){
		$(this).children('span').show();
	},function(){
		$(this).children('span').hide();
	});
	$('#weixin').click(function(){
		$(this).children('span').fadeToggle('fast');
	});
});
