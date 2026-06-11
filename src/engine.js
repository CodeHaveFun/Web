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
// --- SIGN UP --- | Create Account
function SignUp() {
    var info_results = getValueInfo();
    
    if(info_results.email == "" || info_results.Password == "" || info_results.Username == ""){
        document.getElementById("error_info_text").textContent="Invalid! Check again your information.";
        return;
    }else{
        document.getElementById("error_info_text").textContent="";
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
        password: info_results.Password
    };
    

    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    //                  
    accounts.push(newAccount);
    

    localStorage.setItem("accounts", JSON.stringify(accounts));
    
    alert("Successfully created your account! Let's sign in.");
    window.location.href="signin.html";
}