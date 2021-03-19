const express = require('express')
const app = express()
const router = express.Router()

const controlThanhtoan=require('../control/controlThanhtoan.js')
const checkGiohang=require('../midelware/checkGiohang.js')
const checkNumberPhone=require('../midelware/checkNumberPhone.js')
router.get('/',checkGiohang,controlThanhtoan.thanhToan)
router.post('/',checkGiohang,checkNumberPhone,controlThanhtoan.confirmIf)
module.exports=router