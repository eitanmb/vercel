import {app} from "index";
import consola from "consola";
import dotenv from "dotenv";
dotenv.config();


console.log("dev");
app.listen(3000, () => consola.info("Server started"));