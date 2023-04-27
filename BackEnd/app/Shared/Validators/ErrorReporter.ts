import {
  ErrorReporterContract,
  MessagesBagContract,
  ValidationException,
} from '@ioc:Adonis/Core/Validator'

interface HttpResponse {
  showable?: boolean
  message?: string
  status?: number
}

interface Error {
  message: string
  field: string
}

interface ErrorResponse extends HttpResponse {
  errors: Error[]
}

export class ErrorReporter implements ErrorReporterContract<ErrorResponse> {
  public hasErrors = false

  private httpResponse: HttpResponse = {}
  private errors: Error[] = []

  constructor(private messages: MessagesBagContract, private bail: boolean) {}

  public report(
    pointer: string,
    rule: string,
    message: string,
    arrayExpressionPointer?: string,
    args?: any
  ) {
    this.hasErrors = true

    const errorMessage = this.messages.get(pointer, rule, message, arrayExpressionPointer, args)

    this.errors.push({ message: errorMessage, field: pointer })
    this.httpResponse = {
      message: errorMessage ?? 'Ooops! Algo deu errado!',
      status: 422,
      showable: true,
    }

    if (this.bail) {
      throw this.toError()
    }
  }

  public toError() {
    throw new ValidationException(false, this.toJSON())
  }

  public toJSON() {
    return {
      ...this.httpResponse,
      errors: this.errors,
    }
  }
}
