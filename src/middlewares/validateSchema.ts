import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from 'joi';

export function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, 'body');
}
export function validateParams<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, 'params');
}

function validate(schema: ObjectSchema, type: 'body' | 'params'):ValidationMiddleware {
  return (req:Request, res:Response, next:NextFunction) => {
    const validate = schema.validate(req[type], { abortEarly: false });

    if (validate.error) {
      let errors = "";
      validate.error.details.forEach((detail, index) => {
        if (index !== validate.error.details.length - 1)
          errors += `${detail.message}\n`;
        else errors += detail.message;
      });
      res.status(400).send(errors)
    }
    next();
  };
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;