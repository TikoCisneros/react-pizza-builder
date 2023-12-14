import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const Ingredients = () => {
  const [selected, setSelected] = useState(false);

  return (
    <VStack>
      <Heading as="h4" size="md" textAlign="left">
        Toppings:
      </Heading>
      <HStack flexWrap="wrap">
        {Array(10)
          .fill('')
          .map((_, index) => (
            <Box
              key={index * 2}
              borderRadius={2}
              padding={4}
              bgColor={selected ? 'orange.200' : 'orange.100'}
              onClick={() => setSelected((prevValue) => !prevValue)}
            >
              <Text as="i" fontSize="medium">
                Peri peri chicken
              </Text>
            </Box>
          ))}
      </HStack>
    </VStack>
  );
};

export default Ingredients;
