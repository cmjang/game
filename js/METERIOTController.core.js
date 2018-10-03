document.write('<div id="LoadingWrapper" style="position:fixed;top:0px;left:0px;width:100%;height:100%;vertical-align:middle;text-align:center;background:#FF6633;color:#FFFFFF;z-index:9999;"><h3>正在加载页面...请稍候...</h3><h3>This page is loading...Please wait...</h3><p>请注意,如果此页面长时间不消失,很可能是您的浏览器不支持此网页或此网页出现了重要错误,请联系网站管理员</p><p>Please note that if this page appear for a long time then your browser might not support this page, or this site has occurred an inner error, please contact the administrator</p><p>METERIOT WEBPAGE FRAMEWORK</p><!--[if lt IE 9]><p>当前网页<b>不支持</b>您正在使用的浏览器. 为了正常的访问,请升级您的浏览器</p><p>Sorry, this page does not support your current browser, to change this situation, you will need to update your browser</p><![endif]--></div>');
document.write("<!--[if lt IE 9]><p class=\"notice\">当前网页<b>不支持</b>您正在使用的浏览器. 为了正常的访问,请升级您的浏览器<br />Sorry, this page does not support your current browser, to change this situation, you will need to update your browser</p><![endif]-->");
var prompttime = 0;
    var browser = function () {   
    var agent = navigator.userAgent.toLowerCase(),  
    opera = window.opera,  
    browser = {  
        //检测当前浏览器是否为IE  
        ie: /(msie\s|trident.*rv:)([\w.]+)/.test(agent), 
 
        //检测当前浏览器是否为Opera  
        opera: (!!opera && opera.version), 
        //检测当前浏览器是否是webkit内核的浏览器  
        webkit: (agent.indexOf(' applewebkit/') > -1), 
        //检测当前浏览器是否是运行在mac平台下  
        mac: (agent.indexOf('macintosh') > -1), 
        //检测当前浏览器是否处于“怪异模式”下  
        quirks: (document.compatMode == 'BackCompat')  
    }; 
    //检测当前浏览器内核是否是gecko内核  
    browser.gecko = (navigator.product == 'Gecko' && !browser.webkit && !browser.opera && !browser.ie); 
    var version = 0; 
    // Internet Explorer 6.0+  
    if (browser.ie) {  
        var v1 = agent.match(/(?:msie\s([\w.]+))/);  
        var v2 = agent.match(/(?:trident.*rv:([\w.]+))/);  
        if (v1 && v2 && v1[1] && v2[1]) {  
            version = Math.max(v1[1] * 1, v2[1] * 1);  
        } else if (v1 && v1[1]) {  
            version = v1[1] * 1;  
        } else if (v2 && v2[1]) {  
            version = v2[1] * 1;  
        } else {  
            version = 0;  
        } 
        //检测浏览器模式是否为 IE11 兼容模式  
        browser.ie11Compat = document.documentMode == 11; 
        //检测浏览器模式是否为 IE9 兼容模式  
        browser.ie9Compat = document.documentMode == 9; 
        //检测浏览器模式是否为 IE10 兼容模式  
        browser.ie10Compat = document.documentMode == 10; 
        //检测浏览器是否是IE8浏览器  
        browser.ie8 = !!document.documentMode; 
        //检测浏览器模式是否为 IE8 兼容模式  
        browser.ie8Compat = document.documentMode == 8; 
        //检测浏览器模式是否为 IE7 兼容模式  
        browser.ie7Compat = ((version == 7 && !document.documentMode) || document.documentMode == 7); 
        //检测浏览器模式是否为 IE6 模式 或者怪异模式  
        browser.ie6Compat = (version < 7 || browser.quirks); 
        browser.ie9above = version > 8; 
        browser.ie9below = version < 9;  
    } 
    // Gecko.  
    if (browser.gecko) {  
        var geckoRelease = agent.match(/rv:([\d\.]+)/);  
        if (geckoRelease) {  
            geckoRelease = geckoRelease[1].split('.');  
            version = geckoRelease[0] * 10000 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;  
        }  
    } 
    //检测当前浏览器是否为Chrome, 如果是，则返回Chrome的大版本号  
    if (/chrome\/(\d+\.\d)/i.test(agent)) {  
        browser.chrome = +RegExp['\x241'];  
    } 
    //检测当前浏览器是否为Safari, 如果是，则返回Safari的大版本号  
    if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {  
        browser.safari = +(RegExp['\x241'] || RegExp['\x242']);
    } 
    // Opera 9.50+  
    if (browser.opera){ 
        version = parseFloat(opera.version()); 
	}
    // WebKit 522+ (Safari 3+)  
    if (browser.webkit){
        version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]); 
	}
    //检测当前浏览器版本号  
    browser.version = version; 
    return browser;  
}();


$(window).resize(
function(e){
	"use strict";
	$(".cover").css("width",GetWindowWidth()+"px");
	$(".cover").css("height",GetWindowHeight() + "px");
	var MyNav = $(".navbar-fixed-bottom");
	MyNav.css("top",(GetWindowHeight()- MyNav.outerHeight())+"px");
	var MyNT = $(".navbar-fixed-top");
	if(MyNT != null){
		//不为空
		$(".after-navbar-fixed").css("top",MyNT.height());
	}else{
		$(".after-navbar-fixed").css("top",0);
	}
	if(GetWindowWidth()<900){
		//是手机
		$(".row.navbar-row").hide();
	}else{
		$(".row.navbar-row").show();
	}
}
);
$(window).ready(
function() {
    "use strict";
	//开始加载页面
	$(".cover").css("width",GetWindowWidth()+"px");
	$(".cover").css("height",GetWindowHeight() + "px");
	$(".dropdownmenu").hide();
	$(".dropdownmenu:parent").addClass("dropdownparent");
	var MyNav = $(".navbar-fixed-bottom");
	MyNav.css("top",(GetWindowHeight()-MyNav.outerHeight())+"px");
	var MyNT = $(".navbar-fixed-top");
	if(MyNT !== null){
		//不为空
		$(".after-navbar-fixed").css("top",MyNT.height());
		$(document).addClass("has-navbar-top"); //设置一个有Navbar-Top类型
	}else{
		$(".after-navbar-fixed").css("top",0);
	}
	if(GetWindowWidth()<900){
		//是手机
		$(".row.navbar-row").hide();
	}else{
		$(".row.navbar-row").show();
	}
	$(".collapaser-pre-hidden").hide();
	$("navicon").click(
	function(e){
		//alert("Hi");
		var MyNavBar=$(e.target).parent();
		var MyRow=MyNavBar.children(".row.navbar-row");
		MyRow.toggle();
		if(MyNavBar.hasClass("navbar-fixed-bottom")){
			MyNavBar.css("top",(GetWindowHeight()-MyNavBar.outerHeight())+"px");
		}
	}
	);
	$(".collapsecontroller").click(
	function(e){
		var MyContainer = $(e.target).parent();
		var MyCollapaser = MyContainer.children(".collapaser");
		MyCollapaser.toggle();
	}
	);
	$(".dropdowncontroller").click(
	function(e){
		var MyDropParent = $(e.target).parent();
		var MyDropMenu = MyDropParent.children(".dropdownmenu");
		MyDropMenu.toggle();
	}
	);
	//$("a.btn").not("[href]").attr("href","javascript:void(0);");
	$("a").not("[href]").attr("href","javascript:void(0);");
	
	$("#LoadingWrapper").html('<h3>网页已经加载完成</h3><p>正在加载图片等素材....请稍候..</p><p>Your page is now finished loading, and is now loading the resources required for the page</p><p>Please wait...</p>');
	if(!browser.ie){
		//不是IE的话直接删掉,原因是不支持load()
		$("#LoadingWrapper").hide();
		$("#LoadingWrapper").remove();
	}
});
$(window).load(
	function(){
		"use strict";
		//这里页面完全加载完毕
		$("#LoadingWrapper").hide();
		$("#LoadingWrapper").remove();
	}
);

function GetWindowWidth(){
	"use strict";
	return $(window).width();
}
function GetWindowHeight(){
	"use strict";
	return $(window).height();
}
function PromptWindow(title,description,btnlink = ''){
	//默认只在电脑端弹出
	"use strict";
	if(GetWindowWidth()<900){return 1;}
	var basedoc1 = '<div class="" id="prompt' + prompttime + '" style="position:fixed;"><div class="container-fluid theme-color-black"><h5>' + title + '</h5><a href="javascript:$(\'#prompt' + prompttime + '\').remove();" style="float:right;">X</a></div><div class="container-fluid theme-color-blue-primary">' + description + '</div>';
	var basedoc2= '</div>';
	var mydoc;
	if(btnlink===''){
		mydoc = basedoc1 + basedoc2;
	}else{
		mydoc = basedoc1 + '<div class="container-fluid theme-color-blue-primary text-all-center"><a class="btn btn-primary" href="' + btnlink + '">了解详情</a></div>' + basedoc2;
	}
	document.write(mydoc);
	var myprompt = $("#prompt" + prompttime);
	myprompt.css("top",(GetWindowHeight-myprompt.height())/2);
	myprompt.css("left",(GetWindowWidth-myprompt.width())/2);
	myprompt.fadeIn();
	prompttime += 1;
}