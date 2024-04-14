// 3. Daxil olunmuş stringdə ən uzun sözü tapan function yazin.
// string : 'Web Development Tutorial';
// Output : 'Development'
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';    
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    
    return longestWord;
  }
  let String = 'Web Development Tutorial';
  console.log(findLongestWord(String)); 