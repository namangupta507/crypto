import { createJwtToken } from "../../helpers/jwt.js";
import { generateRandomString } from "../../helpers/utils.js";
import Admin from "../../models/admin.js";
import bcrypt from "bcryptjs";

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailExists = await Admin.findOne({ email: email });

    if (!emailExists) {
      return res.status(400)
        .send({ message: "Incorrect credentials", status: false, data: {} });
       
    }

    const passwordMatch = await bcrypt.compare(password, emailExists.password);

    if (!passwordMatch) {
      return res.status(400).send({ message: "Incorrect credentials", status: false, data: {} });   
    }

    let sessionToken = generateRandomString();

    const updated = await Admin.findOneAndUpdate(
      { email: email },
      { sessionToken: sessionToken }
    );

    const tokenData = createJwtToken(updated.toObject());

    return res.status(200).send({ message: "Login Successful", status: true, data: {token:tokenData} });
      
     
  } catch (error) {
    return res.status(500).send({ message: error.message, status: false, error: error });
      
      
  }
};


export {adminLogin};