import { Router } from "./router";
import { formProvider } from './contexts/formContext';

const App = () => {
  return (
    <formProvider>
    <Router/>
    </formProvider>
  );
}

export default App;