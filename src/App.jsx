import {
  Route,
  // Routes,
  // BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<SearchPage />} />
        <Route path="/pokemon" element={<PokemonInfo />} />
      </Route>
    )
  );

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<SearchPage />} />
    //     <Route path="/pokemon" element={<PokemonInfo />} />
    //   </Routes>
    // </BrowserRouter>

    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
