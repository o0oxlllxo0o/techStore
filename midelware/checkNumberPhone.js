module.exports=function(req,res,next){
	let data=req.body;
	let err={};
	if(data.sdt.charAt(0)!='0'||data.sdt.length!=10){
		err.phone="Số điện thoại của bạn không đúng!"
	}
	else for(let i=0;i<10;i++){
		if(data.sdt.charAt(i)>57&&data.sdt.charAt(i)<48){			
			err.phone="Số điện thoại của bạn không đúng!"
			break;
		}
	}
	if(err.phone){
		res.render('thanhtoan',{err:err})
	}
	next()
}