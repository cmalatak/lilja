import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./nav/Nav.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        {/* <Routes>
          <Route path="/" element={<Homepage text="Welcome" />} />\
        </Routes> */}
        <h3>🍊Get ready to cook some foooooood!🍊</h3>
      </header>
    </div>
  );
}

export default App;
