import React, { Component } from 'react';
import Books from './components/Books';
import Data from './components/Data';
import Form from './components/Form';
// import UserTable from './Components/UserTable';

class App extends Component {
  render() {
    return (
      <div>
        {/*<Books />
        <Data />*/}
        <Form />
      {/*<UserTable /> */}
      </div>
    )
  }
}

export default App;
