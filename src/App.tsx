import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import { NavBar } from "./components/navbar/navbar";
import { useState } from "react";
import { HomePage } from "./components/homePage/homePage";
import { AuthenticationImage } from "./components/authenticationImage/authenticationImage";

function App() {
  const [active, setActive] = useState(0);
  let content;
  switch (active) {
    case 0:
      content = <HomePage />;
      break;
    case 2:
      content = <AuthenticationImage />;
      break;
    default:
      content = null; // or any default content you want to render
  }
  return (
    <MantineProvider>
      <NavBar active={active} setActive={setActive} />
      <div className="mainContentContainer">{content}</div>
    </MantineProvider>
  );
}

export default App;
