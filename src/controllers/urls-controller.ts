import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { knex } from "@/database/knex"
import { urlShorterAlg } from "@/utils/urlShorterAlg";
import z from "zod"

class UrlController{

  async create(request: Request, response: Response, next: NextFunction){
    try{
    const bodySchema = z.object({
        url_original: z.string().url()
    })
    
    const { url_original } = bodySchema.parse(request.body)
    const url_encurtada = urlShorterAlg(url_original)
    
    const urlEncurtadaExist = await knex<UrlRepository>("urls").where({url_encurtada}).first()

    if(urlEncurtadaExist?.url_encurtada){
      return response.status(201).json({url_encurtada})
    }

    await knex<UrlRepository>("urls").insert({
      url_original,
      url_encurtada,
    })

    return response.status(201).json({url_encurtada})
    }catch(error){
      return next(error)
  }
}

  async show(request: Request, response: Response, next: NextFunction){
    try {

      const bodySchema = z.object({
        url_encurtada: z.string().max(7).min(7)
      })

      const {url_encurtada} = bodySchema.parse(request.params)

      const registro = await knex<UrlRepository>("urls").where({url_encurtada}).first()

      return response.redirect(`${registro?.url_original}`)
    } catch (error) {
      next(error)
    }
  }

}

export { UrlController }