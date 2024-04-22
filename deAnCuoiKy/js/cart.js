const out = $('.cart__content');
var totalMoney = 0;
var cart = curUser.cart;
var totalMoneyOut = $('.total');
var cartNoti = $('.cart__noti');

totalMoneyOut.html(formatPrice(totalMoney) + 'đ');
addAllFromCartToPageCart();
function addAllFromCartToPageCart() {
    out.html('');
    for (product in cart) {
        addProductFromCartToPageCart(out, productList, cart[product].id, cart[product].quantity);
    }
}

function parsePrice(priceString) {
    var cleanPriceString = priceString.replace(/\./g, '');
    var priceNumber = parseInt(cleanPriceString);
    return priceNumber;
}

function minus1Quantity(id, price) {
    for (product in cart) {
        if (cart[product].id == id) {
            if (cart[product].quantity > 1) {
                cart[product].quantity--;
            }
            $(`.${id}__quantity`).val(cart[product].quantity);
            $(`.${id}__money`).text(formatPrice(cart[product].quantity * parsePrice(price)) + 'đ');

            totalCartNoti = getTotalCartNoti();
            cartNoti.text(totalCartNoti);
            updateTotalMoney()
            localStorage.setItem('curUser', JSON.stringify(curUser));
        }
    }
}

function add1Quantity(id, price) {
    for (product in cart) {
        if (cart[product].id == id) {
            cart[product].quantity++;
            $(`.${id}__quantity`).val(cart[product].quantity);
            $(`.${id}__money`).text(formatPrice(cart[product].quantity * parsePrice(price)) + 'đ');

            totalCartNoti = getTotalCartNoti();
            cartNoti.text(totalCartNoti);
            updateTotalMoney()
            localStorage.setItem('curUser', JSON.stringify(curUser));
        }
    }
}

function addProductFromCartToPageCart(out, list, id, quantity) {
    for (type in productList) {
        for (brand in productList[type]) {
            for (product in productList[type][brand]) {
                var product = productList[type][brand][product];
                if (product.id == id) {

                    out.append(`<div class="border ${product.id} row d-flex align-items-center">
                        <div class="img col-sm-2">
                            <input type="checkbox" name="check" id="${product.id}" class="check" onchange="updateTotalMoney()">
                            <img src="${product.link}" alt="" width="85%"></div>
                         <h2 class="col-sm-3">${product.name}</h2>
                        <div class="col-sm-2">
                            <span>đơn giá:</span> <br>
                            <span class="${product.id}__price">${product.price}đ</span>
                        </div>
                        <div class="col-sm-2">
                            <div class="quantity__control">
                                <span class="d-inline-block ms-4"> số lượng:</span> <br>
                                <button class="btn text-dark" onclick="minus1Quantity('${product.id}', '${product.price}')">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <input type="number" value="${quantity}" style="width: 4.4rem;" class="${product.id}__quantity" onchange="update('${product.id}', '${product.price}')">
                                <button class="text-dark btn" onclick="add1Quantity('${product.id}', '${product.price}')">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            số tiền: <br>
                            <span class="${id}__money">${formatPrice(quantity * parsePrice(product.price))}đ</span >
                        </div >
                    <div class="col-sm-1">
                        <button class="btn btn-danger" onclick=removeProduct('${id}')>Xóa</button>
                    </div>
                    </div > `);
                }
            }
        }
    }
}

function update(id, price) {
    var quantity = $(`.${id}__quantity`).val();
    $(`.${id}__money`).text(formatPrice(quantity * parsePrice(price)) + 'đ');
    for (product in cart) {
        if (cart[product].id == id) {
            cart[product].quantity = quantity;
        }
    }
    totalCartNoti = getTotalCartNoti();
    cartNoti.text(totalCartNoti);
    localStorage.setItem('curUser', JSON.stringify(curUser));
}

function updateTotalMoney() {
    var checkedProducts = $('.check:checked');
    totalMoney = 0;
    checkedProducts.each(function (index, element) {
        var id = $(element).attr('id');
        totalMoney += parsePrice($(`.${id}__money`).text());
    });
    totalMoneyOut.html(formatPrice(totalMoney) + 'đ');
}

function getTotalPrice(id, price) {
    var quantity = $(`.${id}__quantity`).val();
    totalMoney += quantity * parsePrice(price);
    totalMoneyOut.html(formatPrice(totalMoney) + 'đ');
}

function removeProduct(id) {
    for (i in curUser.cart) {
        if (curUser.cart[i].id == id) {
            curUser.cart.splice(i, 1);
            break;
        }
    }

    totalCartNoti = getTotalCartNoti();
    console.log(totalCartNoti);
    if (totalCartNoti == 0) {
        cartNoti.html('');
    } else {
        cartNoti.text(totalCartNoti);
    }
    addAllFromCartToPageCart();
    localStorage.setItem('curUser', JSON.stringify(curUser));
}

function buyAll() {
    if (curUser.cart.length == 0) {
        alert('Giỏ hàng rỗng!');
        return;
    }
    var checkedProducts = $('.check:checked');
    if (checkedProducts.length == 0) {
        alert('Bạn chưa chọn bất kì sản phẩm nào để mua!');
        return;
    }
    if (confirm('Xác nhận mua hàng?')) {
        checkedProducts.each(function (index, element) {
            var id = $(element).attr('id');
            removeProduct(id);
        })
        updateTotalMoney();
        alert('Mua hàng thành công!');
    }
}