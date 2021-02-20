const express = require('express')
const app = express()
const router = express.Router()
var controlDienthoai=require('../control/controlDienthoai.js')


router.get('/',controlDienthoai.dienthoai)

module.exports=router