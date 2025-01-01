import express from 'express';
import passport from 'passport';
import AuthController from '../controllers/auth.js';

const authRoute = express.Router();
const authController = new AuthController();

authRoute.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

authRoute.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  authController.googleAuth
);
export default authRoute;
