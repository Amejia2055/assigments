

function Area(s1, s2, s3){ 
    var s = (s1 + s2 + s3)/2;
    var area =  Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)));
    return area;
}

let s1 = 5
let s2 = 6
let s3 = 7

document.write(Area(s1,s2,s3).toFixed(3));