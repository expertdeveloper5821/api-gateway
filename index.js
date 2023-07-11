import express from "express";
const app = express();
import './config/db';
import cors from "cors";
import passport from "passport";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv';
import { gateWayController } from "./controller/gateWayController";
dotenv.config()

// ALL THE MIDDLEWARES GOES HERE
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(passport.initialize());
require("./middleware/passport")(passport);

app.all("*",gateWayController);

// welcome message
app.get('/', (req, res) => {
 
  return res.send('Hey welcome to the  Technogetic')
})

const port = 5050;

app.listen(port, () => {
  console.log(`Server is running on port ${port} 👍️`);
});