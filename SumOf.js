// A simple Javascript program to find
//three elements whose sum is equal to zero

function sumofArray(array) {
    const Array = [1, 2, -3];
    let sum = 0;
  
    for (let i = 0; i < Array.length; i += 1) {
      sum += Array[i];
    }
    
    return sum;
  }
  
  console.log(sumofArray([1, 2, -3]));     
