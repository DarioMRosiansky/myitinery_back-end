import express from "express";
const router = express.Router();
import citiesRouter from "./cities.js";
import itinerariesRouter from "./itineraries.js";
import usersRouter from "./users.js";


router.use('/cities', citiesRouter);
router.use('/itineraries',itinerariesRouter);
router.use('/auth',usersRouter);



export default router;
