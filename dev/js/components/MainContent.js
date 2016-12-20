import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import UserData from'./UserData';

const style = {
  height: 500,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
};

class MainContent extends Component{

  render(){
    console.log(UserData);
    return(
      <div>
        <Paper style={style} zDepth={2}>
          <Paper style={{height:250,width:250,display: 'inline-block'}} zDepth={4} >
            <img src="http://www.wallpaper-network.com/wp-content/uploads/2011/09/skull-and-bones-wallpaper-250x250.jpg" />
          </Paper>
          <h4>Hi <i>Vignesh</i>!</h4>
          <h2><b>As the new year renews all the happiness and good tidings, hope the joyful spirit keeps glowing in the your heart forever! </b></h2>
        </Paper>
      </div>
    );
  }
}



export default MainContent;
