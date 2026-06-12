/* CPI - Center Processing Event | Reciceve responing from user */
// Auto run when move this site
document.addEventListener("DOMContentLoaded", function() {
    update_infomation();
});
function update_infomation(){
    document.getElementById("show_username").textContent = sessionStorage.getItem("User_account");
}