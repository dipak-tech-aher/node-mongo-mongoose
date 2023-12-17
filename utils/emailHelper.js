const nodemailer = require('nodemailer');

const mailHelper = async (options)=>{
    
    const transporter = nodemailer.createTransport({
        host: process.env.SMPTP_HOST,
        port: process.env.SMPTP_PORT,
        auth: {
          user: process.env.SMPTP_USER,
          pass: process.env.SMPTP_PASS
        }
      });
    
      const message = {
        from: 'dipak.tech.aher@gmail.com', // sender address
        to: options.email, // list of receivers
        subject: options.subject, // Subject line
        text: options.message, // plain text body
      }

      // send mail with defined transport object
       await transporter.sendMail(message);
}


module.exports = mailHelper;