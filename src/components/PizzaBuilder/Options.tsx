import { VStack } from '@chakra-ui/react';
import Ingredients from './Ingredients';

function Options() {
  return (
    <VStack minH="800px" padding={2} borderRadius={8} borderWidth="2px" borderStyle="solid" borderColor="yellow.500">
      <Ingredients />
    </VStack>
  );
}

export default Options;
