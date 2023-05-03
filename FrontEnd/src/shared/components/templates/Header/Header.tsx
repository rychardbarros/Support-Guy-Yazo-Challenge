import { Box, Button, Flex, Heading, Highlight, Text } from '@chakra-ui/react';
import { HelperMessage } from '../../molecules/HelperMessage/HelperMessage';
import { HeaderProps } from './header.interfaces';
import { useNavigate } from 'react-router-dom';

export const Header = ({ title, message }: HeaderProps) => {
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
          <Text>{message}</Text>
        </HelperMessage>
      </Flex>
    </Flex>
  );
};
