var array = [1,2,3,4,5,6,7,8,9];

var rotateRight = function(k){
	for(var j=0;j<k;j++){
		for(var i=array.length-1;i>0;i--){
			
			
			var temp = array[i-1];
			array[i-1] = array[i];
			array[i] = temp 
			console.log(i,array[i]);
		}
	}
}

rotateRight(100)
console.log(array);