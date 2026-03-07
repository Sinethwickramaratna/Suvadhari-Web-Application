const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

async function sendVerificationEmail(email, code, firstName = "Valued User", role = "Member") {
    const html = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #334155; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #f8fafc;">
        <div style="background-color: #ffffff; border-radius: 16px; padding: 40px; shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
            <div style="text-align: center; margin-bottom: 32px;">
                <h1 style="color: #2563eb; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.025em;">Suvadhari</h1>
                <p style="color: #64748b; margin: 4px 0 0 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Digital Healthcare System</p>
            </div>

            <h2 style="color: #1e293b; margin: 0 0 16px 0; font-size: 20px; font-weight: 700;">Verify Your Email</h2>
            
            <p style="margin: 0 0 24px 0;">Hello <strong>${firstName}</strong>,</p>
            
            <p style="margin: 0 0 24px 0;">Thank you for registering as a <strong>${role}</strong> with Suvadhari. To complete your account setup and ensure the security of your healthcare data, please use the following 6-digit verification code:</p>

            <div style="background-color: #f1f5f9; border-radius: 12px; padding: 32px; text-align: center; margin-bottom: 24px; border: 1px solid #e2e8f0;">
                <span style="font-family: monospace; font-size: 36px; font-weight: 800; color: #2563eb; letter-spacing: 8px;">${code}</span>
            </div>

            <p style="margin: 0 0 8px 0; font-size: 14px; text-align: center; color: #64748b;">This code is valid for <strong>5 minutes</strong>.</p>
            <p style="margin: 0 0 32px 0; font-size: 13px; text-align: center; color: #94a3b8;">If you didn't request this code, you can safely ignore this email.</p>

            <div style="background-color: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 32px; border: 1px solid #e2e8f0; text-align: center;">
                <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.05em;">Need Help?</p>
                <p style="margin: 0 0 4px 0; font-size: 14px; color: #64748b;">Email: <a href="mailto:suvadhari.support@gmail.com" style="color: #2563eb; text-decoration: none;">suvadhari.support@gmail.com</a></p>
                <p style="margin: 0; font-size: 14px; color: #64748b;">Phone: <span style="color: #475569; font-weight: 600;">+94 72 210 5684</span></p>
            </div>

            <div style="border-top: 1px solid #e2e8f0; pt: 32px; text-align: center;">
                <p style="margin: 32px 0 0 0; font-size: 12px; color: #94a3b8;">&copy; 2026 Suvadhari Health. All rights reserved.</p>
                <p style="margin: 4px 0 0 0; font-size: 12px; color: #94a3b8;">Transforming healthcare through technology.</p>
            </div>
        </div>
    </div>
    `;

    await transporter.sendMail({
        from: `"Suvadhari Health" <${process.env.EMAIL}>`,
        to: email,
        subject: `Verification Code: ${code} - Suvadhari Health`,
        html: html
    });
}

module.exports = sendVerificationEmail;
