const database=require('../model/database.js')
module.exports.dienthoai=async function(req,res){
	let data=await database.dienthoai()
	res.json(data)
}