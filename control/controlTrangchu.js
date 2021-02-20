const database=require('../model/database.js')
module.exports.trangchu=async function(req,res){
	let data=await database.trangtru()
	res.json(data)
}