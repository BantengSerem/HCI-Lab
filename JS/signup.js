const username = $("#name");
const email = $("#email");
const password = $("#password");
const region = $("#region");
const dob = $("#dob");
const errorElement = $("#error");

form.addEventListener('submit', function(e) {
    let error_messages = []

    // Checking the name, email, password, region, DOB
    if (username.value === '' || username.value === null) {
        error_messages.push("Name is required");
    }

    if (email.value === '' || email.value === null) {
        error_messages.push("Email is required");
    }

    if (password.value.length > 20 || password.value.length < 8) {
        error_messages.push("password length must be [8 - 20]")
    }

    if (dob.value === '' || dob.value === null) {
        error_messages.push("DOB have to be filled")
    }

    // Add and show the messages
    if (error_messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.joinn(', ');
    }
});