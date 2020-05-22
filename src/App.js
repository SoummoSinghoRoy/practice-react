import React, { Component } from 'react';

import Books from './components/Books';
import Data from './components/Data';
import Formdemo from './components/Formdemo';
import UserTable from './components/UserTable';
import Form from './components/Form';
import PostData from './playground/PostData';

class App extends Component {
  render() {
    return (
      <div>
        {/*<Books />
        <Data />
        <Formdemo />
        <UserTable /> 
        <Form />*/}
        <PostData />
        
      </div>
    )
  }
}

export default App;
