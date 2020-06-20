function candySwap(A,B){
    let a=makeDeepCopy(A);
    let b=makeDeepCopy(B);
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
           if(swapAndCheckSum(i,j,a,b)){
               return [A[i],B[j]];
           }
        }
    }
    return null;
}
function makeDeepCopy(inputArray){
    return newArray=inputArray.map((e)=>e);
}
function swapAndCheckSum(i,j,A,B){
    let temp=A[i];
    A[i]=B[j];
    B[j]=temp;
    return arrSum(A)===arrSum(B);

}
arrSum = function(arr){
    return arr.reduce(function(a,b){
        return a + b
    }, 0);
}
console.log(candySwap([1,1],[2,2]));
console.log(candySwap([1,2],[2,3]));
console.log(candySwap([1,2,5],[2,4]));

// Candy Swap
// Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.
//
//     Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy. (The total amount of candy a person has is the sum of the sizes of candy bars they have.)
//
// Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.
//
//     If there are multiple answers, you may return any one of them. It is guaranteed an answer exists
//
// Examples
// Input: A = [1,1], B = [2,2]
// Output: [1,2]
//
// Input: A = [1,2], B = [2,3]
// Output: [1,2]
//
// Input: A = [1,2,5], B = [2,4]
// Output: [5,4]