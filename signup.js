document.addEventListener("DOMContentLoaded", function () {
    let phoneInput = document.getElementById("phone");
    let phoneError = document.getElementById("phoneError");

    // Live phone number format check as typing
    if (phoneInput) {
        phoneInput.addEventListener("input", function () {
            let phone = this.value.trim();
            let phonePattern = /^[6-9]\d{9}$/;

            if (phone.length === 10 && !phonePattern.test(phone)) {
                phoneError.style.display = "block";
                phoneError.innerText = "Please enter a valid 10-digit phone number";
            } else {
                phoneError.style.display = "none";
            }
        });
    }
});

function submitForm() {
    // 1. Get Elements & Values
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let hobby = document.getElementById("hobby").value.trim();
    let state = document.getElementById("state").value.trim();
    let idPhoto = document.getElementById("idPhoto").files[0];

    // Get Error Elements
    let nameError = document.getElementById("nameError");
    let phoneError = document.getElementById("phoneError");
    let emailError = document.getElementById("emailError");
    let fileError = document.getElementById("fileError");
    let hobbyError = document.getElementById("hobbyError");
    let stateError = document.getElementById("stateError");

    // Reset all error messages
    let allErrors = document.querySelectorAll(".error-text");
    allErrors.forEach(err => err.style.display = "none");

    let isValid = true;

    // Validate Full Name
    if (!name) {
        nameError.style.display = "block";
        nameError.innerText = "Full Name is required";
        isValid = false;
    }

    // Validate Phone Number
    let phonePattern = /^[6-9]\d{9}$/;
    if (!phone || !phonePattern.test(phone)) {
        phoneError.style.display = "block";
        phoneError.innerText = "Enter a valid 10-digit mobile number";
        isValid = false;
    }

    // Validate Email ID
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let invalidDomains = ["example.com", "test.com", "fake.com", "temp.com"];
    let emailDomain = email.split("@")[1]?.toLowerCase();

    if (!email || !emailPattern.test(email) || invalidDomains.includes(emailDomain)) {
        emailError.style.display = "block";
        emailError.innerText = "Please enter a valid active email address";
        isValid = false;
    }

    // Validate ID File Upload
    if (!idPhoto) {
        fileError.style.display = "block";
        fileError.innerText = "Please upload your Student ID Card";
        isValid = false;
    }

    // Validate Hobbies
    if (!hobby) {
        hobbyError.style.display = "block";
        hobbyError.innerText = "This field is required";
        isValid = false;
    }

    // Validate State
    if (!state) {
        stateError.style.display = "block";
        stateError.innerText = "This field is required";
        isValid = false;
    }

    // Stop if any field failed validation
    if (!isValid) return;

    // If all inputs are valid -> Show Success Toast
    let msgBox = document.getElementById("successMessage");
    if (msgBox) {
        msgBox.style.display = "block";
    }

    sessionStorage.setItem("formSubmitted", "true");

    // Redirect after 2 seconds
    setTimeout(function () {
        window.location.href = "thirdpage.html";
    }, 2000);
}

// Clear form on reload
window.onload = function () {
    if (sessionStorage.getItem("formSubmitted") === "true") {
        let form = document.getElementById("signupForm");
        if (form) form.reset();
        sessionStorage.removeItem("formSubmitted");
    }
};