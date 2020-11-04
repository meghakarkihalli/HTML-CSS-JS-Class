/* Being a new Uber user, you have $20 off your first ride. You want to make the most out of it and drive in the fanciest car you can afford, without spending any out-of-pocket money. There are 5 options, from the least to the most expensive: "UberX", "UberXL", "UberPlus", "UberBlack" and "UberSUV".

You know the length l of your ride in miles and how much one mile costs for each car. Find the best car you can afford.

Example

For l = 30 and fares = [0.3, 0.5, 0.7, 1, 1.3], the output should be
fancyRide(l, fares) = "UberXL".

The cost for the ride in this car would be $15, which you can afford, but "UberPlus" would cost $21, which is too much for you.*/


function fancyRide(l, fares) {
    const carList = { 0: "UberX", 1: "UberXL", 2: "UberPlus", 3: "UberBlack", 4: "UberSUV" };
    let i;
    for (i = 0; i < fares.length; i++) {
        let totalPrice = (fares[i] * l) - 20;
        if (totalPrice > 0) {
            break;
        }
    }
    return carList[i - 1];
}
// let fares = [0.3,0.5,0.7,1,1.3]
// console.log(fancyRide(30,fares))