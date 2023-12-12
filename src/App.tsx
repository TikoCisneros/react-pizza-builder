import { Box } from '@chakra-ui/react';
import Layout from './components/Layout';
import Container from './components/Container';

function App() {
  return (
    <Layout>
      <Container>
        <Box w="100%" h="40px" bg="tomato"></Box>
      </Container>
    </Layout>
  );
}

export default App;
