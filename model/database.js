var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'thietbi'
})
module.exports.getAll=function(){
	return new Promise((res,rej)=>{
		connection.query('SELECT * from sanpham',
		function (err,rows,fields){
			if(err) throw err
				res(rows)
				rej(err)
		})

	})
}
module.exports.trangchu= function(){
	return new Promise((res,rej)=>{
		connection.query('SELECT * from sanpham where id <=10',
		 function (err, rows, fields) {
  		if(err) throw err
  		res(rows)
  		rej(err)
		})
	})

}
module.exports.laptop= function(){

	return new Promise((res,rej)=>{
		connection.query('SELECT * from sanpham where idsanpham =2',
		 function (err, rows, fields) {
  		if(err) throw err
  		res(rows)
  		rej(err)
		})
	})

}
module.exports.dienthoai= function(){
	return new Promise((res,rej)=>{
		connection.query('SELECT * from sanpham where idsanpham =1',
		 function (err, rows, fields) {
  		if(err) throw err
  		res(rows)
  		rej(err)
		})
	})
}
module.exports.nguoimuahang=function(data){
	connection.query(`INSERT INTO donhang(tenkhachhang, sodienthoai, email) VALUES ('${data.tenKh}', '${data.sdt}', '${data.email}')`,
		function(err,rows,fields){
			if(err) throw err
		})
}
module.exports.chitietdonhang=function(data){
	connection.query(`INSERT INTO chitietdonhang(madonhang, masanpham, tensanpham, giasanpham, soluongsanpham) VALUES ('${data.madonhang}', '${data.masanpham}', '${data.tensanpham}', '${data.giasanpham}', '${data.soluong}')`,
		function(err,rows,fields){
			if(err) throw err
		})
}
module.exports.madonhang=function(data){
	return new Promise((res,rej)=>{
		connection.query(`SELECT MAX(id) as id from donhang where email= '${data.email}'`,function(err,rows,fields){
			if(err) throw err
			res(rows)
			rej(err)
		})
	})
}
