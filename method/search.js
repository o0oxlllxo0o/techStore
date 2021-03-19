var database=require('../model/database.js')
var convertNumber=require('../method/convertNumber.js')
module.exports= async function(req,res){
	var q=req.query.q.toUpperCase();
	let data= await database.getAll()
	let dataFind=data.filter(function(x){
		return x.tensanpham.toUpperCase().indexOf(q)>-1
	}).map(function(x){
		x.giacv=convertNumber(x.giasanpham)
		return x
	})

	res.render('trangchu',{data:dataFind})
}