const express=require('express')
const app=express()
const port=3000

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug')

const database=require('./model/database.js')

app.get('/dienthoai',(req,res)=>{
	res.render('dienthoai',{})
})
app.get('/',async (req,res)=>{
	let data=await database.trangtru()
	res.json(data)
})
app.listen(port,()=>{
	console.log(`Ket noi thanh cong den cong ${port}`)
})