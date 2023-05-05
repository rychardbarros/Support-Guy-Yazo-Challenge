import {
  Center,
  Image,
  Heading,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

export function Reports() {
  return (
    <Center flexDirection="column" gap={8}>
      <Image
        src="/src/assets/logo.png"
        height="114px"
        width="122px"
        alt="Logo Yazo"
        // marginBottom="140px"
      />
      <Heading fontSize={26} color="yellow.500">
        Para este desafio precisamos que você tire um relatório das agendas:
      </Heading>
      <UnorderedList>
        <ListItem color="white.1000">Todas as agendas;</ListItem>
        <ListItem color="white.1000">
          Todas as agendas com a tag “Dev”;
        </ListItem>
        <ListItem color="white.1000">
          Todas as agendas do período de 1 de junho a 1 de julho;
        </ListItem>
        <ListItem color="white.1000">
          Todas as agendas que o usuário Max participou;
        </ListItem>
      </UnorderedList>
      <Heading fontSize={26} color="white.1000">
        ~ Subir para uma pasta dentro do projeto os relatórios e a query ~
      </Heading>
    </Center>
  );
}
