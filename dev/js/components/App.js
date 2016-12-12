import React from 'react';
 require('../../scss/style.scss');
import AppBar from "material-ui/AppBar";
import CardsExample from "./CardsExample";
const App = () => (
    <div>
      <AppBar title="My Project" showMenuIconButton = {false} />
      <CardsExample />
    </div>
);

export default App;
