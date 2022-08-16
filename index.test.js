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
test('Check 6 buildings with H (2,2,3,5,3,4) and M (3,10,6,4,3,2)', ()=>{
    expect(minCost(6,[2,2,3,5,3,4], [3,10,6,4,3,2])).toEqual(3)
})
test('Check 5 buildings with H (2,2,3,3,3) and M (3,2,6,4,3)', ()=>{
    expect(minCost(4,[2,2,3,3,3], [3,2,6,4,3])).toEqual(7)
})
test('Check 7 buildings with H (2,2,3,3) and M (3,2,6,3)', ()=>{
    expect(minCost(7,[2,1,3,2,2,3,4], [2,3,4,2,1,2,3])).toEqual(2)
})