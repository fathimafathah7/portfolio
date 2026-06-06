function sendMail() {
    // 1. Get values first
    const name = document.getElementById("uname").value.trim();
    const email = document.getElementById("gmail").value.trim();
    const message = document.getElementById("message").value.trim();

    // 2. Validate BEFORE sending
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }
    
    
    const para = { name, email, message };

    // 3. Clean promise chain — .catch() directly follows .then()
    emailjs.send("service_iz8mbke", "template_o09ke8h", para)
        .then(res => {
            document.getElementById("uname").value = "";
            document.getElementById("gmail").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch(err => {
            console.error(err);
            alert("Email not sent. Please try again.");
        });
}