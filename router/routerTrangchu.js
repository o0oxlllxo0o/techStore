const express = require('express')
const app = express()
const router = express.Router()
var controlTrangchu=require('../control/controlTrangchu.js')
var checkCookieDS=require('../midelware/themDsCookie.js')
router.get('/',checkCookieDS,controlTrangchu.trangchu)

module.exports=router