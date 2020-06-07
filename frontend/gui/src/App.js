import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './routes';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


class App extends Component {
 
  render () {

    return (
      <div style={{height: "100%"}}>
        <BrowserRouter style={{height: "100%"}}>
            <BaseRouter />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
