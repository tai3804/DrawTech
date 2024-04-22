function addSaleProduct(out, id, name, link, price, hightPrice, salePercent) {
    out.append(`<div class="pane__item product col p-2 me-3 border rounded" id="${id}">`
        + `<a href="../html/detailProduct.html" class="text-dark" onclick="setCurProduct('${id}')">`
        + '<img src="' + link + '" width="100%" height="65%" class="mb-1">'
        + '<span>'
        + '<b>' + name + '</b><br>'
        + '</span>'
        + '<span><sub><s>' + hightPrice + '₫</s></sub> <br></span>'
        + '<span class="text-danger"><b>' + price + '₫</b><span class="badge text-danger">-' + salePercent + '%</span></span>'
        + '</a>'
        + '</div>');
}

function setProductData(productData) {
    const productJson = JSON.stringify(productData);
    localStorage.setItem('productList', productJson);
}

function addSaleRow(out, products) {
    var count = 0;
    for (let brand in products) {
        for (let item in products[brand]) {
            if (count++ >= 6) break;
            addSaleProduct(out, products[brand][item].id, products[brand][item].name, products[brand][item].link, products[brand][item].price, products[brand][item].hightPrice, products[brand][item].salePercent);
        }
    }
}

function addProduct(out, id, name, link, price, hightPrice, salePercent) {
    out.append('<div class="product border">'
        + `<a href="../html/detailProduct.html" class="text-dark" onclick="setCurProduct('${id}')">`
        + '<img src="' + link + '" class="mb-2">'
        + '<span>'
        + '<b>' + name + '</b><br>'
        + '</span>'
        + '<span><sub><s>' + hightPrice + '₫</s></sub> <br></span>'
        + '<span class="text-danger"><b>' + price + '₫</b><span class="badge text-danger">-' + salePercent + '%</span></span>'
        + '</a>'
        + '</div>'
    );
}


function addRow(out, products, curProduct) {
    var count = 0;
    var startAdd = false;
    for (let type in products) {
        for (let brand in products[type]) {
            for (let item in products[type][brand]) {
                if (products[type][brand][item] == curProduct) {
                    startAdd = true;
                }
                if (startAdd) {
                    if (count++ == 6) {
                        curProduct = products[type][brand][item];
                        return curProduct;
                    }
                    var product = products[type][brand][item];
                    addProduct(out, product.id, product.name, product.link, product.price, product.hightPrice, product.salePercent);
                }
            }
        }
    }
}

function addAllProduct(out, products) {
    for (let type in products) {
        for (let brand in products[type]) {
            for (let item in products[type][brand]) {
                var product = products[type][brand][item];
                addProduct(out, product.id, product.name, product.link, product.price, product.hightPrice, product.salePercent);
            }
        }
    }
}

function addAllFormListByID(out, list, idList) {
    out.html('');
    for (type in productList) {
        for (brand in productList[type]) {
            for (product in productList[type][brand]) {
                if (idList.includes(productList[type][brand][product].id)) {
                    addProduct(out, productList[type][brand][product].id, productList[type][brand][product].name, productList[type][brand][product].link, productList[type][brand][product].price, productList[type][brand][product].hightPrice, productList[type][brand][product].salePercent);
                }
            }
        }
    }
}