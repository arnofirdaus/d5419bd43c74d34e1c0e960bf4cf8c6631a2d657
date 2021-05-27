import Theme from "./Theme";
import Header from "./components/header";
import Calendar from "./components/calendar";
import ButtonTab from "./components/buttonTab";

const App = () => {
  return (
    <Theme>
      <Header />
      <Calendar />
      <ButtonTab />
    </Theme>
  );
};
export default App;
