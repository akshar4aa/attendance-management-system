const loginBtn = document.getElementById("login-btn")
// console.log(loginBtn);
    loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(password);
    if(email === "" || password === ""){
        alert("Please fill all the fields");
        return;
    }
    const users = JSON.parse(localStorage.getItem("users"))
    const matchedUser = users.find(function(user){
       return user.email === email && user.password === password
    })
       if(matchedUser){
        alert("Login successful");
        window.location.href = "index.html";
       }
       else{
        alert("Invalid email or password");
       }
    })
    