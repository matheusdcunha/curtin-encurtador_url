import { Router, Request, Response, NextFunction } from "express";
import { UrlController } from "@/controllers/urls-controller";

const urlRoutes = Router();
const urlController = new UrlController();

urlRoutes.post("/", urlController.create);

export { urlRoutes }