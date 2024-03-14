var negativeZero = -0;

negativeZero === -0; // true

negativeZero.toString() // "0";
negativeZero === 0 // true
negativeZero > 0 // false
negativeZero < 0 // false

// The only way of checking the negative value

Object.is(negativeZero, -0) // true 
Object.is(negativeZero, 0) // false


// use case

function formatTrend(trendRate){
    var direction = (trendRate < 0 || Object.is(trendRate, -0) ? "down" : "up");
    return `${direction} ${Math.abs(trendRate)}`;
}

console.log(formatTrend(-4)) // down 4
console.log(formatTrend(4)) // up 4
console.log(formatTrend(-0)) // down 0
console.log(formatTrend(0)) // up 0



