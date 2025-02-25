import express from "express";

import { routes } from "./routes"
import { errorHandling } from "./middlewares/errorHandling";


const PORT = 3333;
const app = express();

app.use(express.json());

app.use(routes);

app.listen(PORT, ()=>{
  console.log(`Server running in port: ${PORT}` )
})