var out = $('.content__main');
var filtered = JSON.parse(localStorage.getItem('filtered'));
addAllProduct(out, productList);
if (filtered != null) {
    addFilteredProductsByCriteria(filtered.type, filtered.value);
}


function checkFilter() {
    var typeChecked = $('.filter__type:checked');
    var brandChecked = $('.filter__brand:checked');
    var typeLen = typeChecked.length;
    var brandLen = brandChecked.length;
    var IDList = [];

    if (typeChecked.length == 0 && brandChecked.length == 0) {
        out.empty();
        addAllProduct(out, productList);
        return;
    }

    // Lặp qua mỗi sản phẩm trong productList
    for (let i = 0; i < typeLen; i++) {
        for (type in productList) {
            for (brand in productList[type]) {
                for (product in productList[type][brand]) {
                    if (productList[type][brand][product].type == typeChecked[i].id) {
                        IDList.push(productList[type][brand][product].id);
                    }
                }
            }
        }
    }

    for (let i = 0; i < brandLen; i++) {
        for (type in productList) {
            for (brand in productList[type]) {
                for (product in productList[type][brand]) {
                    if (productList[type][brand][product].brand == brandChecked[i].id) {
                        IDList.push(productList[type][brand][product].id);
                    }
                }
            }
        }
    }
    var uniqueIDList = [...new Set(IDList)];

    addAllFormListByID(out, productList, uniqueIDList);
}

function addFilteredProductsByCriteria(category, value) {
    out.html('');
    for (type in productList) {
        for (brand in productList[type]) {
            for (product in productList[type][brand]) {
                var cur = productList[type][brand][product];
                switch (category) {
                    case 'brand': {
                        if (cur.brand == value) {
                            addProduct(out, cur.id, cur.name, cur.link, cur.price, cur.hightPrice, cur.salePercent);
                        }
                        break;
                    }
                    case 'type': {
                        if (cur.type == value) {
                            addProduct(out, cur.id, cur.name, cur.link, cur.price, cur.hightPrice, cur.salePercent);
                        }
                        break;
                    }
                }
                localStorage.removeItem('filtered');
            }
        }
    }
}