import { Box, Button, Flex, Input } from '@chakra-ui/react';

export const SearchBar = () => {
  return (
    <Flex gap="8px">
      <Input placeholder="Pesquise por nome ou local da agenda" variant="filled" />
      <Button bg="accent.white.800" color="accent.blue.300" as="b">Procurar</Button>
    </Flex>
  );
};
