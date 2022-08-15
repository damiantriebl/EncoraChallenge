function minCost(N,H,M){
    let sum = 0
    //iterate the array of height starting of the second building
    for(let i=1;i< N; i++ ){
        if(H[i] === H[i-1]){
            const prices = []
            // in this way it is checked if it collides with the adjacent ones of both
            if(H[i-2] === H[i-1] + 1){
                prices.push(M[i-1] * 2 )
            }else{
                prices.push(M[i-1] )
            }
            if(H[i]+ 1 === H[i+1] ){
                prices.push ( M[i] * 2 )
            }else{
                prices.push( M[i] )
            }
            // minimum element of this part
            const result = Math.min(...prices)
            // added the all parts.
            sum += result;
        }
   
    }
    return sum; 
}

var temp = "3 2 2 3 4 1 5".trim('\n').split(/\n|\s/);
var temp2 = "4 1 3 2 1000 7 3 6 2".trim('\n').split(/\n|\s/);
var temp3 = "3 2 2 2 3 10 6".trim('\n').split(/\n|\s/);

var N = parseInt(temp[0]);
var H = []
for(var i = 1; i < 1+N ; i++) {
    H.push(parseInt(temp[i]));
}
var M = [];
for(var i = 1+N; i < 1+N+N; i++){
    M.push(parseInt(temp[i]));
}

console.log(minCost(N,H,M));
module.exports = minCost