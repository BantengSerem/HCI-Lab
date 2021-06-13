var form = document.forms["form"]
var errorName = document.getElementById("error_username")
var errorEmail = document.getElementById("error_email")
var errorPassword = document.getElementById("error_password")
var errorRegion = document.getElementById("error_region")
var errorDOB = document.getElementById("error_DOB")
var errorAgree = document.getElementById("error_agree")

function validateForm(e) {
    var isValid = true
    var name = document.getElementById('username').value
    if (name == '') {
        errorName.innerText = "*Required field"
        isValid = false
        e.preventDefault() // mencegah page refresh
    }

    var menu = document.getElementById("email").value
    if (menu == "") {
        errorEmail.innerText = "*Required field"
        isValid = false
        e.preventDefault()
    }

    var qty = document.getElementById("password").value
    if (qty == "") {
        errorPassword.innerText = "*Required field"
        isValid = false
        e.preventDefault()
    } else if (qty.length < 8) {
        errorPassword.innerText = "*Password must be more than 8"
        isValid = false
        e.preventDefault()
    }

    var size = document.getElementsByClassName("region").value
    if (form['region'].value == "") {
        errorRegion.innerText = "*Please choose one of the regions"
        isValid = false
        e.preventDefault()
    }

    var dob = document.getElementsByClassName("dob").value
    if (dob == "") {
        errorDOB.innerText = "*Required field"
        isValid = false
        e.preventDefault()
    }

    var agree = document.getElementById("agree").checked
    if (agree == false) {
        errorAgree.innerText = "*Must be checked"
        isValid = false
        e.preventDefault()
    }

    if (isValid == true) {
        var confirmation = confirm("Do you want to submit?")
        if (confirmation == true) {
            alert("Thank you for your order!!!")
        }
    }
}

$("#menu").on("click", function() {
    $(".drop_down").slideDown();
});

$(document).mouseup(function(e) {
    var container = $("#menu");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".drop_down").slideUp();
    }
});
