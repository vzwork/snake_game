import * as React from 'react';
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import CanvasBoard from './components/CanvasBoard';
import ScoreCard from './components/ScoreCard';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Container maxW='container.lg' centerContent>
          <Heading as='h1' size='xl'>Snake Game</Heading>
          <ScoreCard />
          <CanvasBoard height={600} width={1000} />
        </Container>
      </ChakraProvider>
    </Provider>
  );
};

export default App;