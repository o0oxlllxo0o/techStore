const express = require('express')
const app = express()
const router = express.Router()

var controlLaptop=require('../control/controlLaptop.js')
var checkCookieDS=require('../midelware/themDsCookie.js')

router.get('/',checkCookieDS,controlLaptop.laptop)
router.get('/:id',checkCookieDS,controlLaptop.showInf)

module.exports=router