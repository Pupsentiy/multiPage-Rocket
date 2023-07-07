import { BrowserRouter as Router } from "react-router-dom";
import { Fragment, useState } from "react";

import { myContext } from "./hooks/hooks";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";

import InternalRoutes from "./routes/Routes";

function App() {
  const [activeForm, setActiveForm] = useState<boolean>(false);
  const [activeBurgerMenu, setActiveBurgerMenu] = useState<boolean>(false);
  return (
    <main>
      <myContext.Provider
        value={{
          activeForm,
          activeBurgerMenu,
          setActiveForm,
          setActiveBurgerMenu,
        }}
      >
        <Router>
          {activeBurgerMenu ? (
            <BurgerMenu />
          ) : (
            <Fragment>
              <Header />
              <InternalRoutes />
              <Footer />
            </Fragment>
          )}
          <Modal />
        </Router>
      </myContext.Provider>
    </main>
  );
}

export default App;
