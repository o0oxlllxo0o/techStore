const express = require('express')
const app = express()
const router = express.Router()
const database=require('../model/database.js')

router.get('/',async (req,res)=>{
	let data=await database.dienthoai()
	res.json(data)
})

module.exports=router