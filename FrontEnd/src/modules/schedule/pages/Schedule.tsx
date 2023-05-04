import { Flex } from '@chakra-ui/react';
import { ScheduleCard } from '../components/ScheduleCard/ScheduleCard';
import { SearchBar } from '../../../shared/components/molecules/SearchBar/SearchBar';

export const Schedule = () => {
  return (
    <Flex gap="8px" flexDirection="column">
      <SearchBar />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
    </Flex>
  );
};
