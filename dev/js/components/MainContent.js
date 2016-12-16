import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 500,
  width: '100%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const MainContent = () => (
  <div>
    <Paper style={style} zDepth={2}/>
  </div>
);

export default MainContent;
