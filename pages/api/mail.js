// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
  Nom: ${body.name}rn
  Courriel: ${body.email}rn
  Téléphone: ${body.phone}rn
  Service: ${body.service}rn
  Message: ${body.message}
`;
  console.log(message);
  try {
    mail.send({
      to: "max@pelletier.me",
      from: "info@entretienmkpro.com",
      subject: "Demande de soumission!",
      text: message,
      html: message.replace(/rn/g, "<br>"),
    });
    res.status(200).json({ status: "Ok" });
  } catch (error) {
    res.status(400).json({ status: "Error" });
  }
}
