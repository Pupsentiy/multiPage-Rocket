import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import InternalRoutes from "./routes/Routes";
import { useState } from "react";
import { myContext } from "./hooks/hooks";
import Modal from "./components/modal/Modal";

function App() {
  const [active, setActive] = useState(false);
  return (
    <main>
      <myContext.Provider value={{ active, setActive }}>
        <Router>
          <Header />
          <InternalRoutes />
          <Modal />
          <Footer />
        </Router>
      </myContext.Provider>
    </main>
  );
}

export default App;
