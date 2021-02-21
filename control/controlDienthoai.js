const database=require('../model/database.js')
const convertNumber=require('../method/convertNumber.js')
module.exports.dienthoai=async function(req,res){
	let data1=await database.dienthoai()
	let data=data1.map(function(x){
		x.giasanpham=convertNumber(x.giasanpham)
		return x
	})
	res.render('dienthoai',{data})
}
module.exports.showInf=async function(req,res){
	let data1=await database.dienthoai()
	let data=data1.find(function(x){
		x.giasanpham=convertNumber(x.giasanpham)
		return x.id==req.params.id
	})
	console.log(data)
	res.render('showSp',{data:data})
}