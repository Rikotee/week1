'use strict';
import express from 'express';
import catRoute from './routes/catRoute';
import userRoute from './routes/userRoute';
import authRoute from './routes/authRoute';
import passport from './utils/pass';
// import session from 'express-session';
import cors from 'cors';
const app = express();
const port = 3000;

/*
app.use(
  session({
    secret: 'whateva',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
*/

app.use(passport.initialize());
// app.use(passport.session());

/*
const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(403).json({ message: 'Please log in' });
  }
};
*/

app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', { session: false }), catRoute);
app.use('/user', passport.authenticate('jwt', { session: false }), userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
