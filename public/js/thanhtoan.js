var ten=document.getElementById('validationCustom01')
var gmail=document.getElementById('exampleInputEmail1')
var sdt=document.getElementById('validationCustom02')
var submit=document.getElementById('submit')
var complete=document.getElementById('success')
if(localStorage.ten!="undefined"){
	ten.value=localStorage.ten
	gmail.value=localStorage.gmail
	sdt.value=localStorage.sdt
}
submit.addEventListener('click',function(){
	localStorage.setItem("ten",ten.value)
	localStorage.setItem("gmail",gmail.value)
	localStorage.setItem("sdt",sdt.value)
})
if(complete){
	alert('Thanh toán thành công!')
	location.replace('/')
}


