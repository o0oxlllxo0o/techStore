const express=require('express')
const app=express()
const port=3000

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug')

var routerTrangchu=require('./router/routerTrangchu.js')
var routerDienthoai=require('./router/routerDienthoai.js')
var routerLaptop=require('./router/routerLaptop.js')
var routerThongtin=require('./router/routerThongtin.js')
var routerGiohang=require('./router/routerGiohang.js')
var routerSearch=require('./router/routerSearch.js')
app.use('/',routerTrangchu)
app.use('/laptop',routerLaptop)
app.use('/dienthoai',routerDienthoai)
app.use('/thongtin',routerThongtin)
app.use('/giohang',routerGiohang)
app.use('/search',routerSearch)
app.listen(port,()=>{
	console.log(`Ket noi thanh cong den cong ${port}`)
})