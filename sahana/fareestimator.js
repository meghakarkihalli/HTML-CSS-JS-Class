//ride time, ride distance, cost per minute, cost per mile are known//
//total fare for the ride has to be known//


function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    const totalFare = [];
    for (i = 0; i < cost_per_minute.length; i++) {
        totalFare.push((ride_time * cost_per_minute[i]) + (ride_distance * cost_per_mile [i]))
    }
    return totalFare
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5])); //[ 13.700000000000001, 23.1, 28.099999999999998, 38 ]//

