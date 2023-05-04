import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { BsBalloon, IoLocationOutline } from 'react-icons/all';
import {
  Container,
  LeftFlexContainer,
  LocationContainer,
  RightFlexContainer,
  TitleContainer,
} from './scheduleCard.styled';
import MoreUsersImage from '../../../../../src/assets/Frame 16.svg';

export const ScheduleCard = () => {
  return (
    <Container bg="accent.white.900">
      <Flex justify="space-between">
        <LeftFlexContainer>
          <TitleContainer>
            <Icon as={BsBalloon} boxSize="24px" color="accent.black" />
            <Text color="accent.blue.400" as="b" fontSize="32px">
              Festinha Dev Yazo
            </Text>
            <Box bg="accent.green" borderRadius="8px" p="6px" color="accent.blue.300" as="b">
              Festinha
            </Box>
            <Box bg="accent.orange" borderRadius="8px" p="6px" color="accent.blue.300" as="b">
              Devs
            </Box>
          </TitleContainer>

          <LocationContainer>
            <Flex>
              <Icon as={IoLocationOutline} boxSize="18px" color="accent.black" />
            </Flex>
            <Text>Na casa do lago</Text>
          </LocationContainer>

          <Flex gap="16px">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9h7hpVIHaLYalBISnldpCoxOrybqBo0CUi_m-r-Yqh0LFxefLXSdj-Ikbo6lyFHjDfc&usqp=CAU"
              objectFit="cover"
              alt="Dan Abramov"
              borderRadius="full"
              boxSize="44px"
              title="Dan"
            />
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9h7hpVIHaLYalBISnldpCoxOrybqBo0CUi_m-r-Yqh0LFxefLXSdj-Ikbo6lyFHjDfc&usqp=CAU"
              objectFit="cover"
              alt="Dan Abramov"
              borderRadius="full"
              boxSize="44px"
              title="Dan"
            />
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9h7hpVIHaLYalBISnldpCoxOrybqBo0CUi_m-r-Yqh0LFxefLXSdj-Ikbo6lyFHjDfc&usqp=CAU"
              objectFit="cover"
              alt="Dan Abramov"
              borderRadius="full"
              boxSize="44px"
              title="Dan"
            />
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9h7hpVIHaLYalBISnldpCoxOrybqBo0CUi_m-r-Yqh0LFxefLXSdj-Ikbo6lyFHjDfc&usqp=CAU"
              objectFit="cover"
              alt="Dan Abramov"
              borderRadius="full"
              boxSize="44px"
              title="Dan"
            />
            <Image
              src="/src/assets/Frame 16.svg"
              objectFit="cover"
              alt="Dan Abramov"
              borderRadius="full"
              boxSize="44px"
              title="Dan"
            />
          </Flex>
        </LeftFlexContainer>

        <RightFlexContainer>
          <Text color="accent.blue.400" as="b" fontSize="18px">
            22 Junho
          </Text>
          <Text>16:00</Text>
          <Text>22:00</Text>
        </RightFlexContainer>
      </Flex>
    </Container>
  );
};
