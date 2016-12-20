import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import UserData from'./UserData';

const style = {
  height: 700,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
};

class MainContent extends Component{

  render(){
    return(
      <div>
        <Paper style={style} zDepth={2}>
        <div className="row">
        {
          UserData.map(function(d){
            return(

              <Paper style={{height:250,width:250,display: 'inline-block',marginTop:20}} zDepth={4} >
                <img src={d['Image']} />
                <h4>{d['Name']}</h4>
              </Paper>

            );
          })
        }
        </div>
        </Paper>
      </div>
    );
  }
}

export default MainContent;
