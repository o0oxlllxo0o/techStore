const database=require('../model/database.js')
const convertNumber=require('../method/convertNumber.js')

module.exports.trangchu=async function(req,res){
	let data1=await database.trangchu()
	let data=data1.map(function(x){
		x.giasanpham=convertNumber(x.giasanpham)
		return x
	})
	res.render('trangchu',{data})
}