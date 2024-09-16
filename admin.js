const express = require('express');

const passport = require('passport');

const routes = express.Router();

const admincontroller = require('../controller/admincontroller')

routes.post('/ragister', admincontroller.ragister);

routes.get('/viewAdmin', admincontroller.viewAdmin);


routes.post("/login", admincontroller.login)

routes.get("/faillogin", async (req, res) => {
    return res.status(400).json({ msg: "Admin not login", status: 0 });
});



module.exports = routes;