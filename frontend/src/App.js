import React from "react";
// import Home from "./pages/home/Home";
import Venues from "./Components/venues/Venues";

function App() {
  return (
    <>
      <Venues />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/venues" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/caterer" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/decorator" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/cook" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/venue/page" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
