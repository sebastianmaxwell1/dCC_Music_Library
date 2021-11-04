import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        <div>
          <NavigationBar />
        </div>
     );
  }
}
 
export default App;