// 4.Sətirdə hər sözün ilk hərfini böyük hərflə yazmaq üçün JavaScript funksiyasını yazın.
// console.log(capitalize_Words('js string exercises'));
// Output:"Js String Exercises"
function capitalize_Words(str) {
    let words = str.split(' ');    
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
  }
  console.log(capitalize_Words('js string exercises')); 