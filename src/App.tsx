import { Box, Center, Container, Image } from '@chakra-ui/react';

import logoPng from './assets/crazy_pizza_logo.png';

function App() {
  return (
    <Center justifyContent="center" minH="100vh">
      <Container
        w="full"
        minH="320px"
        maxW="1200px"
        position="absolute"
        bgColor="gray.200"
        borderRadius={24}
        padding={6}
      >
        <Image
          position="absolute"
          right="4"
          top="4"
          boxSize="140px"
          objectFit="cover"
          src={logoPng}
          alt="Crazy Pizza Logo"
        />
        <Box w="100%" h="40px" bg="tomato"></Box>
      </Container>
    </Center>
  );
}

export default App;
