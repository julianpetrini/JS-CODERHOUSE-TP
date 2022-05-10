//FUNCTION VALIDATION 
function validation() {

    sessionStorage.setItem("firstName", document.getElementById("fname").value);
    sessionStorage.setItem("email", document.getElementById("email").value);

    let firstName = document.getElementById("fname").value
    let email = document.getElementById("email").value

    if (firstName == "" || email == "") {
        alert("Por favor complete los datos");

        return false
    }
    else {
        alert("Por favor complete la informacion solicitaad");

    }
};

function newPage() {

    let firstname = sessionStorage.getItem("firstName");
    let email = sessionStorage.getItem("email");

    document.getElementById("result").innerHTML = firstname + " gracias por registrarte en nuestra base de datos, pronto te enviaremos a " + email + " tu descuento y muchas mas novedades."

}