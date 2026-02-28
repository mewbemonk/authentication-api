import user from "../../models/user.model.js";
import transport from "./sendmail.js";




const sendOTP = (req, res) => {
  const { email } = req.body;

  user.findOne({ email })
    .then((found) => {

      if (!found) {
        return Promise.reject({
          status: 401,
          message: "User does not exist",
        });
      }

      
      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      found.otp = otp;
      found.otpExpiry = Date.now() + 5 * 60 * 1000;

      return found.save()
        .then(() => {
          return transport.sendMail({
            from: "rishabhpandey2k24@gmail.com",
            to: found.email,
            subject: "Email Verification OTP",
            html: `
              <h2>Your OTP Code</h2>
              <p>Your verification OTP is:</p>
              <h1>${otp}</h1>
              <p>This OTP will expire in 5 minutes.</p>
            `,
          });
        });
    })
    .then(() => {
      res.status(200).json({
        message: "OTP sent successfully",
      });
    })
    .catch((error) => {

      if (error.status) {
        return res.status(error.status).json({
          message: error.message,
        });
      }

      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    });
};

export default sendOTP;