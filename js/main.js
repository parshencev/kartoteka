window.onload=function(){rename();}
window.onresize=function(){rename();}
function rename(){
	if(window.innerWidth<=560) document.body.className="small";
	else document.body.className="";
}