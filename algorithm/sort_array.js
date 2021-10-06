function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16];
bubbleSort(numbers);
console.log(numbers);

------------------------------------------------------------

r =[3,4,5,1];

function isSorted(r){
	for (x=0;x<r.length-1;x++){ if (r[x] > r[x+1]){ return false;} 	
	}
	return true;
}


while (!isSorted(r)){
	for (x=0;x<r.length-1;x++){ if (r[x] > r[x+1]){
		  rx=r[x];
		  r[x]=r[x+1];
		  r[x+1]=rx;	
	  }	
	}
}


console.log(r);
