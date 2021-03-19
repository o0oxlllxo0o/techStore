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

var danhsachSP=document.getElementsByClassName("sp")
var stt=document.getElementsByClassName("stt")
var buttonXoa=document.getElementsByClassName("xoaSP")
var tongtien=document.getElementById("tongtien")
var giaSP=document.getElementsByClassName("giaSP")
var SL=document.getElementsByClassName("SL")

function stringToNumber(number){
	return parseInt(number.split('.').join(''))
}
function numberToString(Number){
	let result=""
    let count=0
    let number=parseInt(Number)
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
  SL[i].placeholder=soluong[i]
}
for(let i=0;i<danhsachSP.length;i++){
	buttonXoa[i].addEventListener('click',function(){
		let tenSP=danhsachSP[i].getElementsByClassName('tenSP')[0].textContent
		tensp=tensp.filter((ten) =>ten!=tenSP)
    soluong[i]=-1
    soluong=soluong.filter(sl=>sl!=-1)
    document.cookie="ds="+tensp+';path=/'
    document.cookie="sl="+soluong+';path=/'
	 	tongtien.textContent=numberToString(stringToNumber(tongtien.textContent)-stringToNumber(giaSP[i].textContent)*SL[i].placeholder)

		danhsachSP[i].style.display="none"
		for(let j=i;j<buttonXoa.length;j++){
			stt[j].innerHTML=stt[j].textContent-1	
		}		
	})
}