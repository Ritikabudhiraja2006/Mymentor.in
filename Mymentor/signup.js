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

// function submitForm() {

//     // Show success message
//     // alert("Submitted Successfully ✅");

//     // Redirect after 1.5 seconds
//     setTimeout(function() {
//         window.location.href = "dashboard.html";
//     }, 1500);
// }
// document.querySelector("form").addEventListener("submit", function(e) {
//     e.preventDefault();   // Stop form from refreshing

//     // Show success message
//     alert("Submitted Successfully ✅");

//     // Redirect to 3rd page
//     window.location.href = "thirdpage.html";  // change to your 3rd page file name
// });

  function submitForm() {

    // Show success message
    document.getElementById("successMessage").style.display = "block";

    // Redirect after 2 seconds
    setTimeout(function() {
        window.location.href = "thirdpage.html";   // 👈 your 3rd page file name
    }, 2000);
}