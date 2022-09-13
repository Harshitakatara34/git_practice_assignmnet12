// let string="Amana";
// let isPalindrome="Yes";
// let N=string.length;
// for(let i=N-1;i>=0;i--){
//     if(string[i]!=string[N-1-i]){
//         isPalindrome="No";
//     }
// }
// console.log(isPalindrome); 

let name = "naman"
let n = name.length;
let bag =""
for(let i=n-1;i>=0;i--){
    bag +=name[i];
}
if(bag == name){
    console.log('Palindrome')
}else {
    console.log('Not')
}





