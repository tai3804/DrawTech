var productData = {
    laptop: {
        lenovo: {
            ideapad5: {
                id: 'lap_lenovo_ideapad5',
                name: "lenovo Ideapad 5",
                link: "\\img\\product\\laptop\\laptop_lenovo_ideapad5.webp",
                price: 13690000,
                hightPrice: 19490000,
                salePercent: 29.76,
                type: 'laptop',
                brand: "lenovo",
                screen: '15.6" FHD (1920x1080) IPS 300nits',
                cpu: 'i5_1235U',
                gpu: 'Intel Iris Xe Graphics',
                ram: '8GB Onboard DDR4 3200MHz',
                rom: '512GB SSD M.2 PCIe NVMe',
                os: 'Windows 11 Home',
                weight: '1.66kg',
                battery: '56.5Whr'
            }
        },

        hp: {
            pavilion: {
                id: 'lap_hp_pavilion',
                name: "HP Pavilion",
                link: "\\img\\product\\laptop\\laptop_hp_pavilion.webp",
                price: 15490000,
                hightPrice: 19690000,
                salePercent: 21.33,
                type: 'laptop',
                brand: "hp",
                screen: '15.6" FHD (1920x1080) IPS 250nits',
                cpu: 'i5_1135G7',
                gpu: 'Intel Iris Xe Graphics',
                ram: '8GB DDR4 3200MHz',
                rom: '512GB SSD M.2 PCIe NVMe',
                os: 'Windows 11 Home',
                weight: '1.75kg',
                battery: '41Whr'
            }
        },

        asus: {
            vivobook: {
                id: 'lap_asus_vivobook',
                name: "asus Vivobook",
                link: "\\img\\product\\laptop\\laptop_asus_vivobook.webp",
                price: 17490000,
                hightPrice: 20990000,
                salePercent: 16.67,
                type: 'laptop',
                brand: "asus",
                screen: '15.6" FHD (1920x1080) IPS 250nits',
                cpu: 'i5_1135G7',
                gpu: 'Intel Iris Xe Graphics',
                ram: '8GB DDR4 3200MHz',
                rom: '512GB SSD M.2 PCIe NVMe',
                os: 'Windows 11 Home',
                weight: '1.8kg',
                battery: '42Whr'
            }
        },

        acer: {
            aspire: {
                id: 'lap_acer_aspire',
                name: "acer Aspire",
                link: "\\img\\product\\laptop\\laptop_gaming_acer_aspire.webp",
                price: 15990000,
                hightPrice: 19990000,
                salePercent: 20,
                type: 'laptop',
                brand: "acer",
                screen: '15.6" FHD (1920x1080) IPS 250nits',
                cpu: 'i5_1135G7',
                gpu: 'Intel Iris Xe Graphics',
                ram: '8GB DDR4 3200MHz',
                rom: '512GB SSD M.2 PCIe NVMe',
                os: 'Windows 11 Home',
                weight: '1.7kg',
                battery: '48Whr'
            },
            nitro5Tiger: {
                id: 'lap_acer_nitro5_tiger',
                name: "acer Nitro 5 Tiger",
                link: "\\img\\product\\laptop\\lap_nitro5_tiger.webp",
                price: 26490000,
                hightPrice: 25490000,
                salePercent: 4,
                type: 'laptop',
                brand: "acer",
                screen: '15.6" FHD (1920x1080) IPS 144Hz',
                cpu: 'Ryzen 5 5600H',
                gpu: 'GTX 1650',
                ram: '8GB DDR4 3200MHz',
                rom: '512GB SSD M.2 PCIe NVMe',
                os: 'Windows 11 Home',
                weight: '2.4kg',
                battery: '57.5Whr'
            }
        },

        dell: {
            inspiron: {
                id: 'lap_dell_inspiron',
                name: "dell Inspiron",
                link: "\\img\\product\\laptop\\dell_inspiron.png",
                price: 15490000,
                hightPrice: 16990000,
                salePercent: 6,
                type: 'laptop',
                brand: "dell",
                screen: '15.6" FHD (1920x1080) IPS 250nits',
                cpu: 'i5_1135G7',
                gpu: 'Intel Iris Xe Graphics',
                ram: '8GB DDR4 3200MHz',
                rom: '512GB SSD M.2 PCIe NVMe',
                os: 'Windows 11 Home',
                weight: '1.7kg',
                battery: '41Whr'
            }
        },

        msi: {
            cyborg: {
                id: 'lap_msi_cyborg',
                name: "msi Cyborg",
                link: "\\img\\product\\laptop\\msi_Cyborg.webp",
                price: 22490000,
                hightPrice: 24990000,
                salePercent: 10,
                type: 'laptop',
                brand: "msi",
                screen: '15.6" FHD (1920x1080) IPS 144Hz',
                cpu: 'Ryzen 5 5600H',
                gpu: 'GTX 1650',
                ram: '8GB DDR4 3200MHz',
                rom: '512GB SSD M.2 PCIe NVMe',
                os: 'Windows 11 Home',
                weight: '2.3kg',
                battery: '53.5Whr'
            }
        },

        apple: {
            macbookAirM1: {
                id: 'lap_macbook_air_m1',
                name: "Macbook Air M1",
                link: "\\img\\product\\laptop\\mac_air_m1.png",
                price: 24990000,
                hightPrice: 29990000,
                salePercent: 16.67,
                type: 'laptop',
                brand: "apple",
                screen: '13.3" Retina (2560x1600) IPS 400nits',
                cpu: 'M1',
                gpu: 'apple GPU',
                ram: '8GB LPDDR4X 4266MHz',
                rom: '256GB SSD M.2 PCIe NVMe',
                os: 'macOS',
                weight: '1.29kg',
                battery: '49.9Whr'
            },
            macbookAirM2: {
                id: 'lap_macbook_air_m2',
                name: "Macbook Air M2",
                link: "\\img\\product\\laptop\\macbook_air_m2.png",
                price: 30990000,
                hightPrice: 39990000,
                salePercent: 22.53,
                type: 'laptop',
                brand: "apple",
                screen: '13.3" Retina (2560x1600) IPS 400nits',
                cpu: 'M2',
                gpu: 'apple GPU',
                ram: '8GB LPDDR4X 4266MHz',
                rom: '256GB SSD M.2 PCIe NVMe',
                os: 'macOS',
                weight: '1.29kg',
                battery: '49.9Whr'
            },
            macbookProM1: {
                id: 'lap_macbook_pro_m1',
                name: "Macbook Pro M1",
                link: "\\img\\product\\laptop\\macbook_pro_m1.png",
                price: 34990000,
                hightPrice: 39990000,
                salePercent: 12.51,
                type: 'laptop',
                brand: "apple",
                screen: '13.3" Retina (2560x1600) IPS 500nits',
                cpu: 'M1',
                gpu: 'apple GPU',
                ram: '8GB LPDDR4X 4266MHz',
                rom: '256GB SSD M.2 PCIe NVMe',
                os: 'macOS',
                weight: '1.4kg',
                battery: '58.2Whr'
            },
            macbookProM2: {
                id: 'lap_macbook_pro_m2',
                name: "Macbook Pro M2",
                link: "\\img\\product\\laptop\\macbook_pro_m2.png",
                price: 42990000,
                hightPrice: 49990000,
                salePercent: 14,
                type: 'laptop',
                brand: "apple",
                screen: '13.3" Retina (2560x1600) IPS 500nits',
                cpu: 'M2',
                gpu: 'apple GPU',
                ram: '8GB LPDDR4X 4266MHz',
                rom: '256GB SSD M.2 PCIe NVMe',
                os: 'macOS',
                weight: '1.4kg',
                battery: '58.2Whr'
            }
        }
    },
    pc: {
        acer: {
            acerAspire: {
                id: 'pc_acer_aspire',
                name: "acer Aspire",
                link: "\\img\\product\\pc\\acer_aspire.png",
                price: 15990000,
                hightPrice: 19990000,
                salePercent: 20,
                type: 'pc',
                brand: "acer",
                cpu: 'i5_1135G7',
                gpu: 'Intel Iris Xe Graphics',
                ram: '8GB DDR4 3200MHz',
                rom: '512GB SSD M.2 PCIe NVMe',
                psu: '180W',
                os: 'Windows 11 Home'
            }
        },
        lenovo: {
            pc1: {
                id: 'pc_lenovo_pc1',
                name: "lenovo V50",
                link: "\\img\\product\\pc\\lenovo_pc1.png",
                price: 13690000,
                hightPrice: 19490000,
                salePercent: 29.76,
                type: 'pc',
                brand: "lenovo",
                cpu: 'i5_1235U',
                gpu: 'Intel Iris Xe Graphics',
                ram: '8GB Onboard DDR4 3200MHz',
                rom: '512GB SSD M.2 PCIe NVMe',
                psu: '180W',
                os: 'Windows 11 Home'
            }
        },
        asus: {
            pc1: {
                id: 'pc_asus_pc1',
                name: "asus S501",
                link: "\\img\\product\\pc\\asus_pc1.png",
                price: 17490000,
                hightPrice: 20990000,
                salePercent: 16.67,
                type: 'pc',
                brand: "asus",
                cpu: 'i5_1135G7',
                gpu: 'Intel Iris Xe Graphics',
                ram: '8GB DDR4 3200MHz',
                rom: '512GB SSD M.2 PCIe NVMe',
                psu: '180W',
                os: 'Windows 11 Home'
            }
        },
        apple: {
            imacM1: {
                id: 'pc_imac_m1',
                name: "iMac M1",
                link: "\\img\\product\\pc\\imac_m1.png",
                price: 24990000,
                hightPrice: 29990000,
                salePercent: 16.67,
                type: 'pc',
                brand: "apple",
                cpu: 'M1',
                gpu: 'apple GPU',
                ram: '8GB LPDDR4X 4266MHz',
                rom: '256GB SSD M.2 PCIe NVMe',
                psu: '180W',
                os: 'macOS'
            },
            imacM2: {
                id: 'pc_imac_m2',
                name: "iMac M2",
                link: "\\img\\product\\pc\\imac_m1.png",
                price: 30990000,
                hightPrice: 39990000,
                salePercent: 22.53,
                type: 'pc',
                brand: "apple",
                cpu: 'M2',
                gpu: 'apple GPU',
                ram: '8GB LPDDR4X 4266MHz',
                rom: '256GB SSD M.2 PCIe NVMe',
                psu: '180W',
                os: 'macOS'
            }
        }
    },
    headphone: {
        logitech: {
            logitechH150: {
                id: 'headphone_logitech_h150',
                name: "logitech H150",
                link: "\\img\\product\\headphone\\logitech_h150.png",
                price: 490000,
                hightPrice: 590000,
                salePercent: 17,
                type: 'headphone',
                brand: "logitech",
                mic: 'Yes',
                connection: '3.5mm'
            }
        },
        rapboo: {
            rapbooVH160: {
                id: 'headphone_rapboo_vh160',
                name: "rapboo VH160",
                link: "\\img\\product\\headphone\\rapboo_vh160.png",
                price: 390000,
                hightPrice: 490000,
                salePercent: 20.41,
                type: 'headphone',
                brand: "rapboo",
                mic: 'Yes',
                connection: '3.5mm'
            }
        },
        razer: {
            razerKrakenV3: {
                id: 'headphone_razer_kraken_v3',
                name: "razer Kraken V3",
                link: "\\img\\product\\headphone\\razer_kraken_v3.png",
                price: 1290000,
                hightPrice: 1490000,
                salePercent: 13.42,
                type: 'headphone',
                brand: "razer",
                type: 'Over-ear',
                mic: 'Yes',
                connection: 'USB'
            }
        },
        xiaomi: {
            xiaomiBasic: {
                id: 'headphone_xiaomi_basic',
                name: "xiaomi Basic",
                link: "\\img\\product\\headphone\\xiaomi_basic.png",
                price: 190000,
                hightPrice: 290000,
                salePercent: 34.48,
                type: 'headphone',
                brand: "xiaomi",
                type: 'headphone',
                mic: 'No',
                connection: '3.5mm'
            }
        },
        soundMax: {
            soundMaxAH315: {
                id: 'headphone_soundmax_ah315',
                name: "soundMax AH315",
                link: "\\img\\product\\headphone\\soundmax_ah315.png",
                price: 290000,
                hightPrice: 390000,
                salePercent: 25.64,
                type: 'headphone',
                brand: "soundMax",
                mic: 'Yes',
                connection: '3.5mm'
            }
        },
        sony: {
            sonyMDR: {
                id: 'headphone_sony_mdr',
                name: "sony MDR",
                link: "\\img\\product\\headphone\\sony_mdr.png",
                price: 990000,
                hightPrice: 1190000,
                salePercent: 17,
                type: 'headphone',
                brand: "sony",
                type: 'Over-ear',
                mic: 'Yes',
                connection: '3.5mm'
            }
        },
        hyperx: {
            hyperxCloudStinger: {
                id: 'headphone_hyperx_cloud_stinger',
                name: "hyperX Cloud Stinger",
                link: "\\img\\product\\headphone\\hyperx_cloud_stinger.png",
                price: 790000,
                hightPrice: 990000,
                salePercent: 20.20,
                type: 'headphone',
                brand: "hyperX",
                type: 'Over-ear',
                mic: 'Yes',
                connection: '3.5mm'
            }
        }
    },
    keyboard: {
        rapboo: {
            rapbooNK8000: {
                id: 'keyboard_rapboo_nk8000',
                name: "rapboo NK8000",
                link: "\\img\\product\\keyboard\\rapboo_nk8000.png",
                price: 290000,
                hightPrice: 390000,
                salePercent: 25.64,
                type: 'keyboard',
                brand: "rapboo",
                switch: 'Membrane',
                connection: 'USB'
            }
        },
        phimco: {
            newmenGM328: {
                id: 'keyboard_newmen_gm328',
                name: "newmen GM328",
                link: "\\img\\product\\keyboard\\phimco_newmen_gm328.png",
                price: 390000,
                hightPrice: 490000,
                salePercent: 20.41,
                type: 'keyboard',
                brand: "newmen",
                switch: 'Membrane',
                connection: 'USB'
            },
            akko3084: {
                id: 'keyboard_akko_3084',
                name: "akko 3084",
                link: "\\img\\product\\keyboard\\phimco_akko_3084.png",
                price: 1290000,
                hightPrice: 1490000,
                salePercent: 13.42,
                type: 'keyboard',
                brand: "akko",
                switch: 'Mechanical',
                connection: 'USB'

            },
            ek75: {
                id: 'keyboard_ek75',
                name: "ek75",
                link: "\\img\\product\\keyboard\\phimco_ek75.png",
                price: 1290000,
                hightPrice: 1490000,
                salePercent: 13.42,
                type: 'keyboard',
                brand: "ek",
                switch: 'Mechanical',
                connection: 'USB'
            }
        },
        logitech: {
            logitechMX: {
                id: 'keyboard_logitech_mx',
                name: "logitech MX",
                link: "\\img\\product\\keyboard\\logitech_mx.png",
                price: 1290000,
                hightPrice: 1490000,
                salePercent: 13.42,
                type: 'keyboard',
                brand: "logitech",
                switch: 'Mechanical',
                connection: 'USB'
            }
        },
        razer: {
            blackwindowV3: {
                id: 'keyboard_blackwindow_v3',
                name: "Blackwindow V3",
                link: "\\img\\product\\keyboard\\blackwidow_v3.png",
                price: 1990000,
                hightPrice: 2190000,
                salePercent: 9.13,
                type: 'keyboard',
                brand: "razer",
                switch: 'Mechanical',
                connection: 'USB'
            }
        }
    },
    mouse: {
        logitech: {
            logitechG903Hero: {
                id: 'mouse_logitech_g903_hero',
                name: "logitech G903 Hero",
                link: "\\img\\product\\mouse\\logitech_g903_hero.png",
                price: 1290000,
                hightPrice: 1490000,
                salePercent: 13.42,
                type: 'mouse',
                brand: "logitech",
                dpi: '16000',
                connection: 'USB'
            }
        },
        asus: {
            asusROGStrix: {
                id: 'mouse_asus_rog_strix',
                name: "asus ROG Strix",
                link: "\\img\\product\\mouse\\asus_rog_strix.png",
                price: 1290000,
                hightPrice: 1490000,
                salePercent: 13.42,
                type: 'mouse',
                brand: "asus",
                dpi: '16000',
                connection: 'USB'
            }
        },
        razer: {
            razerDeathAdderEssential: {
                id: 'mouse_razer_death_adder_essential',
                name: "razer Death Adder Essential",
                link: "\\img\\product\\mouse\\razer_death_adder_essential.png",
                price: 990000,
                hightPrice: 1190000,
                salePercent: 17,
                type: 'mouse',
                brand: "razer",
                dpi: '16000',
                connection: 'USB'
            }
        },
        lenovo: {
            lenovoLazer: {
                id: 'mouse_lenovo_lazer',
                name: "lenovo Lazer",
                link: "\\img\\product\\mouse\\lenovo_lazer.png",
                price: 390000,
                hightPrice: 490000,
                salePercent: 20.41,
                type: 'mouse',
                brand: "lenovo",
                dpi: '16000',
                connection: 'USB'
            }
        },
        rapboo: {
            rapbooM160: {
                id: 'mouse_rapboo_m160',
                name: "rapboo M160",
                link: "\\img\\product\\mouse\\rapboo_m160.png",
                price: 290000,
                hightPrice: 390000,
                salePercent: 25.64,
                type: 'mouse',
                brand: "rapboo",
                dpi: '16000',
                connection: 'USB'
            }
        },
        microsoft: {
            microsoftRJN: {
                id: 'mouse_microsoft_rjn',
                name: "microsoft RJN",
                link: "\\img\\product\\mouse\\microsoft_rjn.png",
                price: 490000,
                hightPrice: 590000,
                salePercent: 17,
                type: 'mouse',
                brand: "microsoft",
                dpi: '16000',
                connection: 'USB'
            }
        }
    },
    screen: {
        msi: {
            msiLCD2154: {
                id: 'screen_msi_lcd_2154',
                name: "msi LCD 2154",
                link: "\\img\\product\\screen\\msi_lcd_2154.png",
                price: 2990000,
                hightPrice: 3490000,
                salePercent: 14.33,
                type: 'screen',
                brand: "msi",
                size: '21.5"',
                resolution: '1920x1080',
                refreshRate: '60Hz'
            }
        },
        samsung: {
            samsungLCD27: {
                id: 'screen_samsung_lcd_27',
                name: "samsung LCD 27",
                link: "\\img\\product\\screen\\samsung_lcd_27.png",
                price: 4990000,
                hightPrice: 5490000,
                salePercent: 9.13,
                type: 'screen',
                brand: "samsung",
                size: '27"',
                resolution: '1920x1080',
                refreshRate: '220Hz'
            }
        },
        acer: {
            acerLCD24: {
                id: 'screen_acer_lcd_24',
                name: "acer LCD 24",
                link: "\\img\\product\\screen\\acer_lcd_24.png",
                price: 3990000,
                hightPrice: 4490000,
                salePercent: 11.14,
                type: 'screen',
                brand: "acer",
                size: '24"',
                resolution: '1920x1080',
                refreshRate: '90Hz'
            }
        },
        dell: {
            dell185: {
                id: 'screen_dell_185',
                name: "dell 185",
                link: "\\img\\product\\screen\\dell_185.png",
                price: 1990000,
                hightPrice: 2490000,
                salePercent: 20.08,
                type: 'screen',
                brand: "dell",
                size: '18.5"',
                resolution: '1366x768',
                refreshRate: '60Hz'
            }
        },
        lenovo: {
            lenovoLCD238: {
                id: 'screen_lenovo_lcd_238',
                name: "lenovo LCD 238",
                link: "\\img\\product\\screen\\lenovo_lcd_238.png",
                price: 5990000,
                hightPrice: 6490000,
                salePercent: 7.72,
                type: 'screen',
                brand: "lenovo",
                size: '23.8"',
                resolution: '1920x1080',
                refreshRate: '144Hz'
            }
        },
        lg: {
            lgLCD27: {
                id: 'screen_lg_lcd_27',
                name: "lg LCD 27",
                link: "\\img\\product\\screen\\lg_lcd_27.png",
                price: 3990000,
                hightPrice: 4490000,
                salePercent: 11.14,
                type: 'screen',
                brand: "lg",
                size: '27"',
                resolution: '1920x1080',
                refreshRate: '120Hz'
            }
        }
    }
}

var productDataLen = lenProductList(productData);


// Hàm để định dạng giá sản phẩm
function formatProductPrices(productData) {
    for (var category in productData) {
        for (var brand in productData[category]) {
            for (var product in productData[category][brand]) {
                // Lấy sản phẩm hiện tại
                var currentProduct = productData[category][brand][product];
                // Định dạng giá sản phẩm từ số nguyên thành chuỗi có dấu phân cách hàng nghìn
                currentProduct.price = formatPrice(currentProduct.price);
                currentProduct.hightPrice = formatPrice(currentProduct.hightPrice);
            }
        }
    }
}

// Hàm định dạng giá từ số nguyên thành chuỗi có dấu phân cách hàng nghìn
function formatPrice(price) {
    return price.toLocaleString('vi-VN');
}

// Gọi hàm formatProductPrices để định dạng giá sản phẩm trước khi lưu vào local storage
formatProductPrices(productData);

// Sau khi định dạng xong, lưu vào local storage
if (localStorage.getItem('productList') === null) {
    localStorage.setItem('productList', JSON.stringify(productData));
}
