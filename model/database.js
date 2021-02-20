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
		connection.query('SELECT * from sanpham', function (err, rows, fields) {
  		if(err) throw err
  		res(rows)
  		rej(err)
		})
	})
connection.end()
}