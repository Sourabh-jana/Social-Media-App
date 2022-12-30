const nodemailer = require("nodemailer")

exports.sendEmail = async function(options) {

    // const transportr = nodemailer.createTransport({
    //     host: process.env.SMPT_HOST,
    //     port: process.env.SMPT_PORT,
    //     auth: {
    //         user: process.env.SMPT_MAIL,
    //         pass: process.env.SMPT_PASSWORD 
    //     },
    //     service: process.env.SMPT_SERVICE,
    // });

    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "2ddfca30253001",
          pass: "7a1e3fe9a00ef0"
        }
    });

    const mailOption = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    }

    await transporter.sendMail(mailOption);

}