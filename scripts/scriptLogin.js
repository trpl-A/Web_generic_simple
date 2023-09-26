
// let form = document.getElementById("form")
// // let username = form["username"].value
// // let password = form["password"].value 

// let username = document.getElementById("ueername")
// let password = document.getElementById("password") 

// console.log(username.value)
let attempts = 3;

function validate() {
    let obj = JSON.parse(user)
    // console.log(obj)

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // console.log(username)
    // console.log(password)

    // unpacking
    console.log(attempts)
    success = false
    if (attempts > 0) {
        obj.forEach(a => {
            // console.log(a["uname"])
            // console.log(a["pword"])

            if (username == a["uname"] && password == a["pword"]) {
                window.location = "login-success.html"
                // window.open("login-success.html")
                success = true
            }


        })

        if (success == false) {
            console.log("invalid credentials")
            window.alert("invalid password, email or username")

            attempts -= 1
        }
    }

    else {
        window.alert("cannot log in")
        // add disable functionality
    }

    if (attempts == 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;

        let msg = document.getElementById("info");
        msg.innerHTML = "Please contact your administrator";
        return false;
    }

    // checking credentials
    // let attempts = 3;

    // for (a=0; a < attempts; a++){

    // }
}