/* CPI - Center Processing Event | Reciceve responing from user */
// Auto run when move this site

let UpdateAcc; 
var modeGuest = false;
var imamge1_main_body = "https://tinyurl.com/3d6m4jfw"
var account_set = document.getElementById("id_account");
var car_set = document.getElementById("id_cart");

function renderProductsRAM() {
    const container = document.getElementById("sug_ram");
    
    container.innerHTML = ramProducts.map(product => `
        <button class="sp_suggest" id="${product.id}">
            <img id="img_suggest_show" src="${product.image}">
            <div style="background-color: gray;width: 100%;height: 2px;border-radius: 10px;margin-bottom: 10px;"></div>
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
            <img id="img_suggest_show" src="${product.image}">
            <div style="background-color: gray;width: 100%;height: 2px;border-radius: 10px;margin-bottom: 10px;"></div>
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
            <img id="img_suggest_show" src="${product.image}">
            <div style="background-color: gray;width: 100%;height: 2px;border-radius: 10px;margin-bottom: 10px;"></div>
            <label id="label_price">${product.price}</label>
            <label id="info_sp">${product.name}</label>
            <label id="check_sp">${product.inStock ? '✔ In stock' : '✖ Out of stock'}</label>
        </button>
    `).join('');
}


const AllProducts = [...ramProducts,...CaseProducts, ...CPUProducts];

document.addEventListener("DOMContentLoaded", function() {
    renderProductsRAM();
    renderProductsCPU();
    renderProductsGPU();
    // Khởi tạo interval sau khi DOM load xong
    UpdateAcc = setInterval(() => {
        var info_acc = sessionStorage.getItem("User_account");
        var showUsername = document.getElementById("show_username");
        var signAcc = document.getElementById("id_sign_acc");
        
        // Kiểm tra element tồn tại trước khi dùng
        if(showUsername && signAcc) {
            if(info_acc == null || info_acc == "") {
                showUsername.textContent = "Guest";
                signAcc.textContent = "Sign in";
                modeGuest = true;
            } else {
                signAcc.textContent = "Log out";
                showUsername.textContent = info_acc;
            }
        }
        if(modeGuest){
            account_set.style.display="none";
            car_set.style.display="none";
        }else{
            account_set.style.display="block";
            car_set.style.display="block";
        }
    }, 500);

    AllProducts.forEach(product => {
        document.getElementById(product.id).addEventListener("click", () => {
            alert(product.name);
        });
    });
});



function LoginOutAccount() {
    if(UpdateAcc) {
        clearInterval(UpdateAcc); 
        UpdateAcc = null;
    }
    window.location.href = "signin.html";
}
document.getElementById("id_sign_acc").addEventListener("click",function(){
    // check user login?
    if(!modeGuest){ // if logined
        let note = document.querySelector(".note_log_out");
        if(note.style.display === "none" || note.style.display === "") {
            note.style.display = "block";
        } else {
            note.style.display = "none";
        }
    }else{ // if not login
        window.location.href="signin.html";
    }
});
document.getElementById("id_note_login_out_yes").addEventListener("click", function(){
    LoginOutAccount();
});
document.getElementById("id_note_login_out_no").addEventListener("click", function(){
    document.querySelector(".note_log_out").style.display="none";
});
account_set.addEventListener("click", function(){
    window.location.href="custome_acc.html";
});

