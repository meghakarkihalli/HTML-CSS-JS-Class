function checkArrays(arrA, arrB){
    if(arrA.length !== arrB.length)
    return "they are not similar"

    for(var i=0; i<arrA.length; i++){
        if(arrA[i]!==arrB[i])
        return "they are not similar"
    }
    return "they are similar"
}
var arrA = [1,2,3,3,1,2];
var arrB = [1,1,2,3];

console.log(checkArrays(arrA,arrB));//they are not similar//
