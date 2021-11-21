const sum=(n1,n2)=>n1+n2;
console.log(process.argv);
const num1=parseInt(process.argv[2]);
const num2=parseInt(process.argv[3]);
console.log(sum(num1,num2));