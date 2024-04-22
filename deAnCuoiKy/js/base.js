// product
var productJson = localStorage.getItem('productList');
var productList = JSON.parse(productJson);

// account
var jsonAccountList = localStorage.getItem('accountList');
var accountList = JSON.parse(jsonAccountList);

// isLogin
var isLogin = localStorage.getItem('isLogin');
var curUser = JSON.parse(localStorage.getItem('curUser'));

var totalCartNoti;

$(document).ready(() => {
    var cartNoti = $('.cart__noti');
    var notificationNoti = $('.notification__noti');
    var cartList = $('.cart__list');
    var numProductInCart = 0;



    for (let i in curUser.cart) {
        numProductInCart += curUser.cart[i].quantity;
    }

    if (isLogin == 'true') {
        $('.index-user').show();
        $('.index-user-name').html(`${curUser.name}`);
        totalCartNoti = getTotalCartNoti();
        if (totalCartNoti == 0) {
            cartNoti.html('');
        } else {
            cartNoti.text(totalCartNoti);
        }
    } else {
        $('.authentication__btn').show()
    }

    for (type in productList) {
        for (brand in productList[type]) {
            for (item in productList[type][brand]) {
                var cur = productList[type][brand][item];
                for (let i in curUser.cart) {
                    if (cur.id == curUser.cart[i].id) {
                        cartList.append(`
                        <li class=" list-group-item">
                            <a href="../html/cart.html" class="text-dark row d-flex align-items-center">
                                <div class="col-sm-3">
                                    <img src="${cur.link}" width="100%">
                                </div>
                                <div class="col-sm-9">${cur.name}</div>
                            </a>
                        </li>`)
                    }
                }
            }
        }
    }
})

function getTotalCartNoti() {
    var total = 0;
    for (let i in curUser.cart) {
        total += parseInt(curUser.cart[i].quantity);
    }
    return total;
}

function signOut() {
    localStorage.setItem('isLogin', false);
    $('.cart__noti').text('');
    window.location.href = '../html/index.html';
}


function lenProductList(products) {
    let count = 0;
    for (let type in products) {
        for (let brand in products[type]) {
            for (let item in products[type][brand]) {
                count++;
            }
        }
    }
    return count;
}

function lenAccountList(accounts) {
    let count = 0;
    for (let account in accounts) {
        count++;
    }
    return count;
}

function checkRong(outMess, e) {
    if (e.val() == null || e.val() == '') {
        outMess.html(`<sup class="text-danger">${e.attr('name')} không thể để trống!</sup>`);
        return false;
    }
    outMess.html('');
    return true;
}


function setFilter(type, value) {
    var filtered = {
        type: type,
        value: value
    };
    localStorage.setItem('filtered', JSON.stringify(filtered));
}