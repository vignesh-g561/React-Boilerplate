import React from 'react';
 require('../../scss/style.scss');
import AppBar from "material-ui/AppBar";
import Header from "./Header";
import DialogExampleSimple from "./DialogExampleSimple";
import MainContent from "./MainContent";
const App = () => (
    <div>
    <Header />
    <div className="container">
      <MainContent />
    </div>
    </div>
);

export default App;
