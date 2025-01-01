import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../src/models/schema/User.js';


export default function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        // get the user data from google
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
          email: profile.emails[0].value,
        };

        try {
          // find the user in our database
          let user = await User.findOne({ googleId: profile.id });

          if (user) {
            // If user present in our database
            done(null, user);
          } else {
            // if user is not present in our database, save user data to database
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
          done(err, null); // In case of error, pass the error to done
        }
      }
    )
  );

  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id); // Use async/await here
      done(null, user);
    } catch (err) {
      done(err, null); // If error occurs, pass error to done
    }
  });
}
