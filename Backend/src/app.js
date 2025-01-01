import express from 'express';
import passport from 'passport';
import session from 'express-session';
import connectDB  from '../config/database.js'
import MongoStore from 'connect-mongo';
import { CONFIG } from '../config/enviroment.js';
import passportConfig from '../config/passport.js';
import cookieParser from 'cookie-parser';
import {corsMiddlewares} from './middlewares/cors.js'; 
import authRoute from './routes/auth.js'; 
import routerPayment from './routes/payment.js';
import userRoute from './routes/user.js';
import loginRoute from './routes/login.js';


passportConfig(passport);

// Conexión a la base de datos
connectDB();

const app = express();

// Configuración de sesión
app.use(
  session({
    secret: CONFIG.SERVER.AUTH.SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: CONFIG.SERVER.BATABASE,
    }),
  })
);

// Middleware de Passport
app.use(passport.initialize());
app.use(passport.session());

// Middlewares adicionales
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Middlewares de JSON y CORS
app.use(express.json());
app.use(cookieParser());
app.use(corsMiddlewares());

// Rutas
app.use('/auth', authRoute)
app.use('/payment', routerPayment)
app.use('/user', userRoute);
app.use('/login', loginRoute );

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});