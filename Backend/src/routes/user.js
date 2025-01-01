import express from 'express';
import UserController from '../controllers/user.js';

const userRoute = express.Router();
const userController = new UserController();


userRoute.get('/:id', userController.getUser);
userRoute.get('/', userController.getAllUsers);
userRoute.post('/', userController.createUser);

export default userRoute;
