const express=require('express')
const app=express()
const port=3000

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug')



var routerTrangtru=require('./router/routerTrangtru.js')
app.use('/',routerTrangtru)
app.get('/laptop',async (req,res)=>{
	let data=await database.laptop()
	res.json(data)
})
app.get('/dienthoai',async (req,res)=>{
	let data=await database.dienthoai()
	res.json(data)
})

app.listen(port,()=>{
	console.log(`Ket noi thanh cong den cong ${port}`)
})