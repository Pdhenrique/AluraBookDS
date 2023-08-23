import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbButton, Thing } from '../.';

const App = () => {
  return (
    <div>
      <AbButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
