const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

async function sendVerificationEmail(email, code) {
    const html = `
  <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; max-width: 600px; margin: auto;">
      <h2 style="color: #4CAF50; text-align: center;">Email Verification</h2>
      <p style="font-size: 16px; color: #333;">Welcome to Suvadhari! Your verification code is:</p>

      <div style="
        background: #f8f9fa;
        color: #4CAF50;
        padding: 20px;
        width: 200px;
        margin: 20px auto;
        text-align: center;
        letter-spacing: 5px;
        font-size: 32px;
        font-weight: bold;
        border-radius: 8px;
        border: 2px solid #4CAF50;">
        ${code}
      </div>

      <p style="font-size: 14px; color: #666; text-align: center;">This code will expire in <b>5 minutes</b>.</p>
      <p style="font-size: 14px; color: #999; margin-top: 30px; text-align: center;">If you did not request this, please ignore this email.</p>
  </div>
  `;

    await transporter.sendMail({
        from: `"Suvadhari Health" <${process.env.EMAIL}>`,
        to: email,
        subject: "Email Verification Code",
        html: html
    });
}

module.exports = sendVerificationEmail;
