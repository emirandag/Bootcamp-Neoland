const express = require('express');
const { upload } = require('../../middlewares/files.middleware');
const { 
    register, 
    checkNewUser, 
    resendCode, 
    login, 
    autoLogin,
    forgotPassword, 
    sendPassword, 
    modifyPassword, 
    update, 
    deleteUser, 
    addUserProject, 
    addUserTask,
    getAllUsers,
    getUser,
    changeEmail,
    checkNewEmail
} = require('../controllers/users.controller');
const { isAuth, isAuthManager, isAuthAdmin } = require('../../middlewares/auth.middleware');

const UserRoutes = express.Router();

UserRoutes.post('/register', upload.single('photo'), register);
UserRoutes.post('/checkuser', checkNewUser);
UserRoutes.post('/resendcode', resendCode);
UserRoutes.post('/login', login);
UserRoutes.post('/login/autologin', autoLogin);
UserRoutes.post('/forgotpassword', forgotPassword);
UserRoutes.patch('/changepassword', [isAuth], modifyPassword);
UserRoutes.patch('/update/update', [isAuth], upload.single('image'), update);
UserRoutes.delete('/', [isAuth], deleteUser);
UserRoutes.patch('/adduserproject/:id', [isAuthManager], addUserProject);
UserRoutes.patch('/addusertask/:id', [isAuthManager], addUserTask);
UserRoutes.get("/", [isAuthManager], getAllUsers)
UserRoutes.get("/:id", [isAuthManager], getUser)
UserRoutes.post("/changeemail", [isAuth], changeEmail)
UserRoutes.patch("/checkemail", [isAuth], checkNewEmail)

// -------REDIRECT --------------------
UserRoutes.post('/forgotpassword/sendPassword/:id', sendPassword);

module.exports = UserRoutes;
