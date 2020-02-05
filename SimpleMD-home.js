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
