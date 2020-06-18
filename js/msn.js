document.writeln("<div id=\"msn\" style=\"BORDER-RIGHT:#455690 1px solid; BORDER-TOP:#a6b4cf 1px solid; Z-INDEX:99999; LEFT:0px;  BORDER-LEFT:#a6b4cf 1px solid; WIDTH:180px; BORDER-BOTTOM:#455690 1px solid; POSITION:absolute; TOP:0px; HEIGHT:116px; BACKGROUND-COLOR:#c9d3f3\">");
document.writeln("<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"BORDER-TOP:#ffffff 1px solid; BORDER-LEFT:#ffffff 1px solid\" bgcolor=\"#cfdef4\">");
document.writeln("<td valign=\"middle\" width=\"19\" align=\"right\"><img src=\"Í¼Æ¬/00010.gif\" hspace=\"3\" style=\"CURSOR:pointer\" onclick=\"closeDiv()\" title=\"¹Ø±Õ\"\/><\/td>");
document.writeln("<\/tr><tr><td colspan=\"3\" height=\"90\" style=\"PADDING-RIGHT:1px;BACKGROUND-IMAGE:url(images/msgBottomBg.jpg);PADDING-BOTTOM:1px\">");
document.writeln("<div style=\"BORDER-RIGHT: #b9c9ef 1px solid; FONT-SIZE: 1pt; HEIGHT: 100%\"><br><br><a href=\"https://www.xhku.xyz/painting.html\">µã»÷Ç°Íù<\/a><\/div><\/div><\/tr><\/table><\/div>");

msn.style.top=document.body.clientHeight-174;
msn.style.left=document.body.clientWidth-225;
moveR();
function moveR() {
msn.style.top=document.body.scrollTop+document.body.clientHeight-116;
msn.style.left=document.body.scrollLeft+document.body.clientWidth-180;
setTimeout("moveR();",80)
}
function closeDiv(){
	msn.style.visibility='hidden';
}