module.exports= function(Number){
	let result=""
    let count=0
    let number=parseInt(Number)
    while(number>=1){
      if(count==2&&number>10){
        count=0
        result='.'+number%10+ result
      }
      else{
        result=number%10+result
        count++
      }
      number/=10
      number =parseInt(number)

    }
  return result
}