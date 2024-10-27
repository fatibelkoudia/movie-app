import AppRouter from "./Router";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <AppRouter />
      </div>
    </StyledEngineProvider>
  );
}
export default App;
