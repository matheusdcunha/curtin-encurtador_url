import { Router, Request, Response, NextFunction } from "express";
import { UrlController } from "@/controllers/urls-controller";

const redirectRoutes = Router();
const urlController = new UrlController();

redirectRoutes.get("/:url_encurtada", urlController.show);

export { redirectRoutes }