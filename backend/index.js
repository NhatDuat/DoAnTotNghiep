import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoute from './routers/auth.js';
import bookingRoute from './routers/bookings.js';
import fruitRoute from './routers/fruits.js';
import reviewRoute from './routers/review.js';
import userRoute from './routers/users.js';
import cartRouter from './routers/cart.js';
import morgan from 'morgan';

dotenv.config();
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  Credentials: true,
};

//database connection
mongoose.set('strictQuery', false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      maxPoolSize: 50,
      wtimeoutMS: 2500,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB database connected');
  } catch (err) {
    if (err) console.error(err);
    console.log('MongoDB database connection failed');
  }
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/fruits', fruitRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);
app.use('/api/v1/cart', cartRouter);

app.listen(port, () => {
  connect();
  console.log('server listening on port', port);
});
