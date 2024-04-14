
// 1. Array reduce vasitesi ile asagidaki arrayde nece neferin "Vote" etdiyini qaytarin. Meselen 4 neferde "
// voted:true " dursa return elesin 4.
// let voters = [
//     { name: 'Bob', age: 30, voted: true },
//     { name: 'Jake', age: 32, voted: true },
//     { name: 'Kate', age: 25, voted: false },
//     { name: 'Sam', age: 20, voted: false },
//     { name: 'Phil', age: 21, voted: true },
//     { name: 'Ed', age: 55, voted: true },
//     { name: 'Tami', age: 54, voted: true },
//     { name: 'Mary', age: 31, voted: false },
//     { name: 'Becky', age: 43, voted: false },
//     { name: 'Joey', age: 41, voted: true },
//     { name: 'Jeff', age: 30, voted: true },
//     { name: 'Zack', age: 19, voted: false }
// ];
// let voteCounts = voters.reduce((acc, curr) => {
//     if (curr.voted) {
//         acc.trueVoted++
//     }
//     else {
//         acc.falseVoted++
//     }
//     return acc
// },{trueVoted:0,falseVoted:0})


//   console.log("Voted true: ", voteCounts.trueVoted);
//   console.log("Voted false: ", voteCounts.falseVoted);



// 2. Array reduce vasitesile asagidaki arrayin qiymetleri cemini qaytarin:
// let wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// function myfunc(sum, item) {
//     return sum + item.price
// }
// let reduce=wishlist.reduce(myfunc,0)
// console.log(`Qiymətləri cəmi: ${reduce}`);


// 3. Daxil olunmuş stringdə ən uzun sözü tapan function yazin.
// string : 'Web Development Tutorial';
// Output : 'Development'
// function findLongestWord(str) {
//     let words = str.split(' ');
//     let longestWord = '';    
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
    
//     return longestWord;
//   }
//   let String = 'Web Development Tutorial';
//   console.log(findLongestWord(String)); 
  
// 4.Sətirdə hər sözün ilk hərfini böyük hərflə yazmaq üçün JavaScript funksiyasını yazın.
// console.log(capitalize_Words('js string exercises'));
// Output:"Js String Exercises"
// function capitalize_Words(str) {
//     let words = str.split(' ');    
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     }
//     return words.join(' ');
//   }
//   console.log(capitalize_Words('js string exercises')); 

// 5.Verilmish stringdən müəyyən sayda sözə kəsmək üçün JavaScript funksiyasını yazın.
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :"The quick brown fox"
// function truncate(str, numWords) {
//     let words = str.split(' ');
//     let truncatedString = words.slice(0, numWords).join(' ');
//     return truncatedString;
//   }
//   console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
  
  