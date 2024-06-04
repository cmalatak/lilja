import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./nav/Nav.tsx";
import RecipeSkeleton from "./recipe/RecipeSkeleton.tsx";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <h3>🍊Get ready to cook some foooooood!🍊</h3>
          <Routes>
            <Route path="/recipe" element={<RecipeSkeleton />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
