// Validate e-mail input
// https://stackoverflow.com/questions/7635533/validate-email-address-textbox-using-javascript/7635734
function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var emailstatus = document.getElementsByClassName("info-text")[0];
    if (reg.test(emailField.value) == false) {
        emailField.style.backgroundColor = "rgb(255, 149, 132)";
        emailstatus.innerHTML = "<img class='check-email' src='img/alert.svg' alt='Check'> Dit is geen valide e-mailadres";
        emailstatus.style.display = "inline-block";
        // Variabele wordt hier gedeclareerd, omdat element nu pas bestaat
        var checkMail = document.getElementsByClassName("check-email")[0];
        checkMail.classList.add("alert");
        setTimeout(function() {
            checkMail.classList.remove('alert');
        }, 750);
        return false;
    }
    else {
        emailField.style.backgroundColor = "rgb(210, 255, 197)";
        emailstatus.innerHTML = "";
        emailstatus.style.display = "none";
        return true;
    }
}