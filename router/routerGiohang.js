const express = require('express')
const app = express()
const router = express.Router()
var controlGiohang=require('../control/controlGiohang.js')
router.get('/',controlGiohang.giohang)

module.exports=router