
import nodemailer from "nodemailer"

export const sendOTPVerificationEmail = async ({email},res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'emergencynow111@gmail.com',
      pass: 'koaclkhmvhuwavxq'
    }
  });
  
  const otp =`${Math.floor(1000 + Math.random() * 9000)}`


    
         

  var mailOptions = {
    from: 'emergencynow111@gmail.com',
    to: email,
    subject: 'OTP for Emergency Now',
    text: `This is your OTP  ${otp}.Please dont share it with others.
          This OTP is only valid for 3 minutes`
        
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  // save data

        await transporter.sendMail(mailOptions);
           res.send(  {otp:otp}  )
  
}
