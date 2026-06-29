/* 
Processer Center
------------------------------ SIGN UP & SIGN IN --------------------------------
SIGN UP:
Sign UP -> Get value -> Program save information account to file .json
SIGN IN:
Sign IN -> Get value -> Program open file .json (file saves accounts) -> Check and compare value
                                                                    IF INCORRECT -> Return error login
                                                                    IF CORRECT -> Allow continue
*/

var end_gmail = "@gmail.com";

function UpdateUsername(currentUsername, newUsername) {
    //if(!currentUsername || !newUsername || newUsername.trim() === "") {
        //return false;
    //}
    
    //if(currentUsername === newUsername) {
        //return false;
    //}
    
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    
    // Kiểm tra username mới đã tồn tại
    //for(var i = 0; i < accounts.length; i++) {
        //if(accounts[i].username === newUsername) {
            //return false;
       //}
    //}
    
    // Tìm và cập nhật
    for(var i = 0; i < accounts.length; i++) {
        if(accounts[i].username === currentUsername) {
            accounts[i].username = newUsername;
            localStorage.setItem("accounts", JSON.stringify(accounts));
            sessionStorage.setItem("User_account", newUsername);
            return true;
        }
    }
    return false;
}

// ==================== HÀM CẬP NHẬT EMAIL====================
function UpdateEmail(currentUsername, newEmail) {
    //if(!currentUsername || !newEmail || newEmail.trim() === "") {
        //return false;
    //}
    
    // Kiểm tra định dạng email
    //var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //if(!emailPattern.test(newEmail)) {
        //return false;
    //}
    
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var currentEmail = "";
    
    // Lấy email hiện tại
    for(var i = 0; i < accounts.length; i++) {
        if(accounts[i].username === currentUsername) {
            currentEmail = accounts[i].email;
            break;
        }
    }
    
    //if(currentEmail === newEmail) {
        //return false;
    //}
    
    // Kiểm tra email mới đã tồn tại
    //for(var i = 0; i < accounts.length; i++) {
        //if(accounts[i].email === newEmail) {
            //return false;
        //}
    //}
    
    // Cập nhật email
    for(var i = 0; i < accounts.length; i++) {
        if(accounts[i].username === currentUsername) {
            accounts[i].email = newEmail;
            localStorage.setItem("accounts", JSON.stringify(accounts));
            sessionStorage.setItem("User_email", newEmail);
            return true;
        }
    }
    return false;
}

// ==================== HÀM CẬP NHẬT PASSWORD  ====================
function UpdatePassword(currentUsername, newPassword) {
    //if(!currentUsername || !newPassword || newPassword.trim() === "") {
        //return false;
    //}
    
    //if(newPassword.length < 6) {
        //return false;
    //}
    
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var currentPassword = "";
    
    // Lấy mật khẩu hiện tại
    for(var i = 0; i < accounts.length; i++) {
        if(accounts[i].username === currentUsername) {
            currentPassword = accounts[i].password;
            break;
        }
    }
    
    //if(currentPassword === newPassword) {
        //return false;
    //}
    
    // Cập nhật mật khẩu
    for(var i = 0; i < accounts.length; i++) {
        if(accounts[i].username === currentUsername) {
            accounts[i].password = newPassword;
            localStorage.setItem("accounts", JSON.stringify(accounts));
            sessionStorage.setItem("User_password", newPassword);
            return true;
        }
    }
    return false;
}
function UpdateFullname(username,newname){
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var curname = "";
    for(var i = 0; i < accounts.length; i++){
        if(accounts[i].username === username){
            curname = accounts[i].fullname;
            break;
        }
    }
    for(var i = 0; i < accounts.length; i++){
        if(accounts[i].username === username){
           accounts[i].fullname = newname;
            localStorage.setItem("accounts", JSON.stringify(accounts));
            sessionStorage.setItem("fullname", newname);
            return true;
        }
    }
    return false;
}
function UpdatePhonenum(username,newphone){
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var curphone = "";
    for(var i = 0; i < accounts.length; i++){
        if(accounts[i].username === username){
            curphone = accounts[i].phonenum;
            break;
        }
    }
    for(var i = 0; i < accounts.length; i++){
        if(accounts[i].username === username){
           accounts[i].phonenum = newphone;
            localStorage.setItem("accounts", JSON.stringify(accounts));
            sessionStorage.setItem("phonenum", newphone);
            return true;
        }
    }
    return false;
}
function UpdateAddress(username,newaddress){
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var curaddress = "";
    for(var i = 0; i < accounts.length; i++){
        if(accounts[i].username === username){
            curaddress = accounts[i].address;
            break;
        }
    }
    for(var i = 0; i < accounts.length; i++){
        if(accounts[i].username === username){
           accounts[i].address = newaddress;
            localStorage.setItem("accounts", JSON.stringify(accounts));
            sessionStorage.setItem("address", newaddress);
            return true;
        }
    }
    return false;
}
function UpdateDate(username,newdate){
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var curdate = "";
    for(var i = 0; i < accounts.length; i++){
        if(accounts[i].username === username){
            curdate = accounts[i].date;
            break;
        }
    }
    for(var i = 0; i < accounts.length; i++){
        if(accounts[i].username === username){
           accounts[i].date = newdate;
            localStorage.setItem("accounts", JSON.stringify(accounts));
            sessionStorage.setItem("date", newdate);
            return true;
        }
    }
    return false;
}
// func get value 
function getValueInfo(){
    var value_username = document.getElementById('username').value;
    var value_email = document.getElementById('email').value;
    var value_password = document.getElementById('password').value;
    return{
        Username: value_username,
        Email: value_email,
        Password: value_password
    };
}
function CheckAccount(username, email, password) {

    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    
 
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].username === username && accounts[i].email == email && accounts[i].password === password) {
            return true; 
        }
    }
    return false; 
}
function ComparePassword(username_now,password_check){
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    for(var i =0; i < accounts.length; i++){
        if(accounts[i].username === username_now){
            if(accounts[i].password === password_check){
                return true;
            }
        }
    }
    return false;
} 
// --- SIGN UP --- | Create Account
function SignUp() {
    var info_results = getValueInfo();
    
    if(info_results.Email == "" || info_results.Password == "" || info_results.Username == ""){
        document.getElementById("error_info_text").textContent="Invalid! Check again your information.";
        return;
    }else{
        document.getElementById("error_info_text").textContent="";
    }
    const email = info_results.Email;
    if(!email.includes("@gmail.com")){
        document.getElementById("error_info_text").textContent = "Check again your email!";
        return;
    }

    if(CheckAccount(info_results.Username, info_results.Email, info_results.Password)){
        document.getElementById("error_info_text").textContent="Invalid! Username, E-mail, Password of other account already exists.";
        return;
    }else{
        document.getElementById("error_info_text").textContent="";
    }
    var newAccount = {
        username: info_results.Username,
        email: info_results.Email,
        password: info_results.Password,
        fullname: "",
        phonenum: "",
        date: "",
        address: ""    
    };
    

    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    //                  
    accounts.push(newAccount);
    

    localStorage.setItem("accounts", JSON.stringify(accounts));
    
    window.location.href="signin.html";
}
// --- SIGN IN --- | Check Account and login
function SignIn(){
    var info_results = getValueInfo();
    
    // Kiểm tra empty
    if(info_results.Username == "" || info_results.Email == "" || info_results.Password == ""){
        document.getElementById("error_info_text").textContent = "Please fill all fields!";
        return;
    }
    
    // Nếu CheckAccount trả về TRUE (tìm thấy) -> cho đăng nhập
    if(CheckAccount(info_results.Username, info_results.Email, info_results.Password)){
        //  ĐÚNG TÀI KHOẢN -> cho đăng nhập
        document.getElementById("error_info_text").textContent = "";
        sessionStorage.setItem("User_account", info_results.Username);
        sessionStorage.setItem("User_email", info_results.Email);
        sessionStorage.setItem("User_password",info_results.Password);
        
        var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        for(var i = 0; i < accounts.length; i++){
            if(accounts[i].username === sessionStorage.getItem("User_account")){
                UpdateFullname(sessionStorage.getItem("User_account"),accounts[i].fullname);
                UpdatePhonenum(sessionStorage.getItem("User_account"),accounts[i].phonenum);
                UpdateDate(sessionStorage.getItem("User_account"),accounts[i].date);
                UpdateAddress(sessionStorage.getItem("address"), accounts[i].address);
                break;
            }
        }
        window.location.href = "home.html";
    } else {
        // SAI TÀI KHOẢN -> báo lỗi
        document.getElementById("error_info_text").textContent = "Incorrect! Check your username, email, password.";
        return;
    }
}
function ModeGuestLoginIn(){
    sessionStorage.setItem("User_account","");
    window.location.href="home.html";
}



