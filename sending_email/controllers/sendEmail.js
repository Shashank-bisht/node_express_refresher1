const nodemailer = require('nodemailer');

const sendEmail = async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'osvaldo.wunsch76@ethereal.email',
            pass: 'EyRnTA45PeYx7gBBPn'
        }
    });
    let info = await transporter.sendMail({
        from:'"Shanky" <shashankbisht53734@gmail.com>',
        to:'dsbisht30@gmail.com',
        subject:'hello',
        html: "<h1>sending email</h1>"
    })
   res.json(info) 

}
module.exports = sendEmail;