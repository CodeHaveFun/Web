/* CPI - Center Processing Event | Reciceve responing from user */
// Auto run when move this site
/* CPI - Center Processing Event | Receive responding from user */
// Auto run when move this site

let UpdateAcc; // khai báo bên ngoài để các hàm đều thấy

document.addEventListener("DOMContentLoaded", function() {
    // Khởi tạo interval sau khi DOM load xong
    UpdateAcc = setInterval(() => {
        var info_acc = sessionStorage.getItem("User_account");
        var showUsername = document.getElementById("show_username");
        var signAcc = document.getElementById("id_sign_acc");
        
        // Kiểm tra element tồn tại trước khi dùng
        if(showUsername && signAcc) {
            if(info_acc == null) {
                showUsername.textContent = "Guest";
                signAcc.textContent = "Guest";
            } else {
                signAcc.textContent = "Log out account";
                showUsername.textContent = info_acc;
            }
        }
    }, 500);
});

function LoginOutAccount() {
    if(UpdateAcc) {
        clearInterval(UpdateAcc); // ✅ dừng interval
        UpdateAcc = null;
    }
    window.location.href = "signin.html";
}
document.getElementById("id_sign_acc").addEventListener("click",function(){
    let note = document.querySelector(".note_log_out");
    if(note.style.display === "none" || note.style.display === "") {
        note.style.display = "block";
    } else {
        note.style.display = "none";
    }
});
document.getElementById("id_note_login_out_yes").addEventListener("click", function(){
    LoginOutAccount();
});
document.getElementById("id_note_login_out_no").addEventListener("click", function(){
    document.querySelector(".note_log_out").style.display="none";
});