const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  host: 'email-smtp.sa-east-1.amazonaws.com', // Endpoint SMTP da AWS
  port: 587, // Porta STARTTLS
  secure: false, // STARTTLS é usado, portanto, secure deve ser falso
  auth: {
    user: 'SEU_USUARIO_SMTP_AWS', // Seu nome de usuário SMTP da AWS
    pass: 'SUA_SENHA_SMTP_AWS' // Sua senha SMTP da AWS
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: email,
    to: "kaykesandes@gmail.com", // Defina o destinatário correto aqui
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
