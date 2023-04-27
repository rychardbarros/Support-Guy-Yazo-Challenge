import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ErrorReporter } from './ErrorReporter'

export class BaseValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = ErrorReporter

  public messages: { [key: string]: Function } = {
    required: (field: string) => {
      return `O campo ${field} é obrigatório`
    },
    email: (field: string) => {
      return `O campo ${field} deve ser um endereço de e-mail válido`
    },
    minLength: (field: string, minLength: number) => {
      return `O campo ${field} deve ter no mínimo ${minLength} caracteres`
    },
    regex: (field: string) => {
      return `O campo ${field} deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número`
    },
  }
}
