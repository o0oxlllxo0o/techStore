const express=require('express')
const app=express()
const port=3000

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug')

var routerTrangtru=require('./router/routerTrangtru.js')
var routerDienthoai=require('./router/routerDienthoai.js')
var routerLaptop=require('./router/routerLaptop.js')
var routerThongtin=require('./router/routerThongtin.js')
var routerGiohang=require('./router/routerGiohang.js')
app.use('/',routerTrangtru)
app.use('/laptop',routerLaptop)
app.use('/dienthoai',routerDienthoai)
app.use('/thongtin',routerThongtin)
app.use('/giohang',routerGiohang)
app.listen(port,()=>{
	console.log(`Ket noi thanh cong den cong ${port}`)
})