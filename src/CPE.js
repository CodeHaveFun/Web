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
    renderProductsRAM();
    renderProductsCPU();
    renderProductsGPU();

    // Dropdown toggle
    const btnAccToggle = document.getElementById("btn_acc_toggle");
    const accDropdown = document.getElementById("acc_dropdown");
    btnAccToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        accDropdown.classList.toggle("open");
    });
    document.addEventListener("click", function () {
        accDropdown.classList.remove("open");
    });

    // Update account UI mỗi 500ms
    UpdateAcc = setInterval(() => {
        var info_acc = sessionStorage.getItem("User_account");
        var showUsername = document.getElementById("show_username");
        var signAcc = document.getElementById("id_sign_acc");
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

    AllProducts.forEach(product => {
        var el = document.getElementById(product.id);
        if (el) el.addEventListener("click", () => alert(product.name));
    });
});

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