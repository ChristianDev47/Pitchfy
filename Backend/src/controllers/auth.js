import generateToken from "../services/generateJWT.js";

class AuthController {

  googleAuth = async (req, res) => {
      const user = req.user;
      const token = generateToken({user})
      res.cookie('authToken', token, {
        path: '/',
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
        sameSite: 'lax',
        secure: false, 
      });
      res.redirect(`${process.env.FRONTEND_URL}/log?token=${token}`);
    }
}

export default AuthController;
