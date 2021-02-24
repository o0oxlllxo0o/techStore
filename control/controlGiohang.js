const database=require('../model/database.js')
const convertNumber=require('../method/convertNumber.js')


module.exports.giohang=async function(req,res){
	console.log(req.cookies.dsd)
	let data1=await database.getAll()
	let data=data1.filter((val)=>{
		val.giacv=convertNumber(val.giasanpham)
		return req.cookies.ds.indexOf(val.tensanpham)>-1
	})
	console.log(req.cookies)
	res.json(data)
}