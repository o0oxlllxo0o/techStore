const express = require('express')
const app = express()
const router = express.Router()
var search=require('../method/search.js')


router.get('/',search)

module.exports=router