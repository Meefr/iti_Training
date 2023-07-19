function swap(x, y){
    document.write(`x before: ${x} <br>`);
    document.write(`y before: ${y} <br>`);
    [x, y] = [y, x];
    document.write(`<hr> x after: ${x} <br>`);
    document.write(`y after: ${y} <hr>`);
}
swap(1, 2);

function _MinMax(...arr){
    [min,max] = [Math.min(...arr), Math.max(...arr)];
    return `Elements: ${arr} <br> Min: ${min} <br> Max: ${max}`;
}

document.write(_MinMax(1,4,5,6,7,2));