const express = require('express')
const app = express()
const router = express.Router()
var controlThongtin=require('../control/controlThongtin.js')
var checkCookieDS=require('../midelware/themDsCookie.js')
router.get('/',checkCookieDS,controlThongtin.thongtin)

module.exports=router