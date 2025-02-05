import path from 'path';
import fs from 'fs/promises'; // Use async fs module
import nodemailer from 'nodemailer';

interface ApiResponse {
  success: boolean;
  message: string;
}

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    // 📌 Setup SMTP Transport (Using Sendinblue SMTP)
    const transport = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587, // STARTTLS recommended
      secure: false, // Use STARTTLS (not SSL)
      auth: {
        user: process.env.EMAIL_USER, // SMTP username from Sendinblue
        pass: process.env.EMAIL_PASS  // SMTP API key from Sendinblue
      }
    });

    // 📌 Read Email Template from `/src/templates/`
    const templatePath = path.join(process.cwd(), 'src', 'templates', 'email-template.html');
    let emailTemplate = await fs.readFile(templatePath, 'utf-8');

    // 📌 Replace placeholders safely
    emailTemplate = emailTemplate
      .replace(/\$\{username\}/g, username)  // Regex ensures all instances are replaced
      .replace(/\$\{verifyCode\}/g, verifyCode);

    // 📌 Define Email Options
    const mailOptions = {
      from: process.env.EMAIL_FROM , // Ensure a verified email
      to: email,
      subject: "Verification Code",
      html: emailTemplate
    };

    // 📌 Send Email
    await transport.sendMail(mailOptions);

    return { success: true, message: 'Verification email sent successfully.' };
    
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
  }
}
