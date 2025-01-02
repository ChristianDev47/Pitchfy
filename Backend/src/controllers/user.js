import generateToken from "../services/generateJWT.js";
import { User } from '../models/schema/User.js';
import { hashPassword } from '../services/encryptPassword.js';

class UserController {

  getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id)
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getAllUsers =  async (req, res) => {
    try {
      const users = await User.find()
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  createUser =  async (req, res) => {
    try {
      const { email, password } = req.body;
      const existEmail = await User.findOne({ email: email }).exec()
      if (existEmail) {
        return res
          .status(404)
          .json({ error: "Email is used in other account" });
      }
  
      const hashedPassword = await hashPassword(password);
      const newUser = {
        ...req.body,
        password: hashedPassword,
      };  
  
      const user = await User.create(newUser);
  
      // Creating access_token after create account
      const token = generateToken({ user });
      res.cookie('authToken', token, {
        path: '/',
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
        sameSite: 'lax',
        secure: false, 
      });
      console.log(user, token);
      return res.status(200).json({user, token});
  
    } catch (error) {
      console.error("Error creating user: ", error);
      res.status(404).json({ error: "Error creating user" });
    }
  }
}

export default UserController;
