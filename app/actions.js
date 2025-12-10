"use server";

import { Resend } from "resend";

export async function sendContactForm(formData) {
  try {
    // Instancier Resend au moment de l'exécution, pas au moment de l'import
    const resend = new Resend(process.env.RESEND_API_KEY);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    // Construct the email message
    const textMessage = `
Nom: ${name}
Courriel: ${email}
Téléphone: ${phone}
Service: ${service}
Message: ${message}
`;

    const htmlMessage = `
<p><strong>Nom:</strong> ${name}</p>
<p><strong>Courriel:</strong> ${email}</p>
<p><strong>Téléphone:</strong> ${phone}</p>
<p><strong>Service:</strong> ${service}</p>
<p><strong>Message:</strong> ${message}</p>
`;

    // Send email using Resend
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM || "onboarding@resend.dev",
      to: process.env.RESEND_TO || "entretienmkpro@hotmail.com",
      cc: "info@nuube.ca",
      subject: "Demande de soumission!",
      text: textMessage,
      html: htmlMessage,
    });

    console.log("Email sent successfully:", data);

    return { success: true, message: "Email envoyé avec succès" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Erreur lors de l'envoi de l'email" };
  }
}

