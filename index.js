import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import initApp from "./src/Modules/app.router.js";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0; // something for error 
import connectDB from './DB/connection.js';
const app = express();
const port = 3000;
initApp(app,express);
connectDB().then(()=>{
    app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
});
