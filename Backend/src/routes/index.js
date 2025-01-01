import { Router } from 'express';
import { ensureAuth } from '../middlewares/auth.js';

const indexRoute = Router();

indexRoute.get('/log', ensureAuth, async (req, res) => {
  res.render('index', { userinfo: req.user });
});

export default indexRoute;