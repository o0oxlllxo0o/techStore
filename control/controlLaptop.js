const database=require('../model/database.js')
module.exports.laptop=async function(req,res){
	let data=await database.laptop()
	res.json(data)
}