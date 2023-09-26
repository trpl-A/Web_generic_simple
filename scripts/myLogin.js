
// database; dict
users = {
    "name": "password",
    "1_joe": "joe12_12",
    "Sasha24": "xxiv_vixx",
}

// main function
function click1() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let k = Object.keys(users);

    let invalidCounter = 0;

    for (a = 0; a < k.length; a++) {
        if (k[a] == username) {
            console.log("username found");

            if (password == users[k[a]]) {
                console.log("password found; access granted");
                window.open("success2.html");
                break;
            }

            else {
                console.log("password not found");
                window.alert("INVALID PASSWORD");
                break;
            }
        }

        else {
            invalidCounter++;
            console.log("username not found", k[a]);

            if (invalidCounter == k.length) {
                window.alert("INVALID USERNAME");
            }
        }
    }
}
// =================================================
