import AddressSelect from './components/AddressSelect/AddressSelect';
import Container from './components/Layout/Container';
import Clients from './components/Clients/Clients';

function App() {
  return (
    <Container>
      <AddressSelect />
      <Clients />
    </Container>
  );
}

export default App;
