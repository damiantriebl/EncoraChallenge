const minCost = require('./index.js')

test('Check 3 buildings with H (2,2,3) and M (4,1,5)', ()=>{
    expect(minCost(3,[2,2,3], [4,1,5])).toEqual(2)
})
test('Check 4 buildings with H (1,3,2,1000) and M (7,3,6,2)', ()=>{
    expect(minCost(4,[1,3,2,1000], [7,3,6,2])).toEqual(0)
})
test('Check 3 buildings with H (2,2,2) and M (3,10,6)', ()=>{
    expect(minCost(3,[2,2,2], [3,10,6])).toEqual(9)
})
