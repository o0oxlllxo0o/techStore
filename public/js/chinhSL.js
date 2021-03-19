var data=document.cookie.split(';').map(function(dulieu){
  return dulieu.trim()
})
var tensp
var soluong


if(data[0].charAt(0)=='d'){
  tensp=data[0].substr(3,data[0].length).split(',')
  soluong=data[1].substr(3,data[1].length).split(',')
}
else{
  tensp=data[1].substr(3,data[1].length).split(',')
  soluong=data[0].substr(3,data[0].length).split(',')
}

var tang=document.getElementsByClassName("tangSL")
var SL=document.getElementsByClassName("SL")
var giam=document.getElementsByClassName("giamSL")
var giaSP=document.getElementsByClassName("giaSP")
var tongtien=document.getElementById("tongtien")
var thanhtoan=document.getElementById("thanhtoan")
var tong=0;

function stringToNumber(number){
	return parseInt(number.split('.').join(''))
}
function numberToString(Number){
	let result=""
    let count=0
    let number=parseInt(Number)
    if(Number<1)return 0
    while(number>=1){
      if(count==2&&number>10){
        count=0
        result='.'+number%10+ result
      }
      else{
        result=number%10+result
        count++
      }
      number/=10
      number =parseInt(number)
    }
  return result
}

for(let i=0;i<SL.length;i++){
	tong+=stringToNumber(giaSP[i].textContent)*soluong[i]
}
for(let i=0;i<SL.length;i++){
	tang[i].addEventListener('click',function(){
		if(SL[i].placeholder<10){
			SL[i].placeholder=++SL[i].placeholder
		    tong+=stringToNumber(giaSP[i].textContent)		    
		    tongtien.textContent=numberToString(tong)+' đ'
		    soluong[i]++
		    document.cookie="sl="+soluong+';path=/'
		}
			
	})
	giam[i].addEventListener('click',function(){
		if(SL[i].placeholder>1){
			SL[i].placeholder=--SL[i].placeholder
		    tong-=stringToNumber(giaSP[i].textContent)
		    tongtien.textContent=numberToString(tong)+' đ'
		    soluong[i]--
		    document.cookie="sl="+soluong+';path=/'
		}	
	})
}
tongtien.textContent=numberToString(tong)+' đ'

thanhtoan.addEventListener('click',function(){
	if(tensp==""||soluong==""){
		alert("Mời bạn mua hàng để có thể thanh toán!")
	}
})