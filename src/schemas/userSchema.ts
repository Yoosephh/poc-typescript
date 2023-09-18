import Joi from "joi";
import { IName, IUser } from "../../protocols";

export const userSchema = Joi.object<IName>({
  firstName: Joi.string().min(2).max(100).required().messages({
    'string.base': `Tipo de dado fornecido para o campo 'Primeiro nome' está incorreto. Deve ser do tipo string.`,
    'string.empty': `O campo 'Primeiro nome' foi recebido como vazio.`,
    'any.required':`É obrigatório fornecer o campo 'Primeiro nome'.`,
    'string.min': `O primeiro nome deve ter entre no mínimo 2 caracteres.`,
    'string.max': `O primeiro nome deve ter no máximo 100 caracteres (incluindo espaços).`
  }),
  lastName: Joi.string().min(2).max(100).required().label("Ultimo nome").messages({
    'string.base': `Tipo de dado fornecido para o campo 'Ultimo nome' está incorreto. Deve ser do tipo string.`,
    'string.empty': `O campo 'Ultimo nome' foi recebido como vazio.`,
    'any.required':`É obrigatório fornecer o campo 'Ultimo nome'.`,
    'string.min': `O ultimo nome deve ter no mínimo 2 caracteres.`,
    'string.max': `O ultimo nome deve ter no máximo 100 caracteres (incluindo espaços).`
  })
})

export const idSchema = Joi.object<Pick<IUser, "id">>({
  id: Joi.number().integer().min(1).required().messages({
    'number.base': `Tipo de dado fornecido para o campo 'Origem' está incorreto. Deve ser do tipo number.`,
    'number.empty': `É obrigatório fornecer o campo 'Origem'.`,
    'number.min': `O id da cidade de origem deve ser um número maior ou igual a 1.`,
    'number.integer': `O id da cidade de origem deve ser um número inteiro.`
  })
})