import "./index.scss";
import "@fontsource/rubik/500.css";

import Hero from "./components//Hero";
import Preview from "./components/Preview";
import Stages from "./components/Stages";
import Games from "./components/Games";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Preview />
      <Stages />
      <Games />
      <Footer />
    </div>
  );
}

export default App;
