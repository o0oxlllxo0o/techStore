const database=require('../model/database.js')
const convertNumber=require('../method/convertNumber.js')
module.exports.thanhToan=function(req,res){
	let data={}

	res.render('thanhtoan',{data:data})
}
module.exports.confirmIf=async function(req,res){
	let data1=await database.getAll();
	let data=data1.filter(function(data){
		return req.cookies.ds.indexOf(data.tensanpham)>-1
	})

	const soluong=req.cookies.sl.split(',')

	database.nguoimuahang(req.body)

	let madonhang=await database.madonhang(req.body)

	for(let i=0;i<data.length;i++){
		let chitietdonhang={}
		chitietdonhang.madonhang=madonhang[0].id
		chitietdonhang.masanpham=data[i].id
		chitietdonhang.tensanpham=data[i].tensanpham
		chitietdonhang.giasanpham=data[i].giasanpham
		chitietdonhang.soluong=soluong[i]
		database.chitietdonhang(chitietdonhang)
	}
// tra ve trang tru
	res.cookie("ds","")
	res.cookie("sl","")

	data1=await database.trangchu()
	data=data1.map(function(x){
		x.giacv=convertNumber(x.giasanpham)
		return x
	})
	let complete="Thanh toán thành công!"
	res.render('thanhtoan',{complete:complete})

}