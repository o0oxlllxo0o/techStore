
var data=document.cookie.split(';').map(function(dulieu){
	return dulieu.trim()
})
var tensp
var soluong

if(data[0].charAt(0)=='d'){
	tensp=data[0].substr(3,data[0].length)
	soluong=data[1].substr(3,data[1].length)
}
else{
	tensp=data[1].substr(3,data[1].length)
	soluong=data[0].substr(3,data[0].length)
}

document.getElementById("submit1").addEventListener('click',function(){
	let name=document.getElementById("tensanpham").textContent
	if(tensp==''){
		tensp+=name
		soluong+='1'
		document.cookie="ds="+tensp+';path=/'
		document.cookie="sl="+soluong+';path=/'
	}
	else
		if(document.cookie.indexOf(name)==-1){
			tensp+=','+name
			soluong+=',1'
			document.cookie="ds="+tensp+';path=/'
			document.cookie="sl="+soluong+';path=/'
		} 
})


