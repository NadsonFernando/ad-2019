import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(
  "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"
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
