import bcrypt from "bcryptjs";
import user from "../models/user.model.js";



const register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("please enter all fields");
  }

  user
    .findOne({ email })
    .then((found) => {
      if (found) {
        return Promise.reject({
          status: 409,
          message: "user already exist",
        });
      }
      return bcrypt.hash(password, 10).then((pwd) => {
        const new_user = new user({ name, email, password: pwd });
        return new_user.save();
      });
    })
    .then(() => {
      return res.status(201).send("user registered successfully");
    })
    .catch((err) => {
      if (err.status) {
        return res.status(err.status).send(err.message);
      }

      return res.status(500).send("server error");
    });
};

export default register;
