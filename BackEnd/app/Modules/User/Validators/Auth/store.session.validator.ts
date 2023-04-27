import { rules, schema } from '@ioc:Adonis/Core/Validator'

import { BaseValidator } from 'App/Shared/Validators/BaseValidator'

export class StoreSessionValidator extends BaseValidator {
  public schema = schema.create({
    authenticators: schema.array().members(
      schema.object().members({
        ref_code: schema.string({}, [
          rules.exists({
            column: 'ref_code',
            table: 'cadaster_items',
            where: {
              active: true,
            },
          }),
        ]),
        value: schema.string(),
      })
    ),
    password: schema.string.optional(),
  })
}
