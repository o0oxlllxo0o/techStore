const express = require('express')
const app = express()
const router = express.Router()

var controlDienthoai=require('../control/controlDienthoai.js')
var checkCookieDS=require('../midelware/themDsCookie.js')

router.get('/',checkCookieDS,controlDienthoai.dienthoai)
router.get('/:id',checkCookieDS,controlDienthoai.showInf)
module.exports=router