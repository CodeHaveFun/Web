/* CPI - Center Processing Event */
let UpdateAcc;
var modeGuest = false;
var account_set = document.getElementById("id_account");
var car_set = document.getElementById("id_cart");

function renderProductsRAM() {
    const container = document.getElementById("sug_ram");
    container.innerHTML = ramProducts.map(product => `
        <button class="sp_suggest" id="${product.id}">
            <img id="img_suggest_show" src="${product.image}" alt="${product.name}">
            <div style="background:#eee;width:100%;height:2px;border-radius:10px;margin-bottom:8px;"></div>
            <label id="label_price">${product.price}</label>
            <label id="info_sp">${product.name}</label>
            <label id="check_sp">${product.inStock ? '✔ In stock' : '✖ Out of stock'}</label>
        </button>
    `).join('');
}
function renderProductsCPU() {
    const container = document.getElementById("sug_cpu");
    container.innerHTML = CPUProducts.map(product => `
        <button class="sp_suggest" id="${product.id}">
            <img id="img_suggest_show" src="${product.image}" alt="${product.name}">
            <div style="background:#eee;width:100%;height:2px;border-radius:10px;margin-bottom:8px;"></div>
            <label id="label_price">${product.price}</label>
            <label id="info_sp">${product.name}</label>
            <label id="check_sp">${product.inStock ? '✔ In stock' : '✖ Out of stock'}</label>
        </button>
    `).join('');
}
function renderProductsGPU() {
    const container = document.getElementById("sug_gpu");
    container.innerHTML = CaseProducts.map(product => `
        <button class="sp_suggest" id="${product.id}">
            <img id="img_suggest_show" src="${product.image}" alt="${product.name}">
            <div style="background:#eee;width:100%;height:2px;border-radius:10px;margin-bottom:8px;"></div>
            <label id="label_price">${product.price}</label>
            <label id="info_sp">${product.name}</label>
            <label id="check_sp">${product.inStock ? '✔ In stock' : '✖ Out of stock'}</label>
        </button>
    `).join('');
}

const AllProducts = [...ramProducts, ...CaseProducts, ...CPUProducts];

document.addEventListener("DOMContentLoaded", function () {
    // ===== CHỈ CHẠY NẾU CÓ PHẦN TỬ TƯƠNG ỨNG =====
    
    // 1. Render sản phẩm (chỉ chạy nếu có element)
    if (document.getElementById("sug_ram")) {
        if (typeof renderProductsRAM === 'function') renderProductsRAM();
    }
    if (document.getElementById("sug_cpu")) {
        if (typeof renderProductsCPU === 'function') renderProductsCPU();
    }
    if (document.getElementById("sug_gpu")) {
        if (typeof renderProductsGPU === 'function') renderProductsGPU();
    }

    // 2. Dropdown toggle (luôn chạy vì header có ở mọi trang)
    const btnAccToggle = document.getElementById("btn_acc_toggle");
    const accDropdown = document.getElementById("acc_dropdown");
    
    if (btnAccToggle && accDropdown) {
        btnAccToggle.addEventListener("click", function (e) {
            e.stopPropagation();
            accDropdown.classList.toggle("open");
        });
        
        document.addEventListener("click", function () {
            accDropdown.classList.remove("open");
        });
    }

    // 3. Update account UI (chỉ chạy nếu có phần tử)
    const showUsername = document.getElementById("show_username");
    const signAcc = document.getElementById("id_sign_acc");
    
    if (showUsername || signAcc) {
        let modeGuest = true;
        const account_set = document.getElementById("account_set");
        const car_set = document.getElementById("car_set");
        
        setInterval(() => {
            var info_acc = sessionStorage.getItem("User_account");
            
            if (showUsername && signAcc) {
                if (!info_acc || info_acc === "") {
                    showUsername.textContent = "Guest";
                    signAcc.textContent = "🔓 Sign in";
                    modeGuest = true;
                } else {
                    signAcc.textContent = "🔴 Log out";
                    showUsername.textContent = info_acc;
                    modeGuest = false;
                }
            }
            
            if (account_set) account_set.style.display = modeGuest ? "none" : "block";
            if (car_set) car_set.style.display = modeGuest ? "none" : "block";
        }, 500);
    }

    // 4. Product click alerts (chỉ chạy nếu có AllProducts)
    if (typeof AllProducts !== 'undefined' && AllProducts.length > 0) {
        AllProducts.forEach(product => {
            var el = document.getElementById(product.id);
            if (el) {
                el.addEventListener("click", () => {
                    
                    switch (product.id){
                        case 1:
                            window.location.href="details/id1.html";
                            break;
                        case 2:
                            window.location.href="details/id2.html";
                            break;
                        case 3:
                            window.location.href="details/id3.html";
                            break;
                        case 4:
                            window.location.href="details/id4.html";
                            break;
                        case 5:
                            window.location.href="details/id5.html";
                            break;
                        case 11:
                            window.location.href="details/id11.html";
                            break;
                        case 12:
                            window.location.href="details/id12.html";
                            break;
                        case 13:
                            window.location.href="details/id13.html";
                            break;
                        case 14:
                            window.location.href="details/id14.html";
                            break;
                        case 15:
                            window.location.href="details/id15.html";
                            break;
                        case 21:
                            window.location.href="details/id21.html";
                            break;
                        case 22:
                            window.location.href="details/id22.html";
                            break;
                        case 23:
                            window.location.href="details/id23.html";
                            break;
                        case 24:
                            window.location.href="details/id24.html";
                            break;
                        case 25:
                            window.location.href="details/id25.html";
                            break;

                    }
                });
            }
            
        });
    }
});
document.getElementById("product").onclick = function(){
    document.getElementById("product_tag").classList.toggle('open');
};
function LoginOutAccount() {
    if (UpdateAcc) { clearInterval(UpdateAcc); UpdateAcc = null; }
    sessionStorage.clear();
    window.location.href = "signin.html";
}

document.getElementById("id_sign_acc").addEventListener("click", function () {
    if (!modeGuest) {
        var modal = document.getElementById("logout_modal");
        modal.classList.toggle("show");
    } else {
        window.location.href = "signin.html";
    }
});
document.getElementById("id_note_login_out_yes").addEventListener("click", function () {
    LoginOutAccount();
});
document.getElementById("id_note_login_out_no").addEventListener("click", function () {
    document.getElementById("logout_modal").classList.remove("show");
});
account_set.addEventListener("click", function () {
    window.location.href = "custome_acc.html";
});

