import Theme from "./Theme";
import Header from "./components/header/";
import Calendar from "./components/calendar/";
import ButtonTab from "./components/buttonTab/";
import Content from "./components/content/";

const App = () => {
  return (
    <Theme>
      <Header />
      <Calendar />
      <ButtonTab />
      <Content />
    </Theme>
  );
};
export default App;
