import express from 'express';
import LoginController from '../controllers/login.js';

const loginRoute = express.Router();
const loginController = new LoginController();

loginRoute.post('/', loginController.login);

export default loginRoute;