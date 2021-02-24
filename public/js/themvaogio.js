if(document.cookie==""){
		document.cookie="ds=;path=/"
	}
var data=document.cookie
document.getElementById("submit1").addEventListener('click',function(){
	let name=document.getElementById("tensanpham").textContent
	data+=name+';'
	if(document.cookie.indexOf(name)==-1){
		document.cookie=data+';path=/'
	} 
})


