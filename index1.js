
// 2. Array reduce vasitesile asagidaki arrayin qiymetleri cemini qaytarin:
let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function myfunc(sum, item) {
    return sum + item.price
}
let reduce=wishlist.reduce(myfunc,0)
console.log(`Qiymətləri cəmi: ${reduce}`);