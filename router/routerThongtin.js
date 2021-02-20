const express = require('express')
const app = express()
const router = express.Router()
var controlThongtin=require('../control/controlThongtin.js')
router.get('/',controlThongtin.thongtin)

module.exports=router