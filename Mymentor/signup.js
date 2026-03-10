let generatedOTP;

function scanID() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let studentId = document.getElementById("studentId").value;
    let idPhoto = document.getElementById("idPhoto").files[0];
    let state = document.getElementById("state").value;

    if(!name || !phone || !email || !studentId || !idPhoto || !state){
        alert("All fields including ID card photo are required!");
        return;
    }

    // Preview Image
    let reader = new FileReader();
    reader.onload = function(e){
        document.getElementById("preview").src = e.target.result;
        document.getElementById("preview").style.display = "block";
    }
    reader.readAsDataURL(idPhoto);

    let status = document.getElementById("scan-status");
    status.innerHTML = "🔍 Scanning ID Card...";

    // Simulate scanning delay
    setTimeout(function(){

        // Simple format validation (example rule)
        let idPattern = /^[A-Z]{2}[0-9]{4}$/;

        if(idPattern.test(studentId)){
            status.innerHTML = "✅ ID Card Verified Successfully";

            // Generate OTP
            generatedOTP = Math.floor(100000 + Math.random() * 900000);
            alert("Demo OTP Sent: " + generatedOTP);

            document.getElementById("form-section").style.display = "none";
            document.getElementById("otp-section").style.display = "block";

        } else {
            status.innerHTML = "❌ Invalid Student ID Format";
        }

    }, 2000);
}


function verifyOTP(){

    let userOTP = document.getElementById("otpInput").value;

    if(userOTP == generatedOTP){
        alert("🎉 Verification Successful! Welcome to Mymentor.in");
        window.location.href = "home.html";
    } else {
        alert("Invalid OTP. Try Again.");
    }
}
// let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// if(!emailPattern.test(email)){
//     alert("Please enter a valid email address!");
//     return;
// }


function submitForm() {

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
let hobby = document.getElementById("hobby").value;
let state = document.getElementById("state").value;
let idPhoto = document.getElementById("idPhoto").files[0];

if(!name || !phone || !email || !hobby || !state || !idPhoto){
    alert("Please fill all the fields!");
    return;
}

// mark form as submitted
sessionStorage.setItem("formSubmitted", "true");

// show success message
document.getElementById("successMessage").style.display = "block";

// move to next page
setTimeout(function() {
    window.location.href = "thirdpage.html";
}, 2000);

}
window.onload = function(){

if(sessionStorage.getItem("formSubmitted") === "true"){

document.getElementById("name").value = "";
document.getElementById("phone").value = "";
document.getElementById("email").value = "";
document.getElementById("hobby").value = "";
document.getElementById("state").value = "";
document.getElementById("idPhoto").value = "";

// remove flag
sessionStorage.removeItem("formSubmitted");

}

}