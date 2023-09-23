
const members = {
    "Tester": "pending...",
    "i_i": "pillar",
    "0^0": "und",
    "{0_0}": "1001",
    "[-_-]": "sad",

    "(-_-)": "sad",
    "$_$": "money",
    "!_!": "hum",
    "name": "pass",

}
// ==========================================

function click1() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let names = Object.keys(members);
    let passwords = Object.values(members);

    for (let a = 0; a < names.length; a++) {
        let memberName = names[a];
        let pswd = passwords[a];

        if (memberName == username && pswd == password) {
            // console.log(memberName);
            // console.log(members[memberName]);

            let indexOfName = names.indexOf(memberName);
            let indexOfPassword = passwords.indexOf(pswd);

            console.log("name", "|", "password");
            console.log(indexOfName, "|", indexOfPassword);
            console.log("access granted");

            window.open("success1.html", "_blank");
            // location.replace("animate.html")
            break;
        }

        else if (a == names.length - 1) {
            console.log("NOT FOUND");
            window.alert("invalid password or username");
        }
    }


}
// ==========================================
