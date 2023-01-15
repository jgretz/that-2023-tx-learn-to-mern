import { QueryClient, QueryClientProvider } from "react-query";
import { RunDetail, RunList } from "./runs";
import { useAppStore } from "./shared/services";

const queryClient = new QueryClient();

function App() {
  useAppStore();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <RunList />
        <RunDetail />
      </div>
    </QueryClientProvider>
  );
}

export default App;
