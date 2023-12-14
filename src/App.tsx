import Layout from './components/Layout';
import Container from './components/Container';
import Pizza from './components/PizzaBuilder/Pizza';
import Options from './components/PizzaBuilder/Options';

function App() {
  return (
    <Layout>
      <Container
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'auto 500px' }}
        gridTemplateRows="auto"
        gap={2}
      >
        <Options />
        <Pizza />
      </Container>
    </Layout>
  );
}

export default App;
