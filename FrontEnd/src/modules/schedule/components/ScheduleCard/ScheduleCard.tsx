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

export const ScheduleCard = ({ data }: ScheduleCardProps) => {
  const { day, startTime, endTime, tags, place, title, users } = data;

  return (
    <Container bg="white.900">
      <Flex justify="space-between">
        <LeftFlexContainer>
          <TitleContainer>
            <Icon as={BsBalloon} boxSize="24px" color="black.500" />
            <Text color="blue.400" as="b" fontSize="32px">
              {title}
            </Text>
            {tags.map(tag => (
              <Box
                bg={tag.color}
                borderRadius="8px"
                p="6px"
                color="blue.300"
                as="b"
              >
                {tag.title}
              </Box>
            ))}
          </TitleContainer>

          <LocationContainer>
            <Flex>
              <Icon as={IoLocationOutline} boxSize="18px" color="black.500" />
            </Flex>
            <Text>{place}</Text>
          </LocationContainer>

          <Flex gap="16px">
            {users.map(user => (
              <Image
                src={user.souce_image}
                objectFit="cover"
                alt={user.first_name}
                borderRadius="full"
                boxSize="44px"
                title={user.first_name}
                key={user.id}
              />
            ))}
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
            {day}
          </Text>
          <Text>{startTime}</Text>
          <Text>{endTime}</Text>
        </RightFlexContainer>
      </Flex>
    </Container>
  );
};
