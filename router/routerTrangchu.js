const express = require('express')
const app = express()
const router = express.Router()
var controlTrangchu=require('../control/controlTrangchu.js')

router.get('/',controlTrangchu.trangchu)

module.exports=router