const express = require('express')
const app = express()
const router = express.Router()
var trangchu=require('../control/controlTrangchu.js')
router.get('/',trangchu.trangchu)

module.exports=router