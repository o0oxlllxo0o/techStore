const express = require('express')
const app = express()
const router = express.Router()
var search=require('../method/search.js')
var checkCookieDS=require('../midelware/themDsCookie.js')

router.get('/',checkCookieDS,search)

module.exports=router