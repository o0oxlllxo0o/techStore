const express=require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{
	res.send('Day la trang tru')
})
app.listen(port,(){
	console.log(`Ket noi thanh cong den cong ${port}`)
})