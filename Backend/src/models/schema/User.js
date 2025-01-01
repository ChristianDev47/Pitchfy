import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  googleId: {
    type: String,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  plan: {
    type: String,
  },
  planExpiration: {
    type: Date, 
  },
});

export const User = model('User', UserSchema);
