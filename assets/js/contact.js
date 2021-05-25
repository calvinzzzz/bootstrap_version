document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, message);
}

// Send Email Info
function sendEmail(name,email,message){
    Email.send({
        SecureToken :"1e97f9a3-3394-4488-a6c1-c679244ac8df",
        To: "Auditoryandvestibular@gmail.com",
        From: "joseph19991127@gmail.com",
        Subject: `${name} send you a message`,
        Body: `Name: ${name} <br/> Email： ${email} <br/> Message: ${message}`, 
    }).then((message) => alert("mail sent successfully"));
}