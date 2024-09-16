const express = require('express');

const Passport = require('passport');

const routes = express.Router();

const usercontroller = require('../controller/usercontroller');


routes.post('/adduser', Passport.authenticate("Users", { failureRedirect: "/admin/faillogin" }), usercontroller.adduser);


routes.put('/edituser/:id', Passport.authenticate("Users", { failureRedirect: "/admin/faillogin" }), usercontroller.edituser);

routes.delete('/deleteuser/:id', Passport.authenticate("Users", { failureRedirect: "/admin/faillogin" }), usercontroller.deleteuser);






module.exports = routes;