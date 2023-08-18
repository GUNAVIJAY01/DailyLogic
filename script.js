// 1.
	console.log("multiplication logic")
{
	let a=5;
for(i=1;i<=10;i++){
	console.log(`${i}*${a}=${i*a}`)	
}
}

// 2.
console.log("array count method")
{
let ip=[1,33,443,2323];
let map=ip.map((s)=>{
	let count=0;
	while(s!=0){
		let rem=(s%10);
			s=(s-rem)/10
			 count++
	}	
	return count

})
console.log(map)

}