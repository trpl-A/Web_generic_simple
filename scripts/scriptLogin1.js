// using fetch API

let attempts = 3;

function v() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

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
        document.getElementById("info").innerHTML = "Please contact your administrator";
        return false;
    }
}