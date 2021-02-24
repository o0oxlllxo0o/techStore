const database=require('../model/database.js')
const convertNumber=require('../method/convertNumber.js')


module.exports.laptop=async function(req,res){
	let data1=await database.laptop()
	let data=data1.map(function(x){
	x.giacv=convertNumber(x.giasanpham)
	return x
})
	res.render('laptop',{data})

}
module.exports.showInf=async function(req,res){
	let data1=await database.laptop()
	let data=data1.find(function(x){
		x.giacv=convertNumber(x.giasanpham)
		return x.id==req.params.id
	})
	res.render('showSp',{data:data})
}