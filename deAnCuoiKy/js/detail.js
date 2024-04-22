var detail = $('.content__detail');
var curProduct = JSON.parse(localStorage.getItem('curProduct'));

function setCurProduct(id) {
    for (type in productList) {
        for (brand in productList[type]) {
            for (product in productList[type][brand]) {
                if (productList[type][brand][product].id == id) {
                    var curProduct = productList[type][brand][product];
                    localStorage.setItem('curProduct', JSON.stringify(curProduct));
                }
            }
        }
    }
}

function add1() {
    $('.quantity').val(parseInt($('.quantity').val()) + 1);
}

function minus1() {
    if ($('.quantity').val() > 1) {
        $('.quantity').val(parseInt($('.quantity').val()) - 1);
    }
}

function addProductToCart() {
    var isProductInCart = false;

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    for (var i = 0; i < curUser.cart.length; i++) {
        if (curUser.cart[i].id == curProduct.id) {
            // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
            curUser.cart[i].quantity += parseInt($('.quantity').val());
            isProductInCart = true;
            break;
        }
    }

    // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào
    if (!isProductInCart) {
        curUser.cart.push({
            id: curProduct.id,
            quantity: parseInt($('.quantity').val())
        });
    }
    // thông báo thêm vào giỏ hàng thành công
    totalCartNoti = getTotalCartNoti();
    console.log(totalCartNoti)
    $('.cart__noti').text(totalCartNoti);
    alert('Thêm vào giỏ hàng thành công!');

    // Lưu lại thông tin giỏ hàng vào local storage
    localStorage.setItem('curUser', JSON.stringify(curUser));
}

function buyNow() {
    if (confirm('xác nhận mua hàng?')) {
        var isProductInCart = false;
        removeProduct(curProduct.id);
        // thông báo mua hàng thành công
        alert('Mua hàng thành công!');

        // Lưu lại thông tin giỏ hàng vào local storage
        localStorage.setItem('curUser', JSON.stringify(curUser));

    }
}


detail.html(
    `<div class="row">
        <div class="col-sm-4 border">
            <img src="${curProduct.link}" width="100%">
        </div>
        <div class="col-sm-6 info ps-5">
            <div>
                <h3 class="detail__name">${curProduct.type} ${curProduct.name}</h3>
                <span class="detail__brand d-block mt-3 mb-3">Thương Hiệu: ${curProduct.brand}<br></span>
                <span class="detail__price"><s>${curProduct.hightPrice}đ</s></span> <br>
                <span class="text-danger"><b>${curProduct.price}₫</b><span class="badge text-danger">-${curProduct.salePercent}%</span></span>
            </div>

            <div class="mt-5 mb-5">
                <a href="#">
                    <i class="fa-solid fa-minus" onclick="minus1()"></i>
                </a>
                <input type="number" value="1" style="width: 4.4rem"; class="quantity">
                <a href="#">
                    <i class="fa-solid fa-plus" onclick="add1()"></i>
                </a>
            </div>

            <div>
                <button class="btn btn-warning" onclick="buyNow()">Mua ngay</button>
                <button class="btn btn-dark" onclick="addProductToCart()">Thêm vào giỏ hàng</button>
            </div>
        </div>
    </div>`
)

if (curProduct.type == 'laptop') {
    detail.append(
        `<div class="col-sm-5 p-0 mt-5">
            <caption>Thông số kĩ thuật</caption>
            <table class="table table-striped border">
                <tr>
                    <td>CPU</td>
                    <td>${curProduct.cpu}</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>${curProduct.ram}</td>
                </tr>
                <tr>
                    <td>Ổ cứng</td>
                    <td>${curProduct.rom}</td>
                </tr>
                <tr>
                    <td>Màn hình</td>
                    <td>${curProduct.screen}</td>
                </tr>
                <tr>
                    <td>Card đồ họa</td>
                    <td>${curProduct.gpu}</td>
                </tr>
                <tr>
                    <td>Pin</td>
                    <td>${curProduct.battery}</td>
                </tr>
                <tr>
                    <td>Trọng lượng</td>
                    <td>${curProduct.weight}</td>
                </tr>
                <tr>
                    <td>OS</td>
                    <td>${curProduct.os}</td>
                </tr>

            </table>
        </div>`
    )
}
else if (curProduct.type == 'pc') {
    detail.append(
        `<div class="col-sm-5 p-0 mt-5">
            <caption>Thông số kĩ thuật</caption>
            <table class="table table-striped border">
                <tr>
                    <td>CPU</td>
                    <td>${curProduct.cpu}</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>${curProduct.ram}</td>
                </tr>
                <tr>
                    <td>Ổ cứng</td>
                    <td>${curProduct.rom}</td>
                </tr>
                <tr>
                    <td>Card đồ họa</td>
                    <td>${curProduct.gpu}</td>
                </tr>
                <tr>
                    <td>PSU</td>
                    <td>${curProduct.psu}</td>
                </tr>
                <tr>
                    <td>OS</td>
                    <td>${curProduct.os}</td>
                </tr>
            </table>
        </div>`
    )
}
else if (curProduct.type == 'headphone') {
    detail.append(
        `<div class="col-sm-5 p-0 mt-5">
            <caption>Thông số kĩ thuật</caption>
            <table class="table table-striped border">
                <tr>
                    <td>Micro</td>
                    <td>${curProduct.mic}</td>
                </tr>
                <tr>
                    <td>Kết nối</td>
                    <td>${curProduct.connection}</td>
                </tr>
            </table>
        </div>`
    )
}
else if (curProduct.type == 'keyboard') {
    detail.append(
        `<div class="col-sm-5 p-0 mt-5">
            <caption>Thông số kĩ thuật</caption>
            <table class="table table-striped border">
                <tr>
                    <td>Switch</td>
                    <td>${curProduct.switch}</td>
                </tr>
                <tr>
                    <td>Kết nối</td>
                    <td>${curProduct.connection}</td>
                </tr>
            </table>
        </div>`
    )

}
else if (curProduct.type == 'mouse') {
    detail.append(
        `<div class="col-sm-5 p-0 mt-5">
            <caption>Thông số kĩ thuật</caption>
            <table class="table table-striped border">
                <tr>
                    <td>DPI</td>
                    <td>${curProduct.dpi}</td>
                </tr>
                <tr>
                    <td>Kết nối</td>
                    <td>${curProduct.connection}</td>
                </tr>
            </table>
        </div>`
    )
}
else if (curProduct.type == 'screen') {
    detail.append(
        `<div class="col-sm-5 p-0 mt-5">
            <caption>Thông số kĩ thuật</caption>
            <table class="table table-striped border">
                <tr>
                    <td>Kích thước</td>
                    <td>${curProduct.size}</td>
                </tr>
                <tr>
                    <td>Độ phân giải</td>
                    <td>${curProduct.resolution}</td>
                </tr>
                <tr>
                    <td>Tần số làm mới</td>
                    <td>${curProduct.refreshRate}</td>
                </tr>
            </table>
        </div>`
    )
}