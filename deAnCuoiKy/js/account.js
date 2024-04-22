var accountData = {
    "account1": {
        username: "admin1",
        password: "admin",
        role: "admin",
        name: 'Trần Thành Tài',
        phone: '0899655446',
        address: 'Tp HCM',
        cart: [
            {
                id: 'lap_lenovo_ideapad5',
                quantity: 1
            },
            {
                id: 'keyboard_rapboo_nk8000',
                quantity: 2
            }
        ]
    }
}

var accountLen = lenAccountList(accountData);

if (localStorage.getItem('isLogin') === null) {
    localStorage.setItem('isLogin', false);
}
if (localStorage.getItem('accountList') === null) {
    localStorage.setItem('accountList', JSON.stringify(accountData));
}