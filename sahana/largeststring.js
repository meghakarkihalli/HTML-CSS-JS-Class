let states = ['california', 'illinios', 'missouri', 'tennesse', 'george', 'michigan', 'colorado', 'nevadaaass'];
let wholeArr = [];

function longestStrings(arr) {
    let longest = 0;
    for(i =0; i < states.length; i++){
      if(longest < states[i].length){
        longest = states[i].length;
      }
    }
    for(j =0; j < states.length; j++){
      if(states[j].length == longest){
         wholeArr.push(states[j]);
      }
    }
   if(wholeArr.length == 1){
     return wholeArr[0]
   }else{
      return wholeArr
  }
}


console.log(longestStrings(states)); //['california', 'nevadaaass']//
