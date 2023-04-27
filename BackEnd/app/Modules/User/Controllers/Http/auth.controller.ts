import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { container } from 'tsyringe'

import { CreateAdminSessionService, CreateSessionService } from 'App/Modules/User/Services/Auth'
import { RevokeTokenService } from 'App/Modules/User/Services/Token'
import AppException from 'App/Shared/Exceptions/AppException'
import SuccessResponse from 'App/Shared/Responses/SuccessResponse'

import { StoreSessionValidator } from '../../Validators/Auth/StoreSessionValidator'
import { LoginAdminValidators } from '../../Validators/Shared/LoginAdminValidator'

export default class AuthController {
  public async login({ request, response,}: HttpContextContract) {
    const { authenticators, password } = await request.validate(StoreSessionValidator)

    try {
      const createSessionService = container.resolve(CreateSessionService)
      const newUser = await createSessionService.run({
        authenticators,
        productId,
        password,
      })

      return response.json(newUser)
    } catch (error) {
      throw new AppException(i18n.formatMessage('messages.login_error'), 401)
    }
  }

  public async logout({ request, i18n }: HttpContextContract) {
    const [, token] = request.headers().authorization!.split(' ')

    try {
      await container.resolve(RevokeTokenService).run(token)

      return SuccessResponse(i18n.formatMessage('messages.logout_success'), false)
    } catch (error) {
      throw new AppException(i18n.formatMessage('messages.logout_error'), 401)
    }
  }

  public async adminLogin({ request, response, i18n, productId }: HttpContextContract) {
    if (!productId) {
      throw new AppException(
        i18n.formatMessage('messages.required_header_was_not_provided', {
          header: 'Product-Identifier',
        })
      )
    }

    const adminLoginDTO = await request.validate(LoginAdminValidators.Store)

    try {
      const createAdminSessionService = container.resolve(CreateAdminSessionService)
      const sessionData = await createAdminSessionService.run(
        adminLoginDTO.email.toLowerCase().trim(),
        adminLoginDTO.password,
        productId
      )

      return response.json(sessionData)
    } catch (error) {
      throw new AppException(i18n.formatMessage('messages.login_error'), 401)
    }
  }
}
