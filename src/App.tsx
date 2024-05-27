import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import RQSuperHeroes from "./pages/RQSuperHeroes";
import SuperHeroes from "./pages/SuperHeroes";
import Header from "./components/layout/Header";
import NotFound from "./components/NotFound";
import "./App.scss";

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
            <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
