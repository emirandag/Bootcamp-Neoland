const express = require('express');
const { upload } = require('../../middlewares/files.middleware');
const { register, checkNewUser, resendCode, login, forgotPassword, sendPassword, modifyPassword, update, deleteUser, addUserProject } = require('../controllers/users.controller');
const { isAuth } = require('../../middlewares/auth.middleware');

const UserRoutes = express.Router();

UserRoutes.post('/register', upload.single('photo'), register);
UserRoutes.post('/checkuser', checkNewUser);
UserRoutes.post('/resendcode', resendCode);
UserRoutes.post('/login', login);
UserRoutes.get('/forgotpassword', forgotPassword);
UserRoutes.patch('/changepassword', [isAuth], modifyPassword);
UserRoutes.patch('/update/update', [isAuth], upload.single('image'), update);
UserRoutes.delete('/', [isAuth], deleteUser);
UserRoutes.get('/adduserproject/:id', addUserProject);

// -------REDIRECT --------------------
UserRoutes.get('/forgotpassword/sendPassword/:id', sendPassword);

module.exports = UserRoutes;
