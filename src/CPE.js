/* CPI - Center Processing Event | Reciceve responing from user */
// Auto run when move this site

let UpdateAcc; // khai báo bên ngoài để các hàm đều thấy
var modeGuest = false;


var account_set = document.getElementById("id_account");
var car_set = document.getElementById("id_cart");

document.addEventListener("DOMContentLoaded", function() {
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
})