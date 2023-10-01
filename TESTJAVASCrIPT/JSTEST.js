const factorials = (n) => {
  let product = 1;
  while(n > 1){
      product *= n;
      n--;
  }
  console.log(product);
  return product;  
}

factorials(10);
//  Factorial with arrow function 
console.log('Hi');