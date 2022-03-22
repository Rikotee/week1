'use strict';
import express from 'express';
import { login, logout } from '../controllers/authController';
const router = express.Router();

router.post('/login', login);

router.get('/logout', logout);

export default router;
