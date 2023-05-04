import { Flex } from '@chakra-ui/react';
// import { ScheduleCard } from '../components/ScheduleCard/ScheduleCard';
import { SearchBar } from 'shared/components/molecules/SearchBar/SearchBar';
import { useState } from 'react';
import { ScheduleCard } from '../components/ScheduleCard/ScheduleCard';

export const Schedule = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <Flex gap="8px" flexDirection="column">
      <SearchBar
        placeholder="Pesquise por nome ou local da agenda"
        isSearching={false}
        onChange={(value: string) => setSearch(value)}
      />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
    </Flex>
  );
};
