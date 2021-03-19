const express=require('express')
const app=express()
const port=3000
var cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))	
app.set('view engine', 'pug')

var routerTrangchu=require('./router/routerTrangchu.js')
var routerDienthoai=require('./router/routerDienthoai.js')
var routerLaptop=require('./router/routerLaptop.js')
var routerThongtin=require('./router/routerThongtin.js')
var routerGiohang=require('./router/routerGiohang.js')
var routerSearch=require('./router/routerSearch.js')
var routerThanhtoan=require('./router/routerThanhtoan.js')

app.use('/',routerTrangchu)
app.use('/laptop',routerLaptop)
app.use('/dienthoai',routerDienthoai)
app.use('/thongtin',routerThongtin)
app.use('/giohang',routerGiohang)
app.use('/search',routerSearch)
app.use('/thanhtoan',routerThanhtoan)

app.listen(port,()=>{
	console.log(`Ket noi thanh cong den cong ${port}`)
})