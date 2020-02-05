new VConsole();
$(".wo-entry-prev-next").wrap("<div class=\"mdui-row\">");
$(".wo-entry-prev-next *").addClass("mdui-btn mdui-btn-block mdui-ripple mdui-btn-raised mdui-text-color-black-text").wrap("<div class=\"mdui-col-xs-6\">");
$("#wo-comments input[type=submit]").addClass("mdui-btn mdui-btn-block mdui-color-blue-a200");
$("#wo-comments input[type=input]").addClass("mdui-textfield-input").wrap("<div class=\"mdui-textfield\">").attr("maxlength", "60").before("<i class=\"mdui-icon material-icons\">account_circle</i>");
$(".wo-reply-textarea").addClass("mdui-textfield-input").attr("maxlength", "2000").before("<label class=\"mdui-textfield-label\">Message</label>").wrap("<div class=\"mdui-textfield mdui-textfield-floating-label\">");
//主题色设置
$("body").addClass("mdui-theme-primary-indigo mdui-theme-accent-pink");
