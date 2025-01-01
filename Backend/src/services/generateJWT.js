import jwt from 'jsonwebtoken';

export default function generateToken({ user }) {
  try {
    const token = jwt.sign({ _id: user._id, googleId: user.googleId, displayName: user.displayName, email: user.email, firstName: user.firstName, lastName: user.lastName, image: user.image,  createdAt: user.createdAt, plan: user.plan, planExpiration: user.planExpiration}, 'clave_secreta', { expiresIn: '10h' });
    return token
  } catch (error) {
    console.error('Error generating token:', error);
    throw new Error('Internal server error');
  }
}
