import { Box, Button, Flex, Icon, Input } from '@chakra-ui/react';
import { SearchBarProps } from './searchbar.interfaces';
import { useRef, useState } from 'react';
import { debounceEvent } from '../../../utils/forms/form.utils';
import { isStringEmpty } from '../../../utils/strings/strings.utils';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const SearchBar = ({
  placeholder,
  isSearching = false,
  onChange,
  defaultValue,
  inputId,
  style,
  ...rest
}: SearchBarProps) => {
  const [searchBar, setSearchBar] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchChange = () => {
    if (inputRef.current) {
      onChange(inputRef.current.value);
      setSearchBar(inputRef.current.value);
    }
  };

  const clearSearchBar = () => {
    onChange('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setSearchBar('');
  };

  return (
    <Flex gap="8px" style={style} {...rest}>
      <Flex w="100%">
        <Input
          ref={inputRef}
          type="text"
          id={inputId}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={debounceEvent(onSearchChange, 500)}
          variant="filled"
          borderEndRadius={isSearching ? 0 : 8}
        />
        {!isSearching && !isStringEmpty(searchBar) && (
          <Button onClick={clearSearchBar} borderStartRadius={0}>
            <Icon as={AiOutlineCloseCircle} boxSize="24px" />
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
