import { Button, Center, Flex, Input, Text, useToast } from '@chakra-ui/react';
import { Form } from 'shared/components/molecules/Form/Form';
import { useCallback } from 'react';
import { LoginFormValues } from '../../interfaces/login.interfaces';
import { useForms } from 'shared/components/molecules/Form/hooks/useForms';
import { Avatar } from 'shared/components/atoms/Avatar/Avatar';
import { LoginSchema } from '../../schemas/form.schema';
import { InputContainer } from './login.styled';
import { createSessionAPI } from 'modules/sessions/apis/login.apis';

export const Login = () => {
  const toast = useToast();

  const onSubmit = useCallback(async (data: LoginFormValues) => {
    const dataNew = {
      uid: 'root',
      password: 'acl@2022',
    };

    await createSessionAPI(dataNew);

    toast({
      description:
        'Não foi possível autenticar, por favor tente novamente mais tarde.',
      status: 'error',
      variant: 'solid',
      duration: 9000,
      isClosable: true,
    });
  }, []);

  const { schemaLogin } = LoginSchema();
  const { useFormGeneric } = useForms();
  const { handleSubmit, errors, register } =
    useFormGeneric<LoginFormValues>(schemaLogin);

  return (
    <Center>
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <Avatar />
        <Flex flexDirection="column" gap={4} marginTop={8}>
          <InputContainer>
            <Input
              width="300px"
              placeholder="Insira seu Username"
              borderColor="transparent"
              bg="#242940"
              focusBorderColor="yellow.500"
              {...register('username')}
            />

            {errors.username && (
              <Text>{errors.username.message || errors.username.message}</Text>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              width="300px"
              placeholder="Insira sua Senha"
              borderColor="transparent"
              focusBorderColor="yellow.500"
              bg="#242940"
              {...register('password')}
            />

            {errors.password && (
              <Text>{errors.password.message || errors.password.message}</Text>
            )}
          </InputContainer>

          <Button bg="yellow.500" type="submit" width="300px">
            Submit
          </Button>
        </Flex>
      </Form>
    </Center>
  );
};
