import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from "react-router";
import NothingFoundPage from './pages/NothingFound';
import PlantDetail from "./pages/PlantPage";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NothingFoundPage/>} />
      <Route path="/plant/:id" element={<PlantDetail/>} />


    </Routes>
      
    </BrowserRouter>
  );
};

export default App;
