// how does the post increment works x++

// algo of pre increment x++

function plusPlus(orig_x){
    var orig_x_coerced = Number(orig_x);
    x = orig_x_coerced + 1;
    return orig_x_coerced;
}


var x = "5";
plusPlus(x);
console.log(x); // 6