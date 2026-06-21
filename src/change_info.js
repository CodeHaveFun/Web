// Lấy elements
var table_contain = document.getElementById("table_contain");
var id_tag_profile = document.getElementById("id_tag_profile");
var id_tag_privacy = document.getElementById("id_tag_privacy");
var id_tag_order = document.getElementById("id_tag_order");
var id_tag_cart = document.getElementById("id_tag_cart");
var id_tag_logout = document.getElementById("id_tag_logout");
var id_tag_dell_acc = document.getElementById("id_tag_dell_acc");

// Các nút bấm
var id_profile = document.getElementById("id_profile");
var id_privacy = document.getElementById("id_privacy");
var id_order = document.getElementById("id_order");
var id_cart = document.getElementById("id_cart");
var id_logout = document.getElementById("id_logout");
var id_del_acc = document.getElementById("id_del_acc");

// Hàm ẩn tất cả các tag
function hidden_all_tag() {
    if(id_tag_profile) id_tag_profile.style.display = "none";
    if(id_tag_privacy) id_tag_privacy.style.display = "none";
    if(id_tag_order) id_tag_order.style.display = "none";
    if(id_tag_cart) id_tag_cart.style.display = "none";
    if(id_tag_logout) id_tag_logout.style.display = "none";
    if(id_tag_dell_acc) id_tag_dell_acc.style.display = "none";
}

document.addEventListener("DOMContentLoaded",function(){
    table_contain.style.display="none";
    hidden_all_tag();
    // update info
    document.getElementById("username").value=sessionStorage.getItem("User_account");
    document.getElementById("email").value=sessionStorage.getItem("User_email");
    //document.getElementById("full_name_user").value=sessionStorage.getItem("fullname") || "cvxc";
    if(sessionStorage.getItem("fullname") != "[object HTM121LInputElement]"){
        document.getElementById("full_name_user").value=sessionStorage.getItem("fullname");
    }
    document.getElementById("phone").value=sessionStorage.getItem("phonenum");
    document.getElementById("date").value=sessionStorage.getItem("date");
    get_info_address.value = sessionStorage.getItem("address");
});

// Sự kiện click
if(id_profile) {
    id_profile.addEventListener("click", function() {
        hidden_all_tag();
        table_contain.style.display = "block";
        id_tag_profile.style.display = "block";
    });
}

if(id_privacy) {
    id_privacy.addEventListener("click", function() {
        hidden_all_tag();
        table_contain.style.display = "block";
        id_tag_privacy.style.display = "block";
    });
}

if(id_order) {
    id_order.addEventListener("click", function() {
        hidden_all_tag();
        table_contain.style.display = "block";
        id_tag_order.style.display = "block";
    });
}

if(id_cart) {
    id_cart.addEventListener("click", function() {
        hidden_all_tag();
        table_contain.style.display = "block";
        id_tag_cart.style.display = "block";
    });
}

if(id_logout) {
    id_logout.addEventListener("click", function() {
        hidden_all_tag();
        table_contain.style.display = "block";
        id_tag_logout.style.display = "block";
    });
}

if(id_del_acc) {
    id_del_acc.addEventListener("click", function() {
        hidden_all_tag();
        table_contain.style.display = "block";
        id_tag_dell_acc.style.display = "block";
    });
}
// --------------- PROFILE TAG ------------------
document.getElementById("profile_save").addEventListener("click", function(){

    if(document.getElementById("full_name_user").value != sessionStorage.getItem("fullname")){
    UpdateFullname(sessionStorage.getItem("User_account"),document.getElementById("full_name_user").value);
    }

    if(document.getElementById("phone").value != sessionStorage.getItem("phonenum")){
    UpdatePhonenum(sessionStorage.getItem("User_account"),document.getElementById("phone").value);
    }
    if(document.getElementById("date").value != sessionStorage.getItem("date")){
     UpdateDate(sessionStorage.getItem("User_account"),document.getElementById("date").value);
    }
    
    if(document.getElementById("username").value != sessionStorage.getItem("User_account")){
        UpdateUsername(sessionStorage.getItem("User_account"),document.getElementById("username").value);

    }
    if(document.getElementById("email").value != sessionStorage.getItem("User_email")){
        UpdateEmail(document.getElementById("username").value,document.getElementById("email").value);

    }
    //sessionStorage.setItem("fullname",document.getElementById("full_name_user").value);
    //sessionStorage.setItem("phonenum",document.getElementById("phone").value);
    //sessionStorage.setItem("date",document.getElementById("date").value);
    window.location.href="signin.html";
});

var ele_input_pass = document.getElementById("contain_pass");
var button_change_pass = document.getElementById("button_pass_change");
var navi_pass = document.getElementById("navi_pass");
var c_click = false;

button_change_pass.addEventListener("click", function(){
    if(!c_click){
        navi_pass.textContent="v ";
        ele_input_pass.style.display="flex";
        button_change_pass.style.backgroundColor="rgba(173, 173, 173, 0.699)";
        button_change_pass.style.fontWeight="bold";
        c_click=true;
    }else{
        navi_pass.textContent="> ";
        ele_input_pass.style.display="none";
        button_change_pass.style.border="none";
        button_change_pass.style.backgroundColor="white";
        button_change_pass.style.fontWeight="normal";
        c_click=false;
    }
});
var button_address_change = document.getElementById("button_address_change");
var contain_address = document.getElementById("contain_address");
var navi_address = document.getElementById("navi_address");
var d_click = false;
button_address_change.addEventListener("click", function(){
    if(!d_click){
        navi_address.textContent="v ";
        contain_address.style.display="flex";
        button_address_change.style.backgroundColor="rgba(173, 173, 173, 0.699)";
        button_address_change.style.fontWeight="bold";
        d_click = true;
    }else{
        navi_address.textContent="> ";
        contain_address.style.display="none";
        button_address_change.style.fontWeight="normal";
        button_address_change.style.backgroundColor="white";
        d_click = false;
    }
});
document.getElementById("log_out").addEventListener("click", function(){
    window.location.href="signin.html";
});
// Password
var button_pri_ser = document.getElementById("privacy_save");
var get_info_old_pass = document.getElementById("old_pass");
var get_info_new_pass = document.getElementById("new_pass");
var warning_note = document.getElementById("warning_note");
var warning_note_new_pass = document.getElementById("warning_note_1");

//Address
var get_info_address = document.getElementById("new_address");
var warning_note_address = document.getElementById("warning_address_note_1");
button_pri_ser.addEventListener("click", function(){
    alert("OK");
    alert(get_info_address.value);
    if(get_info_new_pass.value !== "" && get_info_old_pass.value !== ""){
        if(ComparePassword(sessionStorage.getItem("User_account"),get_info_old_pass.value)){
            warning_note.textContent="";
            //UpdatePassword(sessionStorage.getItem("User_account"), get_info_new_pass.value);
            if(ComparePassword(sessionStorage.getItem("User_account"),get_info_new_pass.value)){
                warning_note_new_pass.textContent="Check again! Your password is the same as the old password.";
            }else{
                warning_note_new_pass.textContent="";
                UpdatePassword(sessionStorage.getItem("User_account"), get_info_new_pass.value);
                window.location.href="signin.html";
            }
        }else{
            warning_note.textContent="Incorrect! Check your current password again.";
        }
    }
    if(get_info_address.value !== ""){
        UpdateAddress(sessionStorage.getItem("User_account"), get_info_address.value);
        window.location.href="signin.html";
    }
    alert("OK1");
});