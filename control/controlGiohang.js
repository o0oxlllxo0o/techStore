const database=require('../model/database.js')
const convertNumber=require('../method/convertNumber.js')


module.exports.giohang=async function(req,res){
	let data1=await database.getAll()
	let data=data1.filter((val)=>{
		val.giacv=convertNumber(val.giasanpham)
		return req.cookies.ds.indexOf(val.tensanpham)>-1
	})
	res.render('giohang',{data:data})
}
module.exports.muahang=async function(req,res){
	res.render('thanhtoan')
}