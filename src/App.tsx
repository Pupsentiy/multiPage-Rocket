import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import InternalRoutes from "./routes/Routes";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <InternalRoutes />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
