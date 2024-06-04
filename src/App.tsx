import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./pages/Home";
import RQSuperHeroes from "./pages/RQSuperHeroes";
import SuperHeroes from "./pages/SuperHeroes";
import Header from "./components/layout/Header";
import NotFound from "./components/NotFound";
import "./App.scss";
import SuperHeroDetails from "./pages/SuperHeroDetails";
import ParallelRQ from "./pages/ParallelRQ";
import DependedQueries from "./pages/DependedQueries";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/super-heroes" element={<SuperHeroes />} />
            <Route path="/rq-parallel" element={<ParallelRQ />} />
            <Route
              path="/depended-queries"
              element={<DependedQueries email="sky@example.com" />}
            />
            <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
            <Route
              path="/rq-super-heroes/:heroId"
              element={<SuperHeroDetails />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
