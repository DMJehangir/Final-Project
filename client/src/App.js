import styled from 'styled-components';
import Menu from './components/Menu.jsx';
import NavBar from './components/NavBar.jsx';

const Container = styled.div``;
const Main = styled.div``;
const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <NavBar/>
        <Wrapper>
          Video Cards
        </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
