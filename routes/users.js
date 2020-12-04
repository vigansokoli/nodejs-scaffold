var express = require('express');
var router = express.Router();
var jwtAuth = require("../auth/jwt.passport");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/login", userController.login);

router.post("/register", userController.register);

router.get('/profile', jwtAuth, userController.profile);

router.put("/update",jwtAuth, userController.update);

router.get("/resetPassword", jwtAuth, userController.resetPassword);

router.get("/reset/:token", userController.newPassword);

router.post("/reset/:token", userController.storePassword);

router.delete('/delete/:id', jwtAuth, userController.delete);


module.exports = router;
