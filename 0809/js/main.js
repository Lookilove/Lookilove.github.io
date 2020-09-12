const shop = [
    {
        name: "milk",
        box: 3,
        pack: 20,
        maxTemp: 4,
        exploitationDays: 5,
    },
    {
        name: "butter",
        box: 4,
        pack: 30,
        maxTemp: -3,
        exploitationDays: 10,
    },
    {
        name: "kefir",
        box: 7,
        pack: 6,
        maxTemp: 2,
        exploitationDays: 14,
    },
    {
        name: "ice-cream",
        box: 2,
        pack: 12,
        maxTemp: -20,
        exploitationDays: 30,
    }
]

let suitableGoodsCount = 0;
let unsuitableGoodsCount = 0;

window.onload = function goodsCalculation(){
    shop.forEach((el) => {
        if (el.maxTemp > -5 && el.exploitationDays > 5) {
            suitableGoodsCount += el.box * el.pack;            
        } else {
            unsuitableGoodsCount += el.box * el.pack;
        };    
    });

    document.querySelector(".coming").innerHTML = "Coming goods: " + suitableGoodsCount;
    document.querySelector(".back").innerHTML = "Back goods: " + unsuitableGoodsCount;
}
console.log(shop);