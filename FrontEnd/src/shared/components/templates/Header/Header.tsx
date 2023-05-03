import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { HelperMessage } from '../../molecules/HelperMessage/HelperMessage';
import { HeaderProps } from './header.interfaces';
import { useNavigate } from 'react-router-dom';

export const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <Flex width="100%" flexDirection="column" position="fixed" top="0" zIndex="2">
      <Flex bg="accent.black" p={1} alignItems="center" justifyContent="space-between">
        <Button bg="accent.yellow" h={6} color="accent.black" onClick={() => navigate('/')}>
          Voltar
        </Button>
        {title && (
          <Heading fontSize="24px" color="accent.white.1000">
            {title}
          </Heading>
        )}
        <HelperMessage>
          <Box>
            <Text>
              O usuário não consegue acessar nossa plataforma, aparece o erro{' '}
              <Text as="i">
                "Não foi possível autenticar, por favor tente novamente mais tarde."
              </Text>
              , pode verificar o que pode estar acontecendo?
            </Text>
            <Box pt={3}>
              <Text>
                <Text as="b">Usuário:</Text>
                <Text>Email: luciano.jazz@gmail.com</Text>
                <Text>Senha: luc1Jazz@</Text>
              </Text>
            </Box>
          </Box>
        </HelperMessage>
      </Flex>
    </Flex>
  );
};
