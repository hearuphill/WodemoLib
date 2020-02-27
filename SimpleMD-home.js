$(document).ready(function(){
new VConsole();
//pagination修改
$(".pagination>a").addClass("mdui-btn mdui-btn-raised").wrap("<div class=\"mdui-col\">");
$(".pagination>span").addClass("mdui-btn mdui-btn-raised").wrap("<div class=\"mdui-col\">").attr("disabled", "");
$(".pagination").wrap("<div class=\"mdui-row-xs-4\">");
//分类添加到菜单栏
$("a[href*='/cat/']").not(".pagination>span,.pagination>a").each(function() {
    $(this).attr("target", "_blank");
    $(this).appendTo(".fenlei");
});
$(".fenlei>a").wrap("<li class='mdui-list-item mdui-ripple'></li>");
//主题色设置
$("body").addClass("mdui-theme-primary-indigo mdui-theme-accent-pink");
//footer页脚
$(".wo-search-form").after("<br>");
$(".wo-search-form").after($('#wo-footer'));
});
//统计
eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0-4]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1.onload=function(){var 0;if(1.2){0=3 2()}else{0=3 ActiveXObject("Microsoft.XMLHTTP")}0.open("GET","http://pixiv.dns.navy/statistics/?4="+location.4,true);0.send()}',[],5,'xmlhttp|window|XMLHttpRequest|new|href'.split('|'),0,{}))
