const express=require('express')
const app=express()
const port=3000

app.set('view engine', 'pug')

app.get('/',(req,res)=>{
	res.render('trangtru',{})
})
app.listen(port,()=>{
	console.log(`Ket noi thanh cong den cong ${port}`)
})