document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    let name = document.querySelector(".name").value;

    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name,  email, message);

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, message);
}

// Send Email Info
function sendEmail(name,email,message){
    Email.send({
        Host:"stmp.gmail.com",
        Username: "cknx68@gmail.com",
        Password:"qgosxrmhqomunurc",
        To: "cknx68@gmail.com",
        From: "cknx68@gmail.com",
        Subject: `${name} send you a message`,
        Body: `Name: ${name} <br/> Email： ${email} <br/> Message: ${message}`, 
    }).then((message) => alert("mail sent successfully"));
}