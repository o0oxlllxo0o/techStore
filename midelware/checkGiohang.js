module.exports=function(req,res,next){
	if(req.cookies.ds==""||req.cookies.sl==""){
		
		res.redirect('/')
	}
	next()
}