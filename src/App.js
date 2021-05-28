import Theme from "./Theme";
import Header from "./components/header/header";
import Calendar from "./components/calendar/calendar";
import ButtonTab from "./components/buttonTab/buttonTab";
import Content from "./components/content/content";
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
`

const App = () => {
  return (
    <Theme>
      <Container>
        <Header />
        <Calendar />
        <ButtonTab />
        <Content />
      </Container>
    </Theme>
  );
};
export default App;
