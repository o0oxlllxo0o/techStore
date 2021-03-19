module.exports=function(req,res,next){
	if(!req.cookies.ds){
		res.cookie("sl","")
		res.cookie("ds","")
	}
	next()
}