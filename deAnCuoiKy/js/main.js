var saleTime = 20000;


// add sale time in index
const outSaleHour = $(".sale__hour");
const outSaleMin = $(".sale__min");
const outSaleSec = $(".sale__sec");
setInterval(() => {
    var saleHour = Math.floor(saleTime / 3600);
    var saleMin = Math.floor((saleTime % 3600) / 60);
    var saleSec = saleTime % 60;

    outSaleHour.text(saleHour);
    outSaleMin.text(saleMin);
    outSaleSec.text(saleSec);
    saleTime--;
}, 1000);

// Add sale product in index
const outLaptop = $(".laptop__row");
const outPC = $(".pc__row");
const outHeadphone = $(".headphone__row");
const outKeyboard = $(".keyboard__row");
const outMouse = $(".mouse__row");
const outScreen = $(".screen__row");

addSaleRow(outLaptop, productList.laptop);
addSaleRow(outPC, productList.pc);
addSaleRow(outHeadphone, productList.headphone);
addSaleRow(outKeyboard, productList.keyboard);
addSaleRow(outMouse, productList.mouse);
addSaleRow(outScreen, productList.screen);


// add foru product to the page
const outForu = $("#foru");
var curProductPage = productList.laptop.apple.macbookAirM1;
curProductPage = addRow(outForu, productList, curProductPage);
curProductPage = addRow(outForu, productList, curProductPage);
curProductPage = addRow(outForu, productList, curProductPage);