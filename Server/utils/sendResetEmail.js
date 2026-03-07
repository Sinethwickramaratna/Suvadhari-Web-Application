const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

async function sendResetEmail(email, code, firstName = "Valued User") {
    const html = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #334155; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #f1f5f9;">
        <div style="background-color: #ffffff; border-radius: 24px; padding: 48px; border: 1px solid #e2e8f0; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);">
            <div style="text-align: center; margin-bottom: 40px;">
                <div style="display: inline-block; padding: 12px; background-color: #f0f7ff; border-radius: 12px; margin-bottom: 16px;">
                    <span style="font-size: 32px;">🔐</span>
                </div>
                <h1 style="color: #0f172a; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.025em;">Reset Your Password</h1>
                <p style="color: #64748b; margin: 8px 0 0 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Suvadhari Security</p>
            </div>

            <p style="margin: 0 0 24px 0; font-size: 16px;">Hi <strong>${firstName}</strong>,</p>
            
            <p style="margin: 0 0 24px 0; font-size: 16px; color: #475569;">We received a request to reset your Suvadhari account password. Use the verification code below to proceed with the reset process:</p>

            <div style="background-color: #2563eb; border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 32px; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);">
                <span style="font-family: 'Courier New', Courier, monospace; font-size: 42px; font-weight: 800; color: #ffffff; letter-spacing: 12px; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">${code}</span>
            </div>

            <div style="background-color: #fff7ed; border-radius: 12px; padding: 20px; margin-bottom: 32px; border: 1px solid #ffedd5;">
                <p style="margin: 0; font-size: 14px; color: #c2410c; display: flex; align-items: center; justify-content: center; gap: 8px;">
                    <strong>Notice:</strong> This code will expire in 10 minutes for your security.
                </p>
            </div>

            <div style="border-top: 1px solid #f1f5f9; padding-top: 32px; text-align: center;">
                <p style="margin: 0 0 8px 0; font-size: 13px; color: #94a3b8;">If you didn't request a password reset, please secure your account or contact support immediately.</p>
                <div style="margin-top: 24px;">
                    <a href="mailto:suvadhari.support@gmail.com" style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: 600;">Contact Support</a>
                    <span style="color: #cbd5e1; margin: 0 12px;">•</span>
                    <a href="#" style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: 600;">Visit Help Center</a>
                </div>
            </div>
            
            <div style="margin-top: 48px; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #cbd5e1; font-weight: 500;">&copy; 2024 SUVADHARI HEALTH. All rights reserved.</p>
            </div>
        </div>
    </div>
    `;

    await transporter.sendMail({
        from: `"Suvadhari Security" <${process.env.EMAIL}>`,
        to: email,
        subject: `Password Reset Code: ${code} - Suvadhari`,
        html: html
    });
}

module.exports = sendResetEmail;
