const express = require("express");
const app = express();
var router = express.Router();
const basicAuth = require('express-basic-auth')

const getsecondsSinceEpoch = () => {
  return Math.round(Date.now() / 1000);
};

app.use(basicAuth(
  {'Value' : 'mysecrettoken'}
  ))

router.get("/time", (req, res, next) => {
  res.status(200).json({ epoch: getsecondsSinceEpoch() });
});



module.exports = router;

//const auth = {'Value' : 'mysecrettoken'}

// function verifyToken() {
//   if (req.headers == auth){

//     next();
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }
// }
