import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";
import {Offer} from "./components/Offer/Offer";
import {GlobalToast} from "./common/components/GlobalToast/GlobalToast";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Offer/>
      <Contacts/>
      <GlobalToast/>
    </div>
  );
}

export default App;
