import { Router } from "express";

import { urlRoutes } from "./urls-routes";
import { redirectRoutes } from "./redirect-routes";

const routes = Router();

routes.use("/urls", urlRoutes)
routes.use("/", redirectRoutes)


export { routes }