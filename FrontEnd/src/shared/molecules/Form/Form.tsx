import { Button, Center, Input } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { Form } from './form.styled'

type Inputs = {
  example: string;
  exampleRequired: string;
};

export function FormInput() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	console.log(watch('example')) // watch input value by passing the name of it

	return (
	/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Avatar />
			{/* register your input into the hook by invoking the "register" function */}
			<Center flexDirection="column" gap={4} marginTop={8}>
				<Input
					width="240px"
					placeholder="Insira sua Senha"
					defaultValue="test"
					borderColor="transparent"
					focusBorderColor="pink.400"
					bg="#242940"
					{...register('example')}
				/>

				{/* include validation with required or other standard HTML validation rules */}

				<Input
					width="240px"
					placeholder="Insira seu E-mail"
					borderColor="transparent"
					bg="#242940"
					focusBorderColor="pink.400"
					{...register('exampleRequired', { required: true })}
				/>
				{/* errors will return when field validation fails  */}
				{errors.exampleRequired && (
					<div>
						{' '}
						<span>
              O campo <strong>Senha</strong> é obrigatório
						</span>
					</div>
				)}
			</Center>

			<Button bg="orange" width="240px" type="submit" colorScheme="orange">
        Submit
			</Button>
		</Form>
	)
}
