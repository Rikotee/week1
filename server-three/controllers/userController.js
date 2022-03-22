'use strict';
import { users, getUser } from '../models/userModel';

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  const userId = req.params.id;
  const user = getUser(userId);
  res.json(user.length > 0 ? user.pop() : {});
};

const user_post = (req, res) => {
  console.log('data from user form: ', req.body);
  res.send('you sent the user form');
};

export { user_list_get, user_get, user_post };
