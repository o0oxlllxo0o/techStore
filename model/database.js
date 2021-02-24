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
