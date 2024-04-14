
// 5.Verilmish stringdən müəyyən sayda sözə kəsmək üçün JavaScript funksiyasını yazın.
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :"The quick brown fox"
function truncate(str, numWords) {
    let words = str.split(' ');
    let truncatedString = words.slice(0, numWords).join(' ');
    return truncatedString;
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));