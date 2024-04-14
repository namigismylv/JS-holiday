
// 1. Array reduce vasitesi ile asagidaki arrayde nece neferin "Vote" etdiyini qaytarin. Meselen 4 neferde "
// voted:true " dursa return elesin 4.
let voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
let voteCounts = voters.reduce((acc, curr) => {
    if (curr.voted) {
        acc.trueVoted++
    }
    else {
        acc.falseVoted++
    }
    return acc
},{trueVoted:0,falseVoted:0})
  console.log("Voted true: ", voteCounts.trueVoted);
  console.log("Voted false: ", voteCounts.falseVoted);
  