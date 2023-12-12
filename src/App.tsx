import Layout from './components/Layout';
import Container from './components/Container';
import Pizza from './components/Pizza';
import Options from './components/Options';

function App() {
  return (
    <Layout>
      <Container display="flex" flexDirection={{ base: 'column', lg: 'row' }} gap={2}>
        <Pizza />
        <Options />
      </Container>
    </Layout>
  );
}

export default App;
