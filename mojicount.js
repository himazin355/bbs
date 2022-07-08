function checkText(){
	let e=document.getElementById("result_mojicount");
	let l=document.getElementById("message");
	let a=l.value;
	let f=-1;
	let j=0;

	//var c=a.replace(/[\n\r]/g,"");
	for(i=0;i<=a.length;i++){
		f+=1;
	}
	let g=Math.floor(f);

	e.innerHTML=g;
	return j;
}

function save() {
	writeCookie("name", document.getElementById("name").value, 1);
	writeCookie("pass", document.getElementById("pass").value, 1);
}

function load() {
	document.getElementById("name").value = readCookie("name");
	document.getElementById("pass").value = readCookie("pass");
}

function writeCookie(key, value, years) {
	if (key == "") return;
	let d = new Date();
	d.setFullYear(d.getFullYear() + years * 1);
    document.cookie = key + "=" + escape(value) + "; expires=" + d.toGMTString();
}

function readCookie(key) {
    if (key == "") return;

    let re = new RegExp(escape(key) + "=(.*?)(?:;|$)");
    if (document.cookie.match(re)) return unescape(RegExp.$1);
        return "";
}

if(!document.all){
	window.addEventListener("load",checkText,false);
	window.addEventListener("load",load,false);
}else{
	window.attachEvent("onload",checkText);
	window.attachEvent("onload",load);
} 
