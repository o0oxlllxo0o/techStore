const express = require('express')
const app = express()
const router = express.Router()
var controlLaptop=require('../control/controlLaptop.js')


router.get('/',controlLaptop.laptop)

module.exports=router