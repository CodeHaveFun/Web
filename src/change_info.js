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

var ele_line_pass = document.getElementById("line_ele");
var ele_input_pass = document.getElementById("contain_pass");
var button_change_pass = document.getElementById("button_pass_change");

var c_click = false;

button_change_pass.addEventListener("click", function(){
    if(!c_click){
        ele_input_pass.style.display="flex";
        ele_line_pass.style.display="block";
        button_change_pass.style.border="2px solid gray";
        button_change_pass.style.backgroundColor="rgba(173, 173, 173, 0.699)";
        button_change_pass.style.fontWeight="bold";
        c_click=true;
    }else{
        ele_input_pass.style.display="none";
        ele_line_pass.style.display="none";
        button_change_pass.style.border="none";
        button_change_pass.style.backgroundColor="white";
        button_change_pass.style.fontWeight="normal";
        c_click=false;
    }
});


