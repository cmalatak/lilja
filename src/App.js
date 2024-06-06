import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./nav/Nav.tsx";
import RecipeSkeleton from "./recipe/RecipeSkeleton.tsx";
import { Homepage } from "./homepage/index.tsx";
import { HomepageV1 } from "./homepage/HomepageV1.tsx";
import { HomepageV2 } from "./homepage/HomepageV2.tsx";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <h3>🍊Get ready to cook some foooooood!🍊</h3>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/homepagev1" element={<HomepageV1 />} />
            <Route path="/homepagev2" element={<HomepageV2 />} />
            <Route path="/recipe" element={<RecipeSkeleton />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
