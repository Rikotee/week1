'use strict';
import { cats, getCat } from '../models/catModel';

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  const catId = req.params.id;
  const cat = getCat(catId);
  res.json(cat.length > 0 ? cat.pop() : {});
};

const cat_post = (req, res) => {
  console.log('data from cat form: ', req.body);
  console.log('file from cat form: ', req.file);
  res.send('you sent the cat form');
};

export { cat_list_get, cat_get, cat_post };
