import { Box, Button, ButtonGroup, VStack } from '@chakra-ui/react';

function Pizza() {
  return (
    <VStack>
      <Box padding={2} w="full" maxW="500px" aspectRatio="1/1" bgColor="orange.50" />
      <ButtonGroup gap={4}>
        <Button colorScheme="orange" width='240px' size="lg">
          Order
        </Button>
        <Button colorScheme="orange" width='240px' size="lg" variant="outline">
          Reset
        </Button>
      </ButtonGroup>
    </VStack>
  );
}

export default Pizza;
