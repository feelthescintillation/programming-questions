function findPrime(n){
	var count = 0;
	var prime=1;

	while(count<n){
		//console.log("prime",prime)
		var divider =2
		while (divider < prime){
			if (prime%divider == 0){
				break;
			}
			divider++;
		}
		if(divider===prime){
			console.log(prime);
			count++;
		} 
		//console.log("div",divider)
		prime++;
	}
}

findPrime(100)