import React, { Component } from 'react';

import { appDiv } from './styles.scss';

class App extends Component<{}, {}> {
  render(): JSX.Element {
    return (
      <h1 className={appDiv}>
        This is the main App component. Start editing from here!
      </h1>
    );
  }
}

export default App;
