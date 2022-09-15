// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
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
      to: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_TO,
      from: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_FROM,
      subject: "Demande de soumission!",
      text: message,
      html: message.replace(/rn/g, "<br>"),
    });
    res.status(200).json({ status: "Ok" });
  } catch (error) {
    res.status(400).json({ status: "Error" });
  }
}
