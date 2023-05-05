import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { BsBalloon, IoLocationOutline } from 'react-icons/all';
import {
  Container,
  LeftFlexContainer,
  LocationContainer,
  RightFlexContainer,
  TitleContainer,
} from './scheduleCard.styled';
import { ScheduleCardProps } from './schedulecard.interfaces';

export const ScheduleCard = (data: ScheduleCardProps) => {
  const { id, startTime, endTime, tag, title, users } = data;
  console.log(data)
  return (
    <Container bg="white.900">
      <Flex justify="space-between">
        <LeftFlexContainer>
          <TitleContainer>
            <Icon as={BsBalloon} boxSize="24px" color="black.500" />
            <Text color="blue.400" as="b" fontSize="32px">
              Festinha Dev Yazo
            </Text>
            <Box
              bg="green.500"
              borderRadius="8px"
              p="6px"
              color="blue.300"
              as="b"
            >
              Festinha
            </Box>
            <Box
              bg="orange.500"
              borderRadius="8px"
              p="6px"
              color="blue.300"
              as="b"
            >
              Devs
            </Box>
          </TitleContainer>

          <LocationContainer>
            <Flex>
              <Icon as={IoLocationOutline} boxSize="18px" color="black.500" />
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
          <Text color="blue.400" as="b" fontSize="18px">
            22 Junho
          </Text>
          <Text>16:00</Text>
          <Text>22:00</Text>
        </RightFlexContainer>
      </Flex>
    </Container>
  );
};
