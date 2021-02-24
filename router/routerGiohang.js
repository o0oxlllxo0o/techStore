const express = require('express')
const app = express()
const router = express.Router()
var controlGiohang=require('../control/controlGiohang.js')
var checkCookieDS=require('../midelware/themDsCookie.js')
router.get('/',checkCookieDS,controlGiohang.giohang)


module.exports=router