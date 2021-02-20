var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'thietbi'
})

module.exports.trangtru= function(){
	connection.connect()

	return new Promise((res,rej)=>{
		connection.query('SELECT * from sanpham where id <=10',
		 function (err, rows, fields) {
  		if(err) throw err
  		res(rows)
  		rej(err)
		})
	})
connection.end()
}
module.exports.laptop= function(){
	connection.connect()

	return new Promise((res,rej)=>{
		connection.query('SELECT * from sanpham where idsanpham =2',
		 function (err, rows, fields) {
  		if(err) throw err
  		res(rows)
  		rej(err)
		})
	})
connection.end()
}
module.exports.dienthoai= function(){
	connection.connect()

	return new Promise((res,rej)=>{
		connection.query('SELECT * from sanpham where idsanpham =1',
		 function (err, rows, fields) {
  		if(err) throw err
  		res(rows)
  		rej(err)
		})
	})
connection.end()
}
