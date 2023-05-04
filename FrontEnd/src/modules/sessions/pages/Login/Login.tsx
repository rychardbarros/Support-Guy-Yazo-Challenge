import { FormInput } from '../../../../shared/components/molecules/Form/Form'
import { WrapperLogin } from './login.styled'
import { useState } from 'react'

export function Login() {
	return (
		<WrapperLogin>
			<FormInput />
		</WrapperLogin>
	)
}
