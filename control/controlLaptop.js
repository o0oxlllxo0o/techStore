const database=require('../model/database.js')
const convertNumber=require('../method/convertNumber.js')


module.exports.laptop=async function(req,res){
	let data1=await database.laptop()
	let data=data1.map(function(x){
	x.giasanpham=convertNumber(x.giasanpham)
	return x
})
	res.render('laptop',{data})

}
module.exports.showInf=function(req,res){
	res.send(req.params)
}