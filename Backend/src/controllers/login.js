import { comparePasswords } from "../services/authService.js";
import generateToken from "../services/generateJWT.js";
import { User } from "../models/schema/User.js";

class LoginController {

  login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).exec();

    let passwordCorrect = false;
    if (user != null) {
      passwordCorrect = await comparePasswords(password, user.password);
    }
    
    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    const token = generateToken({ user });
    res.cookie('authToken', token, {
      path: '/',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
      sameSite: 'lax',
      secure: false, 
    });

    res.redirect(`${process.env.FRONTEND_URL}/log?token=${token}`);
  };
}

export default LoginController;
