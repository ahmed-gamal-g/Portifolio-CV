// function sendEmail() {
//     Email.send({
//       SecureToken: "0c965f2c-f11f-4793-96de-9dffc1daf7dc",
//       To: "gemyisking@gmail.com",
//       From: "gemyisking@gmail.com",
//       Subject: "test email",
//       Body: "name : "+ document.getElementById("name").value
//       + "<br> Email: " + document.getElementById('email').value
//       + "<br> phone: " + document.getElementById('phone').value
//       + "<br> message: " + document.getElementById('message').value
//     }).then((message) => alert("message"));
//   }

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      Phone: document.getElementById("Phone").value,
      message: document.getElementById("message").value,
    };
    const serviceID = "service_kp65nlh";
    const templateID = "template_w9ld69m";
    
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("Phone").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
      })
      .catch((err) => console.log(err));
  }