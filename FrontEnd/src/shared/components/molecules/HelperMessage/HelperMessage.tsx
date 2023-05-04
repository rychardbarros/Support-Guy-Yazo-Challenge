import {
  Box,
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { HelperMessageProps } from './helperMessage.interfaces';

export const HelperMessage = ({ children }: HelperMessageProps) => {
  return (
    <Popover placement="top-start">
      <PopoverTrigger>
        <Button variant="unstyled">
          <Icon as={AiOutlineQuestionCircle} boxSize="34px" color="accent.white.1000" />
        </Button>
      </PopoverTrigger>
      <PopoverContent bg="accent.white.800">
        <PopoverArrow bg="accent.white.800" />
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
