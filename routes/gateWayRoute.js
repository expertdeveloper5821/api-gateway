import express from "express";
import { gateWayController } from "../controller/gateWayController";

const route = express.Router()

route.post("/auth",async (req,res) => {
    console.log(req.body)
  //  gateWayController
});

export default route