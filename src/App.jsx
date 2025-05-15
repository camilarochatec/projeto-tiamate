import { QueryClientProvider } from "@tanstack/react-query";
import Paths from "./routes/Paths";
import { queryClient } from "./services";
import 'boxicons/css/boxicons.min.css';


const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Paths />
      </QueryClientProvider>
    </>
  );
}

export default App;