import { Panels } from "./Panels";
import { ThemeProvider } from "./components/themeProvider";
import { ConfigProvider } from "./configurator";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ConfigProvider>
        <Panels />
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
