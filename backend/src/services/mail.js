import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(
/*coloque a apikey do sendgrid aqui*/
);

export default {
  send(to, name) {
    const message = {
      to,
      from: "nadsonfernando1@gmail.com",
      subject: "Amigo secreto!",
      text: `Você saiu com ${name}`,
    };

    sendgrid.send(message);
  },
};
