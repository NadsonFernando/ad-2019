import nodemailer from "nodemailer";

export default {
  send(to, name) {
    const transporter = nodemailer.createTransport({
      host: process.env.smtp,
      port: process.env.mail_port,
      secure: false,
      auth: {
        user: process.env.mail_user,
        pass: process.env.mail_pass,
      },
      tls: { rejectUnauthorized: false },
    });

    const options = {
      to,
      from: "nadsonfernando1@gmail.com",
      subject: "Amigo secreto!",
      text: `Você saiu com ${name}`,
    };

    transporter.sendMail(options, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email enviado: " + info.response);
      }
    });
  },
};
